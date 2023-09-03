import React from 'react'
import PageContainer from '../../PageContainer'
import Accardion from '../HomePage/Accardion'

function FAQ() {
  return (
    <PageContainer>
    <div className="Big-container">

          {/* ----Accardion---- */}
          <div className="accardion-container">
            <div className="accardion-left">
              <h2>Frequently asked questions</h2>
              <p>Contact us for more info</p>
            </div>
            <div className="accardion-right">
              <Accardion/>
            </div>
          </div>
    </div>
    </PageContainer>
  )
}

export default FAQ