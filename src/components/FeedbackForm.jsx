import {useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState(true) //we add some state in this component
const [message, setMessage] = useState('')//empty string

const {addFeedback, feedbackEdit, updateFeedback} = 
useContext(FeedbackContext)
//run when i click on it 
useEffect(() => {
  //if is true set btn disabled
  if(feedbackEdit.edit === true) {
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }

},[feedbackEdit])

const handleTextChange = (e) =>{
  //validation to run if text equal nothing we call  setBtnDisabled
  //and if text not equal to nothing and we check then text less then 10 characters
  //and we want button enable
  if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
  } else if( text !=='' && text.trim().length <= 10){
    setMessage('Text must be at least 10 characters')
    setBtnDisabled(true)
  }else {
    setMessage(null)
    setBtnDisabled(false)
  }

  setText(e.target.value)
    //console.log(e.target.value)
  }

    const handleSubmit = (e) => {
       e.preventDefault()
       //button submit
       if(text.trim().length > 10) {
        const newFeedback ={
          text,
          rating,
        }
//update conditions
if(feedbackEdit.edit === true) {
   updateFeedback(feedbackEdit.item.id, newFeedback)
} else{
//console.log(newFeedback)
addFeedback(newFeedback)
}
        setText('')
       }
    }


  return  (
  <Card>
  <form onSubmit={handleSubmit}>
  <h2>How do you rate your service with us?</h2>
  <RatingSelect select ={(rating) => setRating(rating)} />
  <div className='input-group'>
  <input onChange={handleTextChange}type='text' 
  placeholder='Write a review' 
  value={text}
  />

  <Button type ='submit' isDisabled={btnDisabled}> 
  Send 
  </Button>
  </div>

  {message && <div className='message'>{message}</div>}
  </form>
  
  </Card>
  //secondary color bcz was passed like a version in Button
  //we  dont pass version secondary and see button black, 
  //3 doing validation isDisabled

  )
}

export default FeedbackForm
