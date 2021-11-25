// import {NavLink as Link} from 'react-router-dom'
import Sidebar from "@/components/Sidebar"
import Article from "@/components/Article"
import articles from "@/articles.json"
import "@/styles/Home.css"
function Home() {
  const posts = articles.map(item=>{
    const {id,title,paragraphs, upload} = item
    return <Article key={id} id={id} title={title} body={paragraphs[0]} upload={upload}/>
  })
  
  return (
    <main>
      <section className="banner">
        <div>
          <h1>Stay updated on our latest <span>news</span>.</h1>
          <p>Beyco supports you in connecting efficiently with existing and potential new coffee sellers and buyers, creating a track record online and making your coffee traceable from farmer to roaster. Connect today!</p>
      </div>
    </section>
    <div className="articles">
    <div className="home-grid">
      <div className="articles-container">
        {posts}
      </div>
      <Sidebar/>
    </div>
    </div>
  </main>
  )
}

export default Home