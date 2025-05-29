export default function MissionSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              We are dedicated to collecting, preserving, and sharing the stories that have shaped Georgia's LGBTQ+ community. Through oral histories, artifacts, documents, and digital archives, we ensure these vital narratives are not lost to time.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Every story matters. Every voice deserves to be heard. Join us in building a comprehensive record of LGBTQ+ life in Georgia from the past to the present.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Historical Archives</h3>
              <p className="text-sm text-gray-600">Preserving documents, photos, and artifacts</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Oral Histories</h3>
              <p className="text-sm text-gray-600">Recording personal stories and experiences</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Education</h3>
              <p className="text-sm text-gray-600">Sharing knowledge through programs and resources</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Community</h3>
              <p className="text-sm text-gray-600">Building connections across generations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
