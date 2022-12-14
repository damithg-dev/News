import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ArticleService} from '../service/ArticleService';
import {ArticleCategoryType} from '../types/appEnums';

type State = {
  loading: boolean;
  articles: Article[];
  getArticlesByCategory: (category: ArticleCategoryType) => Promise<Article[]>;
};

export const ArticleContext = createContext<State>({
  loading: true,
  articles: [],
  getArticlesByCategory: async () => [],
});

interface Props {
  children: any;
}

export const ArticlesProvider = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticlesByCategory = useCallback(
    async (category: ArticleCategoryType) => {
      const _article = await ArticleService.getCategorizedArticles(category);
      return _article ?? [];
    },
    [],
  );

  const values = useMemo(
    () => ({articles, loading, getArticlesByCategory}),
    [articles, loading, getArticlesByCategory],
  );

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

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getCategorizedArticles(category).then(_article => {
        setArticles(_article ?? []);
        setLoading(false);
      });
    })();
  }, [category]);

  return {
    loading,
    articles,
  };
};

export const useLatestArticles = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getLatestArticles().then(_article => {
        setArticles(_article ?? []);
        setLoading(false);
      });
    })();
  }, []);

  return {
    loading,
    articles,
  };
};

export const useArticlesBySearch = (search: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      ArticleService.getSearchArticles(search).then(_article => {
        setArticles(_article ?? []);
        setLoading(false);
      });
    })();
  }, [search]);

  return {
    loading,
    articles,
  };
};
