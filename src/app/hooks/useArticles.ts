import { useState, useEffect } from 'react';
import { Article } from '../data/articles';

interface MediumItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@enesigneci');
        const data = await response.json();

        if (data.status === 'ok') {
          // Exclude the oldest two articles
          const itemsToDisplay = data.items.slice(0, -2);
          
          const transformedArticles: Article[] = itemsToDisplay.map((item: MediumItem) => {
            // Extract a better image if thumbnail is empty
            let image = item.thumbnail;
            if (!image) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              image = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQxNjEwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
            }

            // Clean up content (Medium RSS content is HTML, but the app uses ReactMarkdown)
            // We might need to handle HTML or convert it, but let's see.
            // For now, we'll keep it as is.
            
            // Generate a simple ID from the link or guid
            const id = item.guid.split('/').pop() || item.link.split('/').pop() || Math.random().toString(36).substr(2, 9);

            // Estimate read time
            const wordsPerMinute = 200;
            const textContent = item.content.replace(/<[^>]*>?/gm, '');
            const wordCount = textContent.split(/\s+/).length;
            const readTimeMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
            const readTime = `${readTimeMinutes} min read`;

            return {
              id,
              title: item.title,
              excerpt: item.description.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
              content: item.content, // This is HTML
              date: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              readTime,
              views: '1K+', // Placeholder
              image,
              author: item.author,
              tags: item.categories
            };
          });
          setArticles(transformedArticles);
        } else {
          setError('Failed to fetch articles');
        }
      } catch (err) {
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}
