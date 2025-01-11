'use client';

import React, { useState, ReactElement } from 'react';
import { Github, Linkedin, Code2, LucideIcon, ExternalLink, Briefcase, Mail, MapPin, Download, Play } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  videoUrl: string;
  videoType: 'loom' | 'mp4';
  github?: string;
  live?: string;
  tech: string[];
  thumbnail: string;
}

interface QuickLink {
  icon: LucideIcon;
  label: string;
  href: string;
  bg: string;
}

interface ExperienceSection {
  title: string;
  items: string[];
}

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Python Space Invaders Clone",
      description: "A modernized clone of the classic Space Invaders arcade game built with Python and Pygame. Features include dynamic enemy movement, score tracking, and sound effects.",
      videoUrl: "https://www.loom.com/share/44f7d38e4a554d2685f543b2af4a09db",
      videoType: "loom",
      github: "https://github.com/jlpanetta1681/space-invaders",
      tech: ["Python", "Pygame", "OOP", "Game Development"],
      thumbnail: "/space-cover.jpg"
    },
    {
      title: "Polyspot Translator",
      description: "A language translation application that seamlessly translates text between multiple languages. Built with React and leveraging modern translation APIs.",
      videoUrl: "https://example.com/polyspot-demo.mp4",
      videoType: "mp4",
      github: "https://github.com/jlpanetta1681/polyspot",
      live: "https://polyspot-translator.vercel.app",
      tech: ["React", "TypeScript", "Translation API", "Tailwind CSS"],
      thumbnail: "/polyspot-logo.jpg"
    }
  ];

  const quickLinks: QuickLink[] = [
    { icon: Github, label: "GitHub", href: "https://github.com/jlpanetta1681", bg: "from-gray-700 to-gray-800" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/jlpanetta1681", bg: "from-blue-700 to-blue-800" },
    { icon: Download, label: "Resume", href: "public\LinkedInRres.pdf", bg: "from-purple-700 to-purple-800" },
    { icon: Mail, label: "Contact", href: "mailto:jlpanetta1681@gmail.com", bg: "from-green-700 to-green-800" }
  ];

  const experienceSections: ExperienceSection[] = [
    {
      title: "Testing & QA",
      items: [
        "90% test coverage achievement",
        "Jest and Cypress expertise",
        "React Testing Library mastery",
        "CI/CD integration"
      ]
    },
    {
      title: "Development",
      items: [
        "React & TypeScript",
        "T3 Stack proficiency",
        "State management expertise",
        "Performance optimization"
      ]
    }
  ];
  const handleVideoClick = (index: number): void => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  const renderVideoPreview = (project: Project, index: number): ReactElement => {
    if (playingVideo === index) {
      if (project.videoType === "loom") {
        return (
          <div className="aspect-video">
            <iframe
              src={project.videoUrl.replace('/share/', '/embed/')}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        );
      } else {
        return (
          <video
            src={project.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        );
      }
    }

    return (
      <>
         <Image
           src={"project.thumbnail"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0} // Prioritize loading the first image
          />
        <div 
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => handleVideoClick(index)}
        >
          <Play size={48} className="text-white opacity-75" />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg mb-8">
              <div className="bg-gray-900 rounded-lg p-8">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Joe Panetta
                </h1>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin size={16} />
                  <span>Akron, Ohio, 44305</span>
                  <span className="mx-2">|</span>
                  <Mail size={16} />
                  <a href="mailto:jlpanetta1681@gmail.com" className="hover:text-blue-400 transition-colors">
                    jlpanetta1681@gmail.com
                  </a>
                </div>
                <h2 className="text-3xl font-semibold mb-8 text-blue-400">
                  Frontend Developer → QA Automation Engineer
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${link.bg} p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 group`}
                >
                  <link.icon size={24} className="group-hover:text-white" />
                  <span className="text-sm font-semibold">{link.label}</span>
                </a>
              ))}
            </div>

            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Code2 size={24} className="text-blue-400" />
                Featured Projects
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="aspect-video bg-gray-700 relative overflow-hidden">
                      {renderVideoPreview(project, index)}
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a href={project.github} className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                            <Github size={16} />
                            Code
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Briefcase size={24} className="text-blue-400" />
                Experience Highlights
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experienceSections.map((section, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-750">
                    <h4 className="text-xl font-bold mb-4 text-blue-400">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;