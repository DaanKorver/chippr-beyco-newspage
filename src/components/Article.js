import "@/styles/Article.css";
import articleImage from "@/assets/images/blockchain.png";
import Button from "@/components/Button";
import formatDate from "@/helpers/dateFormatter";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Article(props) {
  const { id, title, body, upload } = props;
  const date = formatDate(upload);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    initialInView: true,
  });
  const navigate = useNavigate();
  return (
    <article ref={ref} className={`single-article ${inView ? "animate" : ""}`}>
      <img src={articleImage} alt="blockchain" />
      <div className="body">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{body.split(" ").slice(0, 40).join(" ")}</p>
        <Button
          customClick={() => navigate(`/article/${id}`)}
          style={["full", "small"]}
        >
          Read more
        </Button>
      </div>
    </article>
  );
}

export default Article;
