import React from 'react'
import img1 from "../../assets/img/Icon.svg"
import img2 from "../../assets/img/Icon (1).svg"
import img3 from "../../assets/img/Icon (2).svg"
import img4 from "../../assets/img/Icon (3).svg"
import img5 from "../../assets/img/Icon (4).svg"
import img6 from "../../assets/img/Icon (5).svg"

function HomeCard() {

    const Card =[

        {
            id:1,
            item:'Uses Client First',
            imge:img1,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            id:2,
            item:'Two Free Revision Round',
            imge:img2,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. . '
        },
        {
            id:3,
            item:'Template Customization',
            imge:img3,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            id:4,
            item:'24/7 Support',
            imge:img4,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            id:5,
            item:'Quick Delivery',
            imge:img5,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            id:6,
            item:'Hands-on approach',
            imge:img6,
            text:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
    ]



  return (
    <>
   
   <div className="Card-container">
        {
            Card.map(({id , imge , text, item})=>{
                return(

                        <div className="card">
                            <img src={imge} />
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