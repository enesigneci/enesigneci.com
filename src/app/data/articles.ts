export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  author: string;
  tags: string[];
}

export const articles: Article[] = [];
