interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  articleUrl: string;
  imageUrl: string;
  publishDate: Date;
  content: string;
}
