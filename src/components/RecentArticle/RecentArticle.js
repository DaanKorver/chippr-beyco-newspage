import "./RecentArticle.css"
import logo from "./../../assets/blockchain.png"
import formatDate from "../../helpers/dateFormatter"

function RecentArticle(props) {
  const {title, upload} = props
  const date = formatDate(upload)
  return (
    <div className="recent-article">
      <img src={logo} alt="blockchain" />
      <section>
        <h3>{title}</h3>
        <time>{date}</time>
      </section>
    </div>
  )
}

export default RecentArticle