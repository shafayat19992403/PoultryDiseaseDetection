from flask import Flask, request, jsonify, send_from_directory
import os
from werkzeug.utils import secure_filename
import torch
from PIL import Image
import numpy as np
from torchvision import models, transforms
from flask_cors import CORS
from efficientnet_pytorch import EfficientNet
from torch import nn

app = Flask(__name__)
CORS(app)
# Set a directory for temporary file saving and static file serving
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Ensure upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Function to check if the file extension is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# Recreate the model architecture
model = EfficientNet.from_pretrained('efficientnet-b0')
model._fc = nn.Linear(in_features=model._fc.in_features, out_features=2)  # Modify for binary classification

# Load the saved state_dict
model.load_state_dict(torch.load('efficientnet_model2.pth'))
model = model.to(device)  # Make sure to move the model to the correct device (CPU or GPU)
print("Model loaded successfully!")

model.eval()


transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # ImageNet stats
])

# Route for static files (serving uploaded images)
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        # Save the file
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # Load the image and apply transformations
        image = Image.open(file_path)
        image = transform(image).unsqueeze(0)  # Add batch dimension
        model.eval()
        # Make prediction
        with torch.no_grad():
            outputs = model(image)
            
            # Apply softmax to get probabilities
            softmax = torch.nn.Softmax(dim=1)
            probabilities = softmax(outputs)
            
            # Get the predicted class (highest probability)
            predicted_class = torch.argmax(probabilities, dim=1).item()
            
            # Optionally, get the probability of the predicted class
            prediction_prob = probabilities[0][predicted_class].item()
            predicted_class = predicted_class + 1
            print(probabilities)

        # Return the prediction and the image path
        return jsonify({
            'prediction': predicted_class,
            'prediction_probability': prediction_prob,
            'image_path': f'uploads/{filename}'
        })

    return jsonify({'error': 'File type not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)
