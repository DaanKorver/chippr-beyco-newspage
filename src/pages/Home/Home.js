// import {NavLink as Link} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar"
import Article from "../../components/Article/Article"
import articles from "../../articles.json"
import "./Home.css"
function Home() {
  const posts = articles.map((item)=>{
    const {id,title,paragraphs, author, upload} = item
    return <Article key={id} title={title} body={paragraphs[0]} author={author} upload={upload}/>
  })
  return (
    <main>
      <section className="banner">
        <div>
          <h1>Stay updated on our latest <span>news</span>.</h1>
          <p>Beyco supports you in connecting efficiently with existing and potential new coffee sellers and buyers, creating a track record online and making your coffee traceable from farmer to roaster. Connect today!</p>
      </div>
    </section>
    <div className="home-grid">
      <div className="articles">
        {posts}
      </div>
      <Sidebar/>
    </div>
  </main>
  )
}

export default Home