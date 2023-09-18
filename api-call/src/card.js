
import { useState, useEffect } from "react";
 


export const Card = (props) =>{
    const{obj,idx} =props

    const[comment, setComment] = useState([]);
    // const[notes, setNotes] = useState([]);
    // const [display, setDisplay] = useState([]);



    const addNote = (e) =>{
      e.preventDefault()
      
      setComment([e.target.com.value,...comment]);    
    }

   
    
    

    return(
        <div className="card">
                <h3>{obj.food.label}</h3>
                <img src={obj.food.image}/>
                <form onSubmit={addNote}>
                <div className="countOuter">
                <div className="count">{comment.length}</div></div>
                  <input name="com"/>
                  <button type = "submit">comment</button>
                  
                  
                </form>

                <div>
                    {
                      comment.map((obj)=>{
                        return(
                          <div>
                            {obj}
                          </div>
                        )})
                    }
                  </div>
              </div>
    )
};



