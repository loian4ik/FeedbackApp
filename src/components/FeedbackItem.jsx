import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

  const{deleteFeedback, editFeedback} = useContext
  (FeedbackContext)


  //onCLick common event
    return (
    <Card>
    <div className='num-display'>{item.rating}</div>
    <button onClick={() => deleteFeedback(item.id)} className='close'>
    
    <FaTimes color = 'orange'/>
    </button>
    
    <button onClick={() => editFeedback(item)} 
    className='edit'>
     <FaEdit color = 'orange'/> 
    </button>

    <div className='text-display'>{item.text}</div>
    </Card>
    //that is children of the card
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
