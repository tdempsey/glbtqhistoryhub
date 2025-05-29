import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">
          Preserving Our Legacy
        </h2>
        <p className="text-xl sm:text-2xl text-black mb-8 leading-relaxed">
          The Georgia LGBTQ History Project is dedicated to documenting, preserving, and sharing the rich history of LGBTQ+ communities across Georgia.
        </p>
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-black">Our Mission</h3>
          <p className="text-lg text-black leading-relaxed">
            We believe that every story matters. Through oral histories, archival research, and community engagement, we work to ensure that the experiences, struggles, and triumphs of Georgia's LGBTQ+ individuals and organizations are preserved for future generations.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Community Engagement Card */}
          <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black">Community Engagement</h4>
            <p className="text-black">Connecting with LGBTQ+ individuals and allies to collect and share personal stories and experiences.</p>
          </div>
          
          {/* Historical Documentation Card */}
          <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black">Historical Documentation</h4>
            <p className="text-black">Preserving important documents, photographs, and artifacts that tell the story of Georgia's LGBTQ+ history.</p>
          </div>
          
          {/* Educational Outreach Card */}
          <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black">Educational Outreach</h4>
            <p className="text-black">Providing resources and programs to educate the public about LGBTQ+ history and contributions.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("#resources")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
          >
            Explore Archives
          </Button>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
}
