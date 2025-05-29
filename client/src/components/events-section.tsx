import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  return (
    <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Events</h2>
          <p className="text-xl text-black">Join us for educational programs, community gatherings, and historical presentations</p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">Upcoming Events</h3>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-effect rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-white/20 rounded mb-2"></div>
                  <div className="h-8 bg-white/20 rounded mb-4"></div>
                  <div className="h-20 bg-white/20 rounded mb-3"></div>
                  <div className="h-6 bg-white/20 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : events && events.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div key={event.id} className="glass-effect rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 rounded-lg p-3 flex-shrink-0">
                      <Calendar className="text-white h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-black">{event.title}</h4>
                      <p className="text-purple-600 font-medium mb-2">{event.date}</p>
                      <p className="text-black mb-3">{event.description}</p>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        <span className="bg-purple-600/30 text-black px-3 py-1 rounded-full">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-black text-lg">No upcoming events at this time. Check back soon!</p>
            </div>
          )}
        </div>

        {/* Past Events Archive */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-black">Past Events Archive</h3>
          <div className="glass-effect rounded-xl p-8">
            <p className="text-lg text-black mb-6">Explore our collection of past events, presentations, and community gatherings that have helped build our historical record.</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
              View Event Archive
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
