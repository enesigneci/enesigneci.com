import { Calendar, Clock, TrendingUp, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { useArticles } from '../hooks/useArticles';

export function Articles() {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <section className="py-20 bg-muted/30" id="articles">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Loader2 className="w-10 h-10 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading articles from Medium...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/30" id="articles">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-green-600 hover:underline"
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30" id="articles">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-foreground mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I share my insights and experiences on Android development through articles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/blog/${article.id}`}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group block border border-border/50 hover:border-green-600/30"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-foreground/80">{article.views}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-foreground mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
