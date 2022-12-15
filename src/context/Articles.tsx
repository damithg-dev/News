import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ArticleService} from '../service/ArticleService';
import {ArticleCategoryType} from '../types/appEnums';
import {useGeneral} from './General';

type State = {
  loading: boolean;
  articles: Article[];
};

export const ArticleContext = createContext<State>({
  loading: true,
  articles: [],
});

interface Props {
  children: any;
}

export const ArticlesProvider = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const values = useMemo(() => ({articles, loading}), [articles, loading]);

  return (
    <ArticleContext.Provider value={values}>{children}</ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticle must be used within an ArticlesProvider');
  }
  return context;
};

export const useArticlesByCategory = (category: ArticleCategoryType) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const {countryCode} = useGeneral();

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getCategorizedArticles(category, countryCode).then(
        _article => {
          setArticles(_article ?? []);
          setLoading(false);
        },
      );
    })();
  }, [category, countryCode]);

  return {
    loading,
    articles,
  };
};

export const useLatestArticles = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const {countryCode} = useGeneral();

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getLatestArticles(countryCode).then(_article => {
        setArticles(_article ?? []);
        setLoading(false);
      });
    })();
  }, [countryCode]);

  return {
    loading,
    articles,
  };
};

export const useArticlesBySearch = (
  search: string,
  sortBy: 'relevancy' | 'popularity' | 'publishedAt',
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getSearchArticles(search, sortBy).then(_article => {
        setArticles(_article ?? []);
        setLoading(false);
      });
    })();
  }, [search, sortBy]);

  return {
    loading,
    articles,
  };
};
