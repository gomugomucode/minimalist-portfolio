import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Minimalist Portfolio',
      description: 'A fast, dark-mode portfolio built with React and TailwindCSS. Features dynamic content, contact form, and mobile responsiveness.',
      tech: ['React', 'TailwindCSS', 'Netlify', 'Figma'],
      link: '#',
      github: 'https://github.com/gomugomucode/minimalist-portfolio'
    },
    {
      title: 'CLI Virtual Assistant (Jarvis)',
      description: 'Unix-style assistant for automating daily tasks and system management with intelligent command processing.',
      tech: ['Python', 'Linux', 'API integrations'],
      link: '#',
      github: 'https://github.com/gomugomucode/Jarvis'
    },
    {
      title: 'Anime Tracker Web App',
      description: 'Full-stack CRUD app to track favorite anime, with authentication and social features for anime enthusiasts.',
      tech: ['Node.js', 'Express', 'MySQL', 'React'],
      link: '#',
      github: 'https://github.com/gomugomucode/anime-tracker'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.link}
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
                <a 
                  href={project.github}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;