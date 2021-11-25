import "./RecentArticle.css"
import logo from "./../../assets/blockchain.png"

function RecentArticle(props) {
  const {title, upload} = props
  return (
    <div class="recent-article">
      <img src={logo} alt="blockchain" />
      <section>
        <h3>{title}</h3>
        <time>{upload}</time>
      </section>
    </div>
  )
}

export default RecentArticle