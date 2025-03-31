
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const baseImageUrl = "https://raw.githubusercontent.com/Khushi018/khushi018.github.io/refs/heads/main/images/react-images/";
const personalProjects = [
  {
    title: "Orbitz.com Clone",
    description:
      "A travel search engine to search hotels, flights, and rentals.",
    image: `${baseImageUrl}orbit.png`,
    category: "frontend",
    tech: ["JavaScript", "CSS", "HTML"],
    demo: "https://github.com/Khushi018/Orbitz-clone",
    highlights: [
      "Search and book hotels, flights, and rentals",
      "Responsive and user-friendly UI",
      "Dynamic filtering and sorting options",
    ],
  },
  {
    title: "Leetcode Clone",
    description: "A coding practice platform with DSA challenges.",
    image: `${baseImageUrl}aryabhatta.png`,
    category: "frontend",
    tech: ["Python", "React", "Postgres"],
    demo: "https://coding.dev.aryabhata.org/",
    highlights: [
      "Problem-solving challenges",
      "User authentication and leaderboard",
      "Real-time coding environment",
    ],
  },
  {
    title: "Airline Reservation System",
    description: "A comprehensive flight booking system.",
    image: `${baseImageUrl}air-hero.png`,
    category: "backend",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    demo: "https://github.com/Khushi018/Airline-Reservation-System",
    icon: "Flight",
    highlights: [
      "Role-based auth JWT",
      "Architecture for booking, flights",
      "Deployed backend on AWS EC2",
    ],
  },
  {
    title: "TRIPTALESPAY",
    description:
      "A multi-service platform for recharge and bill payments, hotel and flight bookings.",
    image: `${baseImageUrl}triptales.png`,
    category: "fullstack",
    tech: ["Angular", "Bootstrap", "Node.js", "Express", "SQL"],
    demo: "https://triptalespay.com/",
    icon: "Payments",
    highlights: [
      "Recharge & hotel & flight booking APIs",
      "Role-based authentication using JWT",
      "OTP verification for secure user registration",
    ],
  },
  {
    title: "Sweetopia",
    description: "A backend architecture - RESTful APIs.",
    image: `${baseImageUrl}sweetopia.png`,
    category: "fullstack",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JavaScript"],
    demo: "https://github.com/Khushi018/Sweetopia",
    icon: "ShoppingCart",
    highlights: [
      "Product and inventory management",
      "User role-based authentication, secured APIs",
      "Multiple APIs for customers, products, and orders",
    ],
  },
  {
    title: "Online Banking System",
    description: "A console-based banking application.",
    image: `${baseImageUrl}bank2.jpeg`,
    category: "backend",
    tech: ["Java", "JDBC", "MySQL"],
    demo: "https://github.com/Khushi018/Online-Banking-Application",
    icon: "Bank",
    highlights: [
      "Customer account creation and management",
      "Accountant role for handling transactions",
      "Deposit, withdrawal, and money transfers",
    ],
  },
  {
    title: "My Glamm Clone",
    description:
      "A web-based platform for purchasing beauty and cosmetic products.",
    image: `${baseImageUrl}glammhero.png`,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://hermoso.netlify.app/",
    icon: "ShoppingBag",
    highlights: [
      "Eye-catching and responsive UI design",
      "User authentication with sign-in and login functionality",
      "Product search and filtering features",
    ],
    responsibilities: [
      "Developed the Login/Signup and Checkout pages",
      "Worked on responsiveness for various devices",
      "Implemented navigation and page linking",
    ],
  },
  {
    title: "QuesTime",
    description: "Interviews and one-on-one sessions platform",
    image: `${baseImageUrl}main-questime.png`,
    category: "backend",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    demo: "https://github.com/Khushi018/Questime",
    icon: "Calendar",
    highlights: [
      "Create one-on-one interview slots",
      "Users can book available slots seamlessly",
      "Bulk interview creation via CSV file upload",
    ],
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        <Slider {...settings}>
          {personalProjects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="spa flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                      >
                        Github Repo
                      </button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
