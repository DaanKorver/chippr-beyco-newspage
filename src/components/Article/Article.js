import "./Article.css" 
import logo from "./../../assets/blockchain.png"
import Button from "./../Button/Button"

function Article(props) {
  console.log(props);
  return (
    <article>
      <img src={logo} alt="" />
      <div className="article-body">
        <p>5 oct. 2021 - Uploaded by Beyco</p>
        <h2>The different forms of blockchain</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
        <Button style={['full', 'small']}>Read more</Button>
      </div>
    </article>
  )
}

export default Article;