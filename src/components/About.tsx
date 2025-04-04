import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: 'Sep 2024 - Present',
      title: 'Software Engineer Trainee',
      company: 'Vista Neotech Private Limited',
      description: 'Working on full-stack development projects and building scalable backend applications',
    },
    {
      year: 'Nov 2023 - June 2024 - 8 mos',
      title: 'Software Engineer Intern',
      company: 'Prompt Personnel',
      description: 'Developed backend services and APIs for web applications using Java Springboot',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-serif">
              Hi, I'm Khushi Gupta. A Skilled Software Developer with a strong foundation in building applications using Java, Spring Boot, and RESTful APIs. Eager to learn and grow in backend technologies, with exposure to the frontend technologies for full-stack versatility, microservices and High-level System Design concepts. I am passionate about building scalable applications and continuously learning new technologies.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hobbies</h3>
                <p className="text-gray-600 dark:text-gray-300 font-serif">
                When I'm not immersed in coding, I enjoy expanding my knowledge by reading tech blogs, exploring innovative tools, and contributing to open-source projects. 
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 font-serif">
                <li>Practicing yoga for mental clarity and physical well-being</li>
                <li>Traveling to discover new cultures and gain fresh perspectives</li>
                </ul>
            </div>
         
            <div className="mt-8">
              <a
               href='https://drive.google.com/file/d/17G7Qk8137RyFJesvdcNNdwkMOuGyxlnX/view?usp=sharing'
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>

           

           
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{item.year}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</div>
              <div className="text-gray-600 dark:text-gray-300">{item.company}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-400 font-serif">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;