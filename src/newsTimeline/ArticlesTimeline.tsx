import { FC, Fragment, memo } from 'react';
import styles from './newsTimeline.module.scss';
import { ArticlesValues } from '../types/articleTypes';
import { getArticleTime } from '../utils/utils';


const ArticleTimeline: FC<ArticlesValues> = ({data}) => {

  return (
    <div className={styles.timeline}>
      {data.map((article, index) => (
        <Fragment key={index}>
          <div className={styles.entry}>
            <div className={styles.title}>
              <p>{getArticleTime(article.timestamp)}</p>
            </div>
            <div className={styles.body}>
              <p>{article.title}</p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default memo(ArticleTimeline);
