import React from 'react'
import { useParams } from 'react-router'
import PageContainer from '../../PageContainer';
import style from "./Work.module.css";



const Worldata = [
    {
      id: 1,
      img: "Cover.png",
      category: "Webflow Design",
      item: "Template 1",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
    {
      id: 2,
      img: "Cover (1).png",
      category: "Webflow Design",
      item: "Template 2",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
    {
      id: 3,
      category: "Webflow Design",
      img: "Cover (2).png",
      category: "UI Design",
      item: "Template 3",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
    {
      id: 4,
      img: "Cover (3).png",
      category: "Webflow Design",
      item: "Template 4",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
    {
      id: 5,
      img: "Cover (4).png",
      category: "Webflow Design",
      item: "Template 5",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
    {
      id: 6,
      img: "Cover (5).png",
      category: "Figma Designi",
      item: "Template 6",
      text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      title: "View Portfolio",
    },
  ];

function WorkSingle() {
    const {id} = useParams({})
    console.log(Worldata[id-1]);
  return (
    <>
    <PageContainer>

    <div className="Big-container">

        <div className={style[`container-block-id`]}>
            <h3>Web design and development</h3>
            <h2>Finsweet Design case studies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <img src={`../img/${Worldata[id -1].img}`} />
            <div className={style['container-bottom-block']}>
                <div className={style["container-row-block"]}>
                    <p>Client</p>
                    <h3>facebook.com</h3>
                </div>
                <div className={style["container-row-block"]}>
                    <p>Service</p>
                    <h3>Product Design</h3>
                </div>
                <div className={style["container-row-block"]}>
                    <p>Deliverable</p>
                    <h3>UI Screens, UX Flow & Prototype</h3>
                </div>
            </div>

            <div className={style['Container-Work']}>
              
                <div className={style['block']}>
                    <h2>About the project.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={'../img/Cover (6).png'} />
                </div>
                <div className={style['block']}>
                <h2>How we do it.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </PageContainer>
    </>
  )
}

export default WorkSingle