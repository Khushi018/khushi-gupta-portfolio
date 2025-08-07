
import { Code2, FileJson, Layout, Server, Database, Cpu, Box, Container, Cloud, GitBranch, Github as Git, Terminal, Send, CoffeeIcon } from 'lucide-react';
// Import skill icons


const Skills = () => {
  const skills = [
    {
      category: 'Backend',
      items: [
      { name: 'Java', icon: CoffeeIcon },
      { name: 'JDBC', icon: Database },
      { name: 'Maven', icon: Box },
      { name: 'Spring Boot', icon: Server },
      { name: 'GraphQL', icon: Code2 },
      { name: 'Microservices', icon: Cloud },
      { name: 'SQL', icon: Database }
      ]
    },
    {
      category: 'Frontend',
      items: [
      { name: 'React', icon: Code2 },
      { name: 'Angular', icon: Code2 },
      { name: 'Tailwind', icon: Layout },
      { name: 'TypeScript', icon: FileJson },
      { name: 'HTML', icon: Layout },
      { name: 'CSS', icon: Layout },
      { name: 'JavaScript', icon: Code2 }
      ]
    },
    {
      category: 'DevOps',
      items: [
      { name: 'Docker', icon: Container },
      { name: 'AWS', icon: Cloud },
      { name: 'CI/CD', icon: GitBranch },
      { name: 'Git', icon: Git }
      ,{ name: 'Kubernetes', icon: Server },
      { name: 'Jenkins', icon: Terminal },
      { name: 'GCP', icon: Cloud }

      ]
    },
    {
      category: 'Tools',
      items: [
      { name: 'Postman', icon: Send },
      { name: 'Lombok', icon: Box },
      { name: 'Redis', icon: Cpu },
      { name: 'Swagger', icon: Layout },
      { name: 'GitHub', icon: Git },
      { name: 'IntelliJ', icon: Terminal },
      { name: 'Eclipse', icon: Terminal },
      ]
    },
    ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;