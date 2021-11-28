import "@/styles/RecentArticle.css"
import formatDate from "@/helpers/dateFormatter"
import {useNavigate} from "react-router-dom"

function RecentArticle(props) {
  const {id, title, image, upload} = props
  const navigate = useNavigate()
  const date = formatDate(upload)
  return (
    <div onClick={() => navigate(`/article/${id}`)} className="recent-article">
      <img src={require(`@/assets/images/${image}`).default} alt="blockchain" />
      <section>
        <h3>{title}</h3>
        <time>{date}</time>
      </section>
    </div>
  );
}

export default RecentArticle