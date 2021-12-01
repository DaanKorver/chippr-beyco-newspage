import React from 'react'
import Sidebar from "@/components/Sidebar";
import Article from "@/components/Article";
import articles from "@/articles.json";
import { motion } from "framer-motion" 
import "@/styles/Home.css";

function search(e,setter) {
  const searchValue = e.target.value
  if(!searchValue) {
    setter(getAllArtilces)
    return
  }
  const posts = articles.map(article=>{
    if(article.title.toLowerCase().includes(searchValue.toLowerCase())) {
      const { id, title, image, description, upload } = article;
      return (
        <Article
          key={id}
          id={id}
          title={title}
          description={description}
          upload={upload}
          image={image}
        />
      )
    }
    return false
  })
  setter(posts)
}

function getAllArtilces() {
  return articles.map((article) => {
    const { id, title, image, description, upload } = article;
    return (
      <Article
        key={id}
        id={id}
        title={title}
        description={description}
        upload={upload}
        image={image}
      />
    );
  });
}

function Home() {
  const [posts, setPosts] = React.useState(getAllArtilces);

  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{opacity: 0}}>
    <main>
      <section className="banner">
        <div>
          <h1>
            Stay updated on our latest <span>news</span>.
          </h1>
          <p>
            Beyco supports you in connecting efficiently with existing and
            potential new coffee sellers and buyers, creating a track record
            online and making your coffee traceable from farmer to roaster.
            Connect today!
          </p>
        </div>
      </section>
      <div className="articles">
        <div className="home-grid">
          <div className="articles-container">
            {posts}
            
          </div>
          <Sidebar search={e=>search(e, setPosts)}/>
        </div>
      </div>
    </main>
    </motion.div>
  );
}

export default Home;
