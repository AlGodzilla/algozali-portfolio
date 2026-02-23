import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import { testimonialsConfig } from '@/config';

export function Testimonials() {
  if (!testimonialsConfig.heading && testimonialsConfig.testimonials.length === 0) return null;

  const testimonials = testimonialsConfig.testimonials;
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  if (testimonials.length === 0) return null;

  return (
    <section id="research" className="w-full py-12 sm:py-16 lg:py-20 bg-exvia-subtle/30">
      <div ref={sectionRef} className="px-6 lg:px-12 xl:px-16">
        {/* Header - single big word */}
        <div className="mb-6 sm:mb-8">
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-exvia-black transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            Research
          </h2>
        </div>

        {/* Research Cards - single card spans full width */}
        <div
          className={cn(
            'grid gap-6 transition-all duration-800 ease-out-quart',
            testimonials.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'bg-white rounded-xl p-6 lg:p-8 border border-exvia-border hover:border-exvia-black/20 transition-colors duration-300',
                testimonials.length === 1 && 'max-w-none'
              )}
            >
              {/* IEEE Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg border border-exvia-border p-2 flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt="IEEE Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-exvia-black">IEEE Xplore</p>
                  <p className="text-xs text-exvia-black/50">December 2024</p>
                </div>
              </div>

              {/* Paper Title */}
              <h4 className="text-lg font-semibold text-exvia-black mb-3 line-clamp-3">
                Beyond Chatting: An Analysis of the Full Potential Use of Chat Generative AI for University Students
              </h4>

              {/* Description */}
              <p className="text-sm text-exvia-black/60 leading-relaxed mb-6">
                {testimonial.quote.substring(testimonial.quote.indexOf('This study'))}
              </p>

              {/* Author & Link */}
              <div className="flex items-center justify-between pt-4 border-t border-exvia-border">
                <div>
                  <p className="text-sm font-medium text-exvia-black">{testimonial.author}</p>
                  <p className="text-xs text-exvia-black/50">{testimonial.role}</p>
                </div>
                <a
                  href="https://ieeexplore.ieee.org/document/10780832/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-exvia-black hover:text-exvia-black/70 transition-colors"
                >
                  View Paper
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
