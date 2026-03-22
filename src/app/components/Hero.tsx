import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-background overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm">
              <MapPin className="w-4 h-4" />
              Android Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-gray-900 dark:text-foreground font-bold">
            Hi, I'm <span className="text-green-600">Enes İğneci</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A passionate Android developer with <strong>10 years of experience</strong> crafting 
            beautiful, performant mobile applications. I share my knowledge and insights through 
            writing on Medium.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="https://medium.com/@enesigneci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Read My Articles
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-600 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors text-lg font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com/enesigneci" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-muted rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-foreground hover:text-green-600 hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/enesigneci" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-muted rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-foreground hover:text-green-600 hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:enesigneci@gmail.com" className="p-4 bg-white dark:bg-muted rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-foreground hover:text-green-600 hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
