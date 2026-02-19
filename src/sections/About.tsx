import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/config';

export function About() {
  if (!aboutConfig.description && aboutConfig.stats.length === 0) return null;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="px-6 lg:px-12 xl:px-16">
        <div ref={sectionRef}>
          {/* Section Heading */}
          {aboutConfig.label && (
            <div
              className={cn(
                'mb-6 sm:mb-8 transition-all duration-800 ease-out-quart',
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-exvia-black">
                {aboutConfig.label}
              </h2>
            </div>
          )}

          {/* Main Text */}
          {aboutConfig.description && (
            <div
              className={cn(
                'mb-8 sm:mb-10 transition-all duration-800 ease-out-quart',
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              <p className="text-sm sm:text-base text-exvia-black/80 leading-relaxed">
                {aboutConfig.description}
              </p>
            </div>
          )}

          {/* Stats Grid - responsive columns */}
          <div
            className={cn(
              'grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-exvia-border transition-all duration-800 ease-out-quart',
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Experience */}
            {aboutConfig.experienceValue && (
              <div>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-exvia-black">
                  {aboutConfig.experienceValue}
                </span>
                <span className="text-[10px] sm:text-xs text-exvia-black/60 leading-tight block mt-1">
                  {aboutConfig.experienceLabel?.replace('\n', ' ')}
                </span>
              </div>
            )}

            {/* Other Stats */}
            {aboutConfig.stats.map((stat, index) => (
              <div key={index}>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-exvia-black">{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-exvia-black/60 leading-tight block mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
