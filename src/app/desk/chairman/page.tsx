import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";

export default function ChairmanDesk() {
  const profileImg = PlaceHolderImages.find(img => img.id === "chairman-portrait");

  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Chairman's Desk</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A message from our visionary leader, Shri Mahendra Singh Choudhary.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-[500px] md:h-auto">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt={profileImg.description}
                  fill
                  className="object-cover"
                  data-ai-hint={profileImg.imageHint}
                />
              )}
              <div className="absolute bottom-0 inset-x-0 bg-primary/90 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Mahendra Singh Choudhary</h3>
                <p className="text-sm text-accent font-semibold uppercase">Chairman</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-16 space-y-6">
              <Quote className="h-12 w-12 text-accent/20 rotate-180" />
              <h2 className="text-3xl font-bold text-primary italic">"Education is the most powerful weapon which you can use to change the world."</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Laxmidhar Polytechnic College, our vision has always been to create a learning environment where technical excellence meets ethical leadership. In today's rapidly changing industrial landscape, the role of a technician is more critical than ever. We are not just training engineers; we are building problem-solvers who will lead the infrastructure of tomorrow.
                </p>
                <p>
                  Our commitment to the Alwar region is unwavering. By providing high-quality Diploma education, we aim to empower the youth of Rajasthan with skills that make them industry-ready from day one. I invite all aspiring students to join us in this journey of innovation and growth.
                </p>
                <p>
                  We continuously invest in state-of-the-art laboratory equipment and foster a culture of hands-on learning. My best wishes to all the students and faculty who make Laxmidhar Polytechnic College a beacon of hope and professional achievement.
                </p>
              </div>
              <div className="pt-8 flex flex-col items-end">
                <div className="border-t border-border pt-4 w-64 text-right">
                  <p className="font-bold text-primary text-xl">M.S. Choudhary</p>
                  <p className="text-sm text-muted-foreground">Chairman, Laxmidhar Polytechnic College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
