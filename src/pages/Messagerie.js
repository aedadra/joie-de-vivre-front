import { useEffect, useState } from 'react';

function Message() {


   
    const [message, setMessage] = useState([])
 
   
    
  
    useEffect(() => {
      fetch("")
  
      .then((response) => response.json())
      .then((data) => {
        setMessage(data)
      })
      .catch((error) => console.log(error))
    })
  
    return (
        {message}
    )
    
}            

export default Message