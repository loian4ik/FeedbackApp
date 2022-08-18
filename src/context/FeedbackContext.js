import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from 'react'

//we are going to use state hook
const FeedbackContext = createContext()
//we are going to wrapping everything all of our components
//like when we create a component that takes in children 
export const FeedbackProvider = ({children}) => {
//children passed

const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This is feedback item 1 ',
        rating:10,
    },
    {
        id: 2,
        text: 'This is feedback item 2 ',
        rating:9,
    },
    {
        id: 3,
        text: 'This is feedback item 3 ',
        rating:6,
    },
])
//function to change it set FeedbackEdit
const [feedbackEdit, setFeedbackEdit] = useState({
    //what we have object with item, 
    //set to boolean, when we click will be true,if is not clicked false
    item: {},
    edit: false
})

const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
   }
  
//delete feedback
const deleteFeedback =(id) => {
    if(window.confirm('Are you sure you want to delete?'))
    {
     setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
//update feedback item
const updateFeedback = (id, updItem) => {
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
}

// we need to take item, bcz which item we added
//set item to be updated when we click on button
  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit:true


     } )
  }


//we are going to pass single item here
    return (
    <FeedbackContext.Provider 
    value ={{
                 //pass down into my components need it
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}
    >
    {children}
    </FeedbackContext.Provider>
    )

}
export default FeedbackContext