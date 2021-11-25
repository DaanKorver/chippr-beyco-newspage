import { useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import blockchain from "@/assets/images/blockchain.png";
import articles from "@/articles.json"
import "@/styles/FullArticle.css";
import formatDate from "@/helpers/dateFormatter";

function Article() {
  const params = useParams();
  const { id: articleId } = params
  const {title, upload, paragraphs} = articles[articleId - 1]
  const body = paragraphs.map((item, index)=>{
    return <p key={index}>{item}</p>
  })

  return (
    <main>
      <div className="articles">
        <div className="home-grid">
          <div className="single-article">
            <article className="full-article">
              <img src={blockchain} alt="blockchain" />
              <section className="full-article-text">
                <h1>{title}</h1>
                <time>{formatDate(upload)}</time>
                {body}
              </section>
            </article>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default Article;
