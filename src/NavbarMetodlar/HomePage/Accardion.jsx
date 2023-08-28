import React, { useState } from "react";

function Accardion() {
    const [open , setopen] = useState(null)

    const taggle =(i)=>{
        if(open ===  i){
            return setopen(null)
        }
        setopen(i)

    }
  const AccardionData = [
    {
      id: 1,
      item: `01`,
      title: `How much time does it take?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 2,
      item: `02`,
      title: `What is your class naming convention?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 3,
      item: `03`,
      title: `How do you communicate?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 4,
      item: `04`,
      title: `I have a bigger project. Can you handle it?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 5,
      item: `05`,
      title: `What is your class naming convention?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <div className="accardion-right-text">
      {AccardionData.map(({ id, item, title, text},i) => {
        return (
          <>
            <div className="accardion-right-row" onClick={()=>taggle(i)}>

              <div className="accardion-right-big-row">

                <div className="accardion-big-row">

                  <h3>{item}</h3>

                  <div className={open ===i? `accardion-right-row-text-active` : `accardion-right-row-text`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </div>

                </div>

                <span>{open == i? `-` : `+`}</span>

              </div>

            </div>
          </>
        );
      })}
    </div>
  );
}

export default Accardion;
