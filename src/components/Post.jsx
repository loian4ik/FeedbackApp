import {useParams} from 'react-router-dom'

function Post() {
    const params = useParams()
    
  const onClick = () =>{
    
  }
      
  return ( <div>
    <h1>Post {params.id}</h1>
    <h1>Name: {params.name}</h1>
    <button onClick={onClick}>Click</button>
    </div>
  )
}

export default Post