
function AsideData() {
  const asidedata = [
    {
      id: 1,
      date: `19 Jan 2022`,
      item: `How one Webflow user grew his single person consultancy from $0-100K in 14 months`,
      text: `See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract`,
      img: `apple-monitors-326518.png`,
      text2: `Read More`,
    },
    {
      id: 2,
      date: `19 Jan 2022`,
      item: `How one Webflow user grew his single person consultancy from $0-100K in 14 months`,
      text: `See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract`,
      img: `arabic-businessman-standing-on-street-and-using-laptop-9623794.png`,
      text2: `Read More`,
    },
    {
      id: 3,
      date: `19 Jan 2022`,
      item: `How one Webflow user grew his single person consultancy from $0-100K in 14 months`,
      text: `See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract`,
      img: `woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png`,
      text2: `Read More`,
    },
  ];
  return(
    <>
    {
        asidedata.map(({item , img , text ,text2 , date})=>{
            return(

                <div className="aside-card">
            <img src={`../../src/assets/img/${img}`} />
            <p>{date}</p>
            <h2>{item}</h2>
            <p>{text}</p>
            <div className="section-row-icon">
              <p>{text2}</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )
        })
    }
    </>
  )




}

export default AsideData;
