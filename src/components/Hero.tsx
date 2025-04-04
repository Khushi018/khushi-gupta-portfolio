import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h4 className="text-xl md:text-2xl">Hello 👋, I'm</h4>
            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Khushi Gupta
              <span className="block text-blue-600 dark:text-blue-400">And I'm a Full Stack Java Developer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Experienced Full Stack Java Developer focused on building robust and scalable server-side applications.
              Proficient in API development, database optimization, and cloud infrastructure.
            </p>
            
            <div className="flex space-x-6 mt-8 mb-8">
              <a href="https://github.com/khushi018" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/khushi018/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/khushi018g" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                View Projects
              </a>
                {/* <a
              href='https://drive.google.com/file/d/17G7Qk8137RyFJesvdcNNdwkMOuGyxlnX/view?usp=sharing'
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                Resume
                </a> */}
              
            </div>
          </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
             src='https://raw.githubusercontent.com/Khushi018/khushi-gupta-portfolio/refs/heads/main/src/components/khushi.jpg'
              alt="Professional headshot"
              className="h-64 object-cover mx-auto  rounded-lg"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;