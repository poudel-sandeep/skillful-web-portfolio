
import React from 'react';
import { User, Mail, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                My journey in web development
              </p>
            </div>
            
            <div className="prose max-w-none text-foreground">
              <p className="mb-4">
                Hello! I'm a Junior Frontend Developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. I started my journey in web 
                development two years ago and have been continuously learning and growing since then.
              </p>
              
              <p className="mb-4">
                With a solid foundation in HTML, CSS, and JavaScript, I've expanded my skill set to 
                include modern frameworks and technologies like Vue.js and Laravel. I'm experienced 
                in building responsive interfaces with TailwindCSS and Bootstrap, ensuring that 
                websites look great on all devices.
              </p>
              
              <p>
                I'm a quick learner, problem-solver, and enjoy collaborating with others to create 
                exceptional web experiences. I'm constantly exploring new technologies and techniques 
                to improve my craft.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Name</span>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <p className="font-medium">2+ Years</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                  alt="Developer workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full filter blur-2xl pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 glass-panel px-5 py-4 shadow-glass">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">BSc in Computer Science</p>
                    <p className="text-xs text-muted-foreground">University of Technology</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Frontend Development Certification</p>
                    <p className="text-xs text-muted-foreground">Tech Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2021',
                  title: 'Started Learning Web Development',
                  description: 'Began my journey with HTML, CSS, and JavaScript fundamentals'
                },
                {
                  year: '2022',
                  title: 'First Freelance Projects',
                  description: 'Completed several small websites for local businesses'
                },
                {
                  year: '2022',
                  title: 'Learned Vue.js & TailwindCSS',
                  description: 'Expanded my skillset with modern frontend frameworks'
                },
                {
                  year: '2023',
                  title: 'Backend Development',
                  description: 'Started learning PHP and Laravel for full-stack capabilities'
                },
                {
                  year: '2023',
                  title: 'Junior Developer Position',
                  description: 'Secured my first professional role as a Junior Frontend Developer'
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center z-10">
                        <Calendar className="w-3 h-3" />
                      </div>
                    </div>
                    
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'ml-auto pl-8'}`}>
                      <div className={`glass-panel p-5 ${index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
