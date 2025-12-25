import movieAppImg from '../assets/movie-app.png';
import blogAppImg from '../assets/blog-app.png';

const projectsData = [
  {
    title: 'Movie Search App',
    image: movieAppImg,
    description: 'A dynamic, multi-page application for searching movies using the OMDb API, built with React and React Router.',
    tech: ['React', 'React Router', 'Tailwind CSS', 'API'],
    liveUrl: 'https://arminshami7.github.io/movie-search-app/',
    codeUrl: 'https://github.com/arminshami7/movie-search-app',
  },
  {
    title: 'Simple Blog Platform',
    image: blogAppImg,
    description: 'A clean and modern blog platform fetching and displaying posts, built to practice React fundamentals and Tailwind CSS.',
    tech: ['React', 'React Router', 'Tailwind CSS'],
    liveUrl: 'https://arminshami7.github.io/react-blog-app/',
    codeUrl: 'https://github.com/arminshami7/react-blog-app',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col">
              
              {/* --- تغییر ۱: عکس الان یک لینک است --- */}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover hover:opacity-75 transition-opacity duration-300" 
                />
              </a>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* --- تغییر ۲: عنوان الان یک لینک است --- */}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                </a>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- تغییر ۳: دکمه Live Demo حذف شده و دکمه Code در مرکز قرار گرفته --- */}
                <div className="mt-auto pt-4">
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors block text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;