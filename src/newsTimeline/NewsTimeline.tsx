import { FC, memo, useMemo } from 'react';
import styles from './newsTimeline.module.scss';
import { ArticlesValues } from '../types/articleTypes';
import ArticlesTimeline from './ArticlesTimeline';


const NewsTimeline: FC<ArticlesValues> = ({ data = [] }) => {

    const articlesList = useMemo(() => data.slice(0, 10), [data]);

    return(
        <div className={styles.container}>
            <div className={styles.timelineHeader}>
                <h1>Just in</h1>
            </div>
           <ArticlesTimeline data={ articlesList} />
            {data.length > 10 && (
                <div className={styles.moreArticles}>
                    <p>{`More Just in >`}</p>
                </div> 
            )}
        </div>
    )
};

export default memo(NewsTimeline);