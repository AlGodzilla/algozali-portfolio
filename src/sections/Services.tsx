import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { servicesConfig } from '@/config';
import { Database, BarChart3, Server, Workflow, Circle, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Database,
  BarChart3,
  Server,
  Workflow,
};

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Circle;
}

interface ServiceCardProps {
  service: { iconName: string; title: string; description: string };
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const Icon = getIcon(service.iconName);

  return (
    <div
      className={cn(
        'group p-5 sm:p-6 bg-exvia-subtle/50 rounded-xl border border-exvia-border/50 hover:border-exvia-black/20 hover:bg-white hover:shadow-lg transition-all duration-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white border border-exvia-border mb-4 group-hover:border-exvia-black/20 transition-colors">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-exvia-black" />
      </div>

      {/* Content */}
      <h3 className="text-base sm:text-lg font-semibold text-exvia-black mb-2">
        {service.title}
      </h3>
      <p className="text-xs sm:text-sm text-exvia-black/60 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  if (servicesConfig.services.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(servicesConfig.services.length, 100);

  return (
    <section id="expertise" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-6 sm:mb-8">
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-exvia-black transition-all duration-800 ease-out-quart',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            Expertise
          </h2>
        </div>

        {/* Services Grid - 2 columns on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {servicesConfig.services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
