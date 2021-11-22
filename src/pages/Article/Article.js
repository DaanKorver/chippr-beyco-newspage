import { useParams } from "react-router-dom"
import {NavLink as Link} from 'react-router-dom'

function Article() {
  const params = useParams()
  return <div>
    <h1>Article {params.id}</h1>
    <Link to="/">Article link</Link>
  </div>
}

export default Article