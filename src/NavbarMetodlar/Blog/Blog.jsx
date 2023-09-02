import React from 'react'
import PageContainer from '../../PageContainer'
import style from './Blog.module.css'

function Blog() {
  return (
    <>
    <PageContainer>
        <div className="Big-container">
            <div className={style['BlogPage-text-top']}>
                <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                <p>Andrew Jonson <b>Posted on 27th January 2021</b></p>
                <img src={'./img/people-working-in-front-of-computer-3182763.png'} />
            </div>
        </div>
    </PageContainer>
    </>
  )
}

export default Blog