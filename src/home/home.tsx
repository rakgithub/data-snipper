import ArticleList from "../newsArticles/ArticleList";
import styles from './home.module.scss';
import { useArticleData } from "../hooks/useArticlesData";
import NewsTimeline from "../newsTimeline/NewsTimeline";

const Home = () => {

  // Hook to fetch articles data from the Csv file
  const { articles = [] } = useArticleData();

  return (
    <div className={styles.container}>
      <div>
        <ArticleList data={articles} />
      </div>
      <div>
        <NewsTimeline data={articles} />
      </div>  
    </div>
  )
};

export default Home;
