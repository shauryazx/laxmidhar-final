import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, Flag, Mic2 } from "lucide-react";

const newsItems = [
  {
    type: "Admission",
    date: "June 05, 2024",
    title: "New Admission Session 2024-25 Announced",
    desc: "Applications are now invited for diploma courses in all engineering streams at Laxmidhar Polytechnic College. Limited seats available!",
    icon: Bell
  },
  {
    type: "Event",
    date: "May 20, 2024",
    title: "Annual Cultural Fest 'Srijan 2024'",
    desc: "Our annual cultural festival concluded with great fanfare showcasing student talents in music, dance, and arts.",
    icon: Flag
  },
  {
    type: "Academic",
    date: "May 12, 2024",
    title: "Semester Examination Schedule Released",
    desc: "Students can now check the detailed BTER examination schedule on the notice board and student portal.",
    icon: Calendar
  },
  {
    type: "Placement",
    date: "April 28, 2024",
    title: "Industrial Visit to RICCO Manufacturing Units",
    desc: "Mechanical final year students visited top local manufacturing plants to understand modern assembly line practices.",
    icon: Mic2
  },
  {
    type: "Update",
    date: "April 15, 2024",
    title: "New Solar Energy Lab Inaugurated",
    desc: "A state-of-the-art solar research lab has been added to the Electrical Engineering department for advanced research.",
    icon: Bell
  }
];

export default function NewsPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">News & Events</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest happenings, academic calendars, and event announcements at Laxmidhar Polytechnic College.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, i) => (
            <Card key={i} className="group hover:border-primary/50 transition-all shadow-sm">
              <div className="md:flex">
                <div className="md:w-1/4 bg-primary/5 flex flex-col items-center justify-center p-6 text-center border-b md:border-b-0 md:border-r">
                  <div className="bg-primary/10 p-4 rounded-full mb-2">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="outline" className="bg-primary text-primary-foreground font-bold">{item.type}</Badge>
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
