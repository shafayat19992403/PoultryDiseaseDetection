import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="hero relative">
      <div className="flex-1 pt-36 px-6 md:px-16">
        {/* Title Section */}
        <div className="hero__title text-2xl md:text-3xl font-extrabold text-gray-800">
          Our Model's Metrics
        </div>

        {/* Model Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-5">
          Name of Our Model:
        </h2>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">
          EfficientNetb0
        </h2>

        {/* Metrics Section */}
        <div className="mt-10 space-y-6">
          <div className="text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold">Accuracy:</span> 99.59%
            </p>
            <p>
              <span className="font-bold">Precision:</span> 99.50%
            </p>
            <p>
              <span className="font-bold">Recall:</span> 99.75%
            </p>
            <p>
              <span className="font-bold">F1 Score:</span> 99.62%
            </p>
            <p>
              <span className="font-bold">ROC AUC:</span> 99.96%
            </p>
            <p>
              <span className="font-bold">PR AUC:</span> 99.96%
            </p>
          </div>

          {/* Confusion Matrix */}
          <div className="mt-6 p-6 border rounded-lg shadow-xl bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Confusion Matrix:
            </h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-green-600">
                  True Positives
                </h4>
                <p className="text-2xl font-semibold text-green-700">1592</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-red-600">
                  False Positives
                </h4>
                <p className="text-2xl font-semibold text-red-700">8</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-yellow-600">
                  False Negatives
                </h4>
                <p className="text-2xl font-semibold text-yellow-700">4</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-blue-600">
                  True Negatives
                </h4>
                <p className="text-2xl font-semibold text-blue-700">1320</p>
              </div>
            </div>
          </div>

          {/* Classification Report */}
          <div className="mt-6 p-6 border rounded-lg shadow-xl bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Classification Report:
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-gray-700 font-semibold">
                      Class
                    </th>
                    <th className="px-4 py-2 text-gray-700 font-semibold">
                      Precision
                    </th>
                    <th className="px-4 py-2 text-gray-700 font-semibold">
                      Recall
                    </th>
                    <th className="px-4 py-2 text-gray-700 font-semibold">
                      F1-Score
                    </th>
                    <th className="px-4 py-2 text-gray-700 font-semibold">
                      Support
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 text-gray-600 font-medium">0</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">
                      1.00
                    </td>
                    <td className="px-4 py-2 text-green-600 font-semibold">
                      0.99
                    </td>
                    <td className="px-4 py-2 text-green-600 font-semibold">
                      1.00
                    </td>
                    <td className="px-4 py-2 text-gray-600">1328</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 text-gray-600 font-medium">1</td>
                    <td className="px-4 py-2 text-blue-600 font-semibold">
                      0.99
                    </td>
                    <td className="px-4 py-2 text-blue-600 font-semibold">
                      1.00
                    </td>
                    <td className="px-4 py-2 text-blue-600 font-semibold">
                      1.00
                    </td>
                    <td className="px-4 py-2 text-gray-600">1596</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-600 font-medium">
                      Accuracy
                    </td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600"></td>
                    <td className="px-4 py-2 text-gray-600"></td>
                    <td className="px-4 py-2 text-gray-600">2924</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-600 font-medium">
                      Macro avg
                    </td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">2924</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-600 font-medium">
                      Weighted avg
                    </td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">1.00</td>
                    <td className="px-4 py-2 text-gray-600">2924</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-10">
          <Link
            href="https://www.sciencedirect.com/science/article/pii/S2352340923006170"
            className="bg-primary-blue text-white rounded-full py-3 px-8 font-semibold hover:bg-blue-700 transition duration-300"
          >
            Read the Dataset's Paper
          </Link>
        </div>
      </div>

      {/* Overlay Section */}
      <div className="hero__image-overlay_3"></div>
    </div>
  );
};

export default page;
