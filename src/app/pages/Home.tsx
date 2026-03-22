import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { Advertisement } from '../components/Advertisement';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      
      {/* Ad after hero */}
      <div className="bg-muted/30 py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <Advertisement size="large" />
        </div>
      </div>
      
      <Experience />
      
      <Articles />
      
      {/* Ad before contact */}
      <div className="bg-background py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <Advertisement size="banner" />
        </div>
      </div>
      
      <Contact />
    </>
  );
}
