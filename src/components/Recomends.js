import React from 'react'
import './css/recomends.css'

const Recomends = ({info}) => {

    return (
    <div className="recomends">
         <div className= "recomendsT">
             {
                 info.map((i) =>
                 <div key={i.id}>
                     <div><img src={i.images[0].url} alt="" /></div>
                    <div>{i.name}</div>
                 </div>    
               )
             }
        </div>   


    </div>
  )
}

export default Recomends