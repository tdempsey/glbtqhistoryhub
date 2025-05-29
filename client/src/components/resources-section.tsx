import { Button } from "@/components/ui/button";
import { FileText, Clock, Image, Map } from "lucide-react";

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Resources</h2>
          <p className="text-xl text-black">Access historical documents, timelines, and educational materials</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Historical Documents */}
          <div className="glass-effect rounded-xl p-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-black">Historical Documents</h3>
            <p className="text-black mb-6 text-center">Access digitized letters, newspapers, flyers, and other primary source materials from Georgia's LGBTQ+ history.</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium">
              Browse Documents
            </Button>
          </div>

          {/* Interactive Timeline */}
          <div className="glass-effect rounded-xl p-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-black">Interactive Timeline</h3>
            <p className="text-black mb-6 text-center">Explore key events, milestones, and movements in Georgia's LGBTQ+ history through our interactive timeline.</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium">
              View Timeline
            </Button>
          </div>

          {/* Educational Materials */}
          <div className="glass-effect rounded-xl p-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-black">Educational Materials</h3>
            <p className="text-black mb-6 text-center">Download lesson plans, research guides, and other educational resources for teachers and students.</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium">
              Download Materials
            </Button>
          </div>
        </div>

        {/* Featured Collection */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-black">Featured Collection</h3>
          <div className="glass-effect rounded-2xl p-8">
            <div className="lg:flex lg:items-center lg:space-x-8">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Historic civil rights demonstration" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-2xl font-semibold mb-4 text-black">Early LGBTQ+ Activism in Atlanta</h4>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Discover the untold stories of brave individuals who fought for LGBTQ+ rights in Atlanta during the 1970s and 1980s. This collection includes personal letters, photographs, and newspaper clippings that document the early days of the movement.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
