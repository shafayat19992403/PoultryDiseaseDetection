import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      {/* <Index></Index> */}
      <Hero></Hero>
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Why Early Detection is Needed?
          </h1>

          <p className="text-xl text-gray-800 font-semibold leading-relaxed mt-4 mb-6 px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            Early diagnosis plays a pivotal role in maintaining the health and
            productivity of poultry farms. Identifying diseases at an early
            stage allows farmers to take swift action, preventing the spread of
            infections and minimizing the risk of widespread outbreaks. By
            detecting potential health issues early, farmers can reduce the need
            for expensive treatments and avoid significant losses in production,
            such as decreased egg output or stunted growth. In addition to
            safeguarding the health of the flock, early diagnosis helps improve
            biosecurity practices, ensuring that diseases do not affect other
            birds. This proactive approach not only lowers veterinary costs but
            also enhances the overall efficiency of the farm. With consumers
            increasingly concerned about the quality and safety of poultry
            products, early diagnosis is key to maintaining consumer trust and
            meeting industry standards. By investing in early disease detection,
            poultry farmers can achieve better financial outcomes, improved
            flock management, and contribute to a healthier, more sustainable
            poultry industry.
          </p>
        </div>
      </div>
    </div>
  );
}
