
import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Store',
      description: 'A responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
      tags: ['Vue.js', 'TailwindCSS', 'Laravel'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      featured: true,
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application with drag-and-drop task organization, reminders, and user authentication.',
      tags: ['Vue.js', 'CSS', 'PHP'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with location search and interactive data visualization.',
      tags: ['JavaScript', 'Bootstrap', 'API'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'Content management system with markdown support, categories, and responsive design.',
      tags: ['Laravel', 'TailwindCSS', 'PHP'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      featured: false,
      category: 'Backend'
    }
  ];
  
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-secondary/20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my work and contributions
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/60 hover:bg-white text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "glass-panel overflow-hidden transition-all duration-300 group hover:shadow-lg",
                project.featured ? "md:col-span-2" : ""
              )}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Projects;
