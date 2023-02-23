import { useEffect, useState } from 'react';
import Papa from "papaparse"
import { ArticlesData } from "../types/articleTypes";

const CSV_PATH = '/newsSource.csv';

export const useArticleData = () => {

  const [articles, setArticles ] = useState<ArticlesData []>([]);

  const fetchArticles = () => {
    (async () => {
      try {
        const response = await fetch(CSV_PATH);
        const csvData =  await response.text();
        const { data } = await Papa.parse<ArticlesData>(csvData, {
          header: true,
          skipEmptyLines: true,
          delimiter: ';',
        });
        setArticles(data);
      } catch (err) {
        console.log('An error occurred while parsing the data.');
      }
    })();
  }
 
  useEffect(() => fetchArticles(),[]);

  return { articles }
};