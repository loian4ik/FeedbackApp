import {FaQuestion } from 'react-icons/fa'
import {Link} from 'react-router-dom'
// we dont want to refresh page we use link

function AboutIconLink() {
  return ( //position in css ,instead of <a href ='/about'> we use <Link to ='/about'>
  
    <div className='about-link'>
      <Link to = {{
       pathname: '/about',
       //search: '?sort-name',
       //hash: '#hello',
    }}
    >
    <FaQuestion size={30} />
    </Link>
    </div>
  )
}

export default AboutIconLink