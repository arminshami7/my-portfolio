// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-slate-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/arminshami7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/%D8%A2%D8%B1%D9%85%DB%8C%D9%86-%D8%B3%D9%87%D8%A7%D9%85%DB%8C-1832b921a/" target="_blank" rel="noopener noreferrer" 
          className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;