
import React from 'react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: '🌐',
      level: 90,
      category: 'Frontend',
      description: 'Semantic markup, accessibility, modern HTML5 features'
    },
    {
      name: 'CSS',
      icon: '🎨',
      level: 85,
      category: 'Frontend',
      description: 'Responsive design, animations, CSS Grid and Flexbox'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      level: 85,
      category: 'Frontend',
      description: 'ES6+, DOM manipulation, async programming'
    },
    {
      name: 'Vue.js',
      icon: '⚛️',
      level: 80,
      category: 'Frontend',
      description: 'Component architecture, state management, Vue Router'
    },
    {
      name: 'TailwindCSS',
      icon: '💨',
      level: 90,
      category: 'Frontend',
      description: 'Utility-first workflow, custom configurations'
    },
    {
      name: 'Bootstrap',
      icon: '🅱️',
      level: 85,
      category: 'Frontend',
      description: 'Responsive layouts, component customization'
    },
    {
      name: 'PHP',
      icon: '🐘',
      level: 70,
      category: 'Backend',
      description: 'Server-side scripting, API integration'
    },
    {
      name: 'Laravel',
      icon: '🔧',
      level: 75,
      category: 'Backend',
      description: 'MVC architecture, routing, Eloquent ORM'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            The technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-3xl">{skill.icon}</span>
              </div>
              
              <div className="mb-3">
                <div className="h-2 w-full bg-secondary/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out origin-left"
                    style={{ width: `${skill.level}%`, transform: 'scaleX(0)' }}
                    data-animate="skill-bar"
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>{skill.category}</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Skills;

