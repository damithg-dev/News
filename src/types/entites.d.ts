interface Source {
  id: string;
  name: string;
}

interface Article {
  author: string;
  title: string;
  description: string;
  articleUrl: string;
  imageUrl: string;
  publishDate: Date;
  content: string;
}

interface ArticleRow {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
