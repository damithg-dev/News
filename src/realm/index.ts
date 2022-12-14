import {createRealmContext} from '@realm/react';
import {RArticle} from './Schema';

export const ArticleRealmContext = createRealmContext({
  schema: [RArticle.schema],
});
