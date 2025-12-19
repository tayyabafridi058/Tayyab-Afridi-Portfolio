import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-bold text-accent-start uppercase tracking-widest mb-16">
            Trusted by World Class Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
                {
                    text: "Extraordinary performance! Quick solutions. Highly recommended for any serious product design work.",
                    name: "Hugo Messy",
                    role: "CEO of Sky Tech",
                    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                },
                {
                    text: "Get quick solutions with great quality—a recommendation that's unequivocal. The branding was spot on.",
                    name: "Sarah Jenkins",
                    role: "Founder, ArtSpace",
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                },
                {
                    text: "Professional, creative, and truly results-driven! Transformed our confusing app into a seamless experience.",
                    name: "James Bond",
                    role: "Product Lead, MI6",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-6 relative p-8 rounded-3xl bg-background/50 hover:bg-background transition-colors">
                    <Quote className="text-accent-start w-10 h-10 opacity-20" />
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground">
                        "{item.text}"
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-6 border-t border-border/50">
                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full grayscale object-cover" />
                        <div>
                            <h4 className="font-bold text-foreground">{item.name}</h4>
                            <p className="text-xs text-muted uppercase tracking-wide">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;