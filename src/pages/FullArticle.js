import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import articles from "@/articles.json";
import "@/styles/FullArticle.css";
import formatDate from "@/helpers/dateFormatter";
import { motion } from "framer-motion";

function Article() {
  const params = useParams();
  const { id: articleId } = params;
  const { title, upload, image, paragraphs, readtime } = articles[articleId - 1];
  const body = Object.entries(paragraphs).map((element, index) => {
    const title = element[0] === "x" ? "" : <h2 key={index}>{element[0]}</h2>;
    const body = element[1].map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    return (
      <div key={index}>
        {title}
        {body}
      </div>
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{opacity: 0}}>
      <main>
        <div className="articles">
          <div className="home-grid full-article">
            <div className="single-article">
              <article className="full-article">
                <img
                  src={require(`@/assets/images/${image}`).default}
                  alt="blockchain"
                />
                <section className="full-article-text">
                  <h1>{title}</h1>
                  <div className="tags">
                    <time>{formatDate(upload)}</time>
                    <time>{readtime} read</time>
                  </div>
                  {body}
                </section>
              </article>
            </div>
            <Sidebar />
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default Article;
