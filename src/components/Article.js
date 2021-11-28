import "@/styles/Article.css";
import Button from "@/components/Button";
import formatDate from "@/helpers/dateFormatter";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Article(props) {
  const { id, title, image, description, upload } = props;
  const date = formatDate(upload);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    initialInView: true,
  });
  const navigate = useNavigate();
  return (
    <article ref={ref} className={`single-article ${inView ? "animate" : ""}`}>
      <img src={require(`@/assets/images/${image}`).default} alt="blockchain" />
      <div className="body">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>
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
