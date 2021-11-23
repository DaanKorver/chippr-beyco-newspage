import "./Article.css" 
import logo from "./../../assets/blockchain.png"
import Button from "./../Button/Button"

function Article(props) {
  const {id,title,body, author, upload} = props
  return (
    <article>
      <img src={logo} alt="" />
      <div className="article-body">
        <p>5 oct. 2021 - Uploaded by Beyco</p>
        <h2>{title}</h2>
        <p>{paragraphs}</p>
        <Button style={['full', 'small']}>Read more</Button>
      </div>
    </article>
  )
}

export default Article;