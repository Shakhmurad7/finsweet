import React from 'react'
import data from './data'
function HomeCard() {
  return (
    <>
   
   <div className="Card-container">
        {
            data.map(({id , imge , text, item})=>{
                return(

                        <div className="card">
                            <img src={`/img/${imge}`} />
                            <h2>{item}</h2>
                            <p>{text}</p>
                        </div>

                    )
                })
            }
    </div>
    </>
  )
}

export default HomeCard