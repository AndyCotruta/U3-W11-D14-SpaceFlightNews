import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArticleType } from "../types";

const MainArticle = () => {
  const params = useParams<{ id: string }>();
  console.log(params, "was read from url");

  const articleId = params.id;

  const endPoint: string = "https://api.spaceflightnewsapi.net/v3/articles/";

  const [mainArticle, setMainArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    fetchArticleData();
  }, []);

  const fetchArticleData = async () => {
    let response = await fetch(endPoint + articleId);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMainArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="mainArticle text-center">
      <h1>{mainArticle?.title}</h1>
      <div>
        <img className="mainImg" src={mainArticle?.imageUrl} alt="" />
      </div>
      <p className="summary">{mainArticle?.summary}</p>
    </Container>
  );
};

export default MainArticle;
