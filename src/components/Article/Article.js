import "./Article.css" 
import logo from "./../../assets/blockchain.png"
import Button from "./../Button/Button"
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';


function Article(props) {
  const {id,title,body, author, upload} = props
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    initialInView: true,
  });
  const navigate = useNavigate()
  return (
    <article ref={ref} className={inView ? 'animate' : ''}>
      <img src={logo} alt="" />
      <div className="article-body">
        <p>5 oct. 2021 - Uploaded by Beyco </p>
        <h2>{title}</h2>
        <p>{body.split(' ').slice(0,40).join(' ')}</p>
        <p>Id: {id}</p>
        <Button customClick={()=>navigate(`/article/${id}`)} style={['full', 'small']}>Read more</Button>
      </div>
    </article>
  )
}

export default Article;