import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type State = {
  loading: boolean;
  articles: Article[];
};

export const LatestContext = createContext<State>({
  loading: true,
  articles: [],
});

export const useLatestArticleContext = () => useContext(LatestContext);

interface Props {
  children: any;
}

export const LatestArticleProvider = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // return () => {
    //   second;
    // };
  }, []);

  const values = useMemo(() => ({articles, loading}), [articles, loading]);

  return (
    <LatestContext.Provider value={values}>{children}</LatestContext.Provider>
  );
};

export const useLatestArticle = () => {
  const context = React.useContext(LatestContext);
  if (context === undefined) {
    throw new Error(
      'useLatestArticle must be used within an LatestArticleProvider',
    );
  }
  return context;
};
