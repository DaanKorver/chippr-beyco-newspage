import "./RecentArticle.css"
import logo from "./../../assets/blockchain.png"
import formatDate from "../../helpers/dateFormatter"
import {useNavigate} from "react-router-dom"

function RecentArticle(props) {
  const {id, title, upload} = props
  const navigate = useNavigate()
  const date = formatDate(upload)
  return (
    <div onClick={()=>navigate(`/article/${id}`)} className="recent-article">
      <img src={logo} alt="blockchain" />
      <section>
        <h3>{title}</h3>
        <time>{date}</time>
      </section>
    </div>
  )
}

export default RecentArticle