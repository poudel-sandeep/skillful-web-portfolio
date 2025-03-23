
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-block px-3 py-1 mb-5 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in" 
            style={{ '--index': '0' } as React.CSSProperties}
          >
            Junior Frontend Developer
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in" 
            style={{ '--index': '1' } as React.CSSProperties}
          >
            Creating exceptional <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              web experiences
            </span>
          </h1>

          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" 
            style={{ '--index': '2' } as React.CSSProperties}
          >
            I'm a passionate frontend developer skilled in crafting responsive, 
            user-friendly interfaces with modern web technologies.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" 
            style={{ '--index': '3' } as React.CSSProperties}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors shadow-soft"
            >
              Get in touch
            </a>
            
            <a 
              href="#projects" 
              className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-lg transition-colors"
            >
              View my work
            </a>
          </div>
        </div>

        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-float blur-3xl"></div>
          </div>
        </div>
      </div>

      <button 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        onClick={scrollToSkills}
        aria-label="Scroll to skills section"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
