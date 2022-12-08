import ArticleList from "./ArticleList";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";
import { ArticleType } from "../types";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const [articlesList, setArticleList] = useState<ArticleType[]>([]);

  const endPoint: string = "https://api.spaceflightnewsapi.net/v3/articles";

  useEffect(() => {
    fetchArticleList();
  }, []);

  const fetchArticleList = async () => {
    let response = await fetch(endPoint);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticleList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <Welcome />
      <Row className="justify-content-center px-4 py-4">
        {articlesList.map((article) => (
          <ArticleList articleData={article} key={article.id} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
