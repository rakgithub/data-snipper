import { screen, render } from "@testing-library/react";
import ArticleList from "./ArticleList";

const data = [
    { id: '1', title: 'Article 1', popularity: '0.658', timestamp: '2023-02-16T07:39:55.793Z' },
    { id: '2', title: 'Article 2', popularity: '0.134', timestamp: '2023-02-16T07:39:55.793Z' },
    { id: '3', title: 'Article 3', popularity: '0.734', timestamp: '2023-02-16T07:39:55.793Z' },
    { id: '4', title: 'Article 4', popularity: '0.934', timestamp: '2023-02-16T07:39:55.793Z' }
]

describe('ArticleList', () => {
    it('should render popular articles', () => {
       render(<ArticleList data={data} />)
       const article = screen.getByText('Article 2');
       expect(article).toBeInTheDocument();
    });

    it('should render articles by popularity', () => {
        render(<ArticleList data={data} />);
        const articleTitles = screen.getAllByTestId('article-title');
        expect(articleTitles[0]).toHaveTextContent('Article 3');
        expect(articleTitles[1]).toHaveTextContent('Article 1');
      });

    it('should not render anything if there is no data', () => {
        render(<ArticleList data={[]} />)
        const container = screen.queryByTestId('article-list-container');
        expect(container).not.toBeInTheDocument();
    });
});

