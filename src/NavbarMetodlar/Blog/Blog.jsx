import React from 'react'
import PageContainer from '../../PageContainer'
import style from './Blog.module.css'
import { Link } from 'react-router-dom'


const BlogCard = [

    {
        id:1,
        img:'man-wearing-red-crew-neck-shirt-1125028.png',
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More',
    },
    {
        id:1,
        img:'photo-of-people-using-laptops-3182833.png',
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More',
    },
    {
        id:1,
        img:'side-view-photo-of-smiling-woman-in-a-black-and-white-striped-top-sitting-on-a-bed-while-using-a-laptop-3765035.png',
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More',
    },
    {
        id:1,
        img:'top-view-photo-of-people-having-a-meeting-3182822.png',
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More',
    },
    {
        id:1,
        img:'top-view-photo-of-person-holding-earphones-3183198.png',
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More',
    },
    {
        id:1,
        img:`group-of-person-sitting-indoors-3184306.png`,
        item:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        text1:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        text2:'Read More'
    },
]

function Blog() {
  return (
    <>
    <PageContainer>
        <div className="Big-container">
            <div className={style['BlogPage-text-top']}>
                <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                <p>Andrew Jonson <b>Posted on 27th January 2021</b></p>
                <img src={'./img/people-working-in-front-of-computer-3182763.png'} />
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                <Link to={'/Single'}>Read more</Link>
            </div>

            <div className={style["BlogPage-card-top-text"]}>
                <h2 className={style["blogpage-h2"]} >Our Blog</h2>
                <div className={style["BlogPage-container"]}>
                    {
                        BlogCard.map(({item , img, text1,text2,title,})=>{
                            return(
                            <div className={style["BlogPage-Card"]}>
                                <img src={`./img/${img}`} />
                                <p>{item}</p>
                                <h2>{title}</h2>
                                <p>{text1}</p>
                                <div className={style["blogpage-icon"]}>
                                <Link to={'/Single'}>
                                <p>{text2}</p>
                                </Link>
                                <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </PageContainer>
    </>
  )
}

export default Blog