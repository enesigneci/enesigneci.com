import { useParams, Link } from 'react-router';
import { Calendar, Clock, ArrowLeft, Tag, TrendingUp, Loader2 } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';
import { Advertisement } from '../components/Advertisement';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import 'highlight.js/styles/github-dark.css';

export function BlogDetail() {
  const { id } = useParams();
  const { articles, loading } = useArticles();

  const article = articles.find(a => a.id === id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-green-600 animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO title="Article Not Found" />
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (exclude current article)
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO 
        title={article.title}
        description={article.excerpt}
        image={article.image}
        keywords={article.tags}
        url={`https://enesigneci.com/blog/${article.id}`}
        type="article"
      />
      {/* Back Button */}
      <div className="bg-muted/30 border-b border-border/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-900/20 text-green-400 rounded-full text-sm border border-green-800/30"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>{article.views} views</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pb-6 border-b border-border/50">
            <div className="w-12 h-12 bg-green-900/20 rounded-full flex items-center justify-center border border-green-800/30">
              <span className="text-green-500 text-xl font-bold">EI</span>
            </div>
            <div>
              <div className="text-foreground font-medium">{article.author}</div>
              <div className="text-sm text-muted-foreground">Android Developer</div>
            </div>
          </div>
        </header>

        {/* Ad placement */}
        <div className="mb-12">
          <Advertisement size="large" />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12 markdown-content dark:prose-invert transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Mid-article Ad */}
        <div className="my-12">
          <Advertisement size="banner" />
        </div>

        {/* Author Info */}
        <div className="bg-muted/30 rounded-xl p-8 mb-12 border border-border/50 transition-colors duration-300">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-800/30">
              <span className="text-green-500 text-2xl font-bold">EI</span>
            </div>
            <div>
              <h3 className="text-xl text-foreground font-bold mb-2">About {article.author}</h3>
              <p className="text-muted-foreground mb-4">
                Passionate Android developer sharing knowledge and insights through technical writing. 
                Follow me on Medium for more articles about Android development, Kotlin, and best practices.
              </p>
              <a 
                href="https://medium.com/@enesigneci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 font-medium"
              >
                Follow on Medium →
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-border/50 pt-12 transition-colors duration-300">
            <h2 className="text-2xl text-foreground font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-green-600/30 hover:shadow-lg transition-all">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback 
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-foreground line-clamp-2 group-hover:text-green-500 transition-colors font-medium">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Bottom Ad */}
      <div className="bg-muted/30 py-8 border-t border-border/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <Advertisement size="large" />
        </div>
      </div>
    </div>
  );
  }