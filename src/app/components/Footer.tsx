import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Enes İğneci</h3>
            <p className="text-muted-foreground">Android Developer & Technical Writer</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/enesigneci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-full hover:bg-green-600 hover:text-white transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/enesigneci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-full hover:bg-green-600 hover:text-white transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:enesigneci@gmail.com"
              className="p-3 bg-muted rounded-full hover:bg-green-600 hover:text-white transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Enes İğneci © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
