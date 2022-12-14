import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {toArticle} from '../service/ArticleService';

import {ArticleRealmContext} from './index';
import {RArticle} from './Schema';
const {useRealm} = ArticleRealmContext;

type ContextState = {
  bookmarkArticle: Article[];
  loading: boolean;
  error: Error | null;
  addBookmark: (article: Article) => void;
  removeBookmark: (article: Article) => void;
};

const BMArticleContext = createContext<ContextState>({
  bookmarkArticle: [],
  loading: false,
  error: null,
  addBookmark: () => {},
  removeBookmark: () => {},
});

export const BookmarkArticleProvider = ({...rest}) => {
  const realm = useRealm();

  const [articles, setArticles] = useState<Article[]>([]);
  const [rowArticles, setRowArticles] = useState<ArticleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const _articles = realm.objects('article');
    setRowArticles(_articles as unknown as ArticleRow[]);
    setArticles(_articles.map(a => toArticle(a as unknown as ArticleRow)));
  }, [realm, reload]);

  const addBookmark = useCallback(
    (_article: Article) => {
      try {
        realm.write(() => {
          realm.create('article', new RArticle(_article));
        });
      } catch (e) {
        console.error(e);
      }
      setReload(!reload);
      return articles;
    },
    [reload, articles, realm],
  );

  const removeBookmark = useCallback(
    (_article: Article) => {
      try {
        const temp = rowArticles.find(ra => ra.title === _article.title);
        if (temp) {
          realm.write(() => realm.delete(temp));
          setReload(!reload);
        }
      } catch (e) {
        console.log(e);
      }
    },
    [realm, reload, rowArticles],
  );

  const value = useMemo(
    () => ({
      bookmarkArticle: articles,
      loading,
      error,
      addBookmark,
      removeBookmark,
    }),
    [articles, loading, error, addBookmark, removeBookmark],
  );

  return <BMArticleContext.Provider value={value} {...rest} />;
};

export const useBMArticle = () => {
  const context = React.useContext(BMArticleContext);
  if (context === undefined) {
    throw new Error('useBMArticle must be used within an BMArticleContext');
  }
  return context;
};
