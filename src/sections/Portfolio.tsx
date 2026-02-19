import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioConfig } from '@/config';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  githubUrl?: string;
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  const isGitHub = !!project.githubUrl;
  const CardWrapper = isGitHub ? 'a' : 'div';
  const wrapperProps = isGitHub 
    ? { href: project.githubUrl, target: '_blank', rel: 'noopener noreferrer' } 
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        'group block cursor-pointer transition-all duration-700 ease-out-quart',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-exvia-subtle rounded-lg">
        <div className="aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              'w-full h-full transition-transform duration-700 ease-out-cubic group-hover:scale-105',
              isGitHub ? 'object-contain p-8 bg-white' : 'object-cover'
            )}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/20 transition-colors duration-500" />

        {/* Badge - Show platform name */}
        <div className="absolute top-3 right-3">
          <span className={cn(
            "px-2.5 py-1 text-[10px] sm:text-xs font-geist-mono backdrop-blur-sm rounded-full flex items-center gap-1",
            isGitHub 
              ? "bg-exvia-black/80 text-white" 
              : "bg-white/90 text-exvia-black"
          )}>
            {isGitHub && <Github className="w-3 h-3" />}
            {project.category.replace("Created in ", "").replace("CREATED IN ", "")}
          </span>
        </div>

        {/* Arrow Icon */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-exvia-black" />
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-3 sm:mt-4 space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-exvia-black group-hover:text-exvia-black/80 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-exvia-black/50">{project.category}</p>
      </div>
    </CardWrapper>
  );
}

export function Portfolio() {
  if (portfolioConfig.projects.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(5, 100);

  const displayProjects = portfolioConfig.projects;

  return (
    <section id="portfolio" className="w-full py-12 sm:py-16 lg:py-20 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-6 sm:mb-8">
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-exvia-black transition-all duration-800 ease-out-quart',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            Portfolio
          </h2>
        </div>

        {/* Projects Grid - 3 on top, 2 on bottom */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
