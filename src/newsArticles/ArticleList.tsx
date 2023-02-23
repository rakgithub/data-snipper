    import { FC, memo, useMemo } from 'react';
    import placeHolderImage from '../images/Header.png';
    import styles from './articleList.module.scss';
    import { ArticlesValues } from '../types/articleTypes';

    const ArticleList: FC<ArticlesValues> = ({ data = [] }) => {

        const sortedArticles = useMemo(() => data.sort((a1, a2) => (a1.popularity < a2.popularity) ? 1 : (a1.popularity > a2.popularity) ? -1 : 0), [data]);
        const mostPopularArticle = sortedArticles[0]; 

        return data && data.length ? (
                <div data-testid="article-list-container" className={styles.container}>
                    <div className={styles.imageHeader}>
                        <img src={placeHolderImage} className={styles.imagePlaceholder} alt="Article placeholder" />
                        <h2 className={styles.imageText}>
                            {mostPopularArticle?.title}
                        </h2>
                        <ul>
                            {sortedArticles.slice(1)
                            .map(article => (
                            <li key={article.id}>
                                <p data-testid="article-title" className={styles.articles}>{article.title}</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>) : null;
    };

    export default memo(ArticleList);