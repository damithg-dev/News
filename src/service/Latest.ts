import {dummyNews} from '../../assets/data/DummyNews';
import dayjs from 'dayjs';

const toArticle: Article[] = (data: object[]) => {
  return data.map(
    d =>
      ({
        ...d,
        articleUrl: d.url,
        imageUrl: d.urlToImage,
        publishDate: dayjs('2022-11-21T19:06:06Z'),
      } as Article),
  );
};

const getLatestNews = () => {
  return toArticle(dummyNews);
};

export const LatestArticleService = {
  getLatestNews,
};
