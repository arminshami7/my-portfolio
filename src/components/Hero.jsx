function Hero() {
    return(
        <section id="Home" className="min-h-screen flex flex-col items-center justify-start 
        text-center pt-40 sm:pt-32 px-4 sm:px-8">

            <div className="max-w-3x1">

                <img src={`${import.meta.env.BASE_URL}images/profile1.jpg`} className="w-28 h-28 sm:w-36 sm:h-36 
                md:w-40 md:h-40 mx-auto mb-6 rounded-full object-cover bg-gray-800">
                </img>

                <h1 className="font-extrabold">

                    <span className="text-transparent bg-clip-text bg-gradient-to-r
                    from-blue-400 to-teal-300 font-mono 
                    text-3xl sm:text-4xl md:text-5xl">
                        Armin Sahami
                    </span>

                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-gray-300 mt-4">
                    Front-End Developer & React Specialist
                </p>
                <p className="text-sm sm:text-base  text-gray-400 mt-6 max-w-xl mx-auto">
                    I build fast, reponsive, and beautiful web application. Let's create somthing amazing together.
                </p>
                <a 
                href="#projects"
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white 
                font-bold py-3 px-8 rounded-full transition-colors text-sm sm:text-base">
                    View My Work
                </a>
            </div>
        </section>
    );
}

export default Hero;