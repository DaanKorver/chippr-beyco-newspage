import { useParams } from "react-router-dom"

function Article() {
  const params = useParams()
  return <h1>Article {params.id}</h1>
}

export default Article