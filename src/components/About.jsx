import React from 'react';
import { Github, Linkedin, Mail,ChevronRight } from 'lucide-react';


const About = () => {
  const skills = ['Python', 'JavaScript', 'Java', 'C', 'PHP', 'React', 'TailwindCSS', 'Node.js', 'MySQL', 'Linux', 'Git', 'Neovim'];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
               <ChevronRight /> whoami<br/>
              <span className="text-blue-400 font-mono">Anupam — Full Stack Developer | Anime Fan | Hacker Vibes</span>
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a BCA student and open source enthusiast who values elegance, speed, and the command line. 
              Focused on building powerful, minimal software that combines modern tech stacks with traditional Unix philosophy.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              <ChevronRight /> echo $PHILOSOPHY<br/>
              <span className="text-green-400 font-mono">"Break things. Fix them. Learn forever."</span><br/>
              <span className="text-yellow-400 font-mono">"Code like a pirate, deploy like a boss." 🏴‍☠️</span>
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/gomugomucode" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/unish06/" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:alinedtwins@gmail.com"  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Tech Stack & Environment</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                <span className="text-green-400 font-mono">⚡ OS:</span> Arch Linux | DWM / Hyperland / River<br/>
                <span className="text-blue-400 font-mono">🛠️ Editor:</span> Neovim<br/>
                <span className="text-purple-400 font-mono">💻 Philosophy:</span> Minimalist Dev | Hacker Vibes
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{skill}</span>
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