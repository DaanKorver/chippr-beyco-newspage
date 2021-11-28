import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import articles from "@/articles.json"
import "@/styles/FullArticle.css";
import formatDate from "@/helpers/dateFormatter";

function Article() {
  const params = useParams();
  const { id: articleId } = params
  const {title, upload, image, paragraphs} = articles[articleId - 1]
  const body = Object.entries(paragraphs).map((element, index)=>{
    const title = element[0] === "x" ? "" : <h2 key={index}>{element[0]}</h2>
    const body = element[1].map((item, index)=>{
      return <p key={index}>{item}</p>
    })
    return (
      <div key={index}>
        {title}
        {body}
      </div>
    )
  })

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  return (
    <main>
      <div className="articles">
        <div className="home-grid">
          <div className="single-article">
            <article className="full-article">
              <img src={require(`@/assets/images/${image}`).default} alt="blockchain" />
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
