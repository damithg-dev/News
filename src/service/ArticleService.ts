import {request} from '../helper/request';
import {ArticleCategoryType} from '../types/appEnums';

interface Response {
  articles: ArticleRow[];
  status: string;
  totalResults: number;
}

export const toArticle = (data: ArticleRow) => {
  const _article = {
    ...data,
    articleUrl: data.url,
    imageUrl: data.urlToImage,
    publishDate: data.publishedAt,
  } as Article;
  return _article;
};

const getLatestArticles = async () => {
  try {
    const result = await request<Response>('top-headlines?country=us');
    return result.articles.map(r => toArticle(r));
  } catch (e) {
    console.log('getLatestArticles', e);
  }
};

const getCategorizedArticles = async (category: ArticleCategoryType) => {
  try {
    const result = await request<Response>(
      `top-headlines?country=us&category=${category}`,
    );
    return result.articles.map(r => toArticle(r));
  } catch (e) {
    console.log('getCategorizedArticles', e);
  }
};

const getSearchArticles = async (searchString: string) => {
  if (searchString.length < 3) {
    return [];
  }
  try {
    const result = await request<Response>(`everything?q=${searchString}`);
    return result.articles.map(r => toArticle(r));
  } catch (e) {
    console.log('getSearchArticles', e);
  }
};

export const ArticleService = {
  getLatestArticles,
  getCategorizedArticles,
  getSearchArticles,
};
