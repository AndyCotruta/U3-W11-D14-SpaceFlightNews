import { ArticleType } from "../types";
import Article from "./Article";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  articleData: ArticleType;
}

const ArticleList = ({ articleData }: ArticleProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
      {" "}
      <Card className="article mb-4">
        <Card.Img
          className="article-img"
          variant="top"
          src={articleData.imageUrl}
        />
        <Card.Body>
          <Card.Title>{articleData.title}</Card.Title>
          <Card.Text>{articleData.summary}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`/mainArticle/${articleData.id}`)}
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleList;
