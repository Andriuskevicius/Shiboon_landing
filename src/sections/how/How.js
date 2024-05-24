import React from 'react'
import './how.sass'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl } from 'gatsby-plugin-intl'

const How = () => {
  const intl = useIntl()
  return (
  <div className="howSection">
    <div className="howRow">
        <StaticImage
          src="../../images/ShiIcon.png"
          height={400}
          style={{ top: -330, left: 30 }}
          className="howShiboon"
          placeholder="memeraidsFish"
          layout="fixed"
          alt="Shiboon"
        />
          <StaticImage
          src="../../images/BoonIcon.png"
          height={400}
          style={{ top: -240, right: 0 }}
          className="howShiboon"
          placeholder="memeraidsFish"
          layout="fixed"
          alt="Shiboon"
        />
      <div className="howTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'how-to-buy' })}</h1>
        <div className="howText">
            <div>
              <div className='numberWrapper'>
                <span className="howNumber">1</span>
                <StaticImage
                  src="../../images/how1.png"
                  height={115}
                  className="howIcon"
                  placeholder="memeraidsFish"
                  layout="fixed"
                  alt="Shiboon"
                />
              </div>
              <span className="howTitle">{intl.formatMessage({ id: 'how-title1' })}</span>
              <p>{intl.formatMessage({ id: 'how-to-buy1' })}</p>
            </div>
            <div>
            <div className='numberWrapper'>
                <span className="howNumber">2</span>
                <StaticImage
                  src="../../images/how2.png"
                  height={115}
                  className="howIcon"
                  placeholder="memeraidsFish"
                  layout="fixed"
                  alt="Shiboon"
                />
              </div>
              <span className="howTitle">{intl.formatMessage({ id: 'how-title2' })}</span>
              <p>{intl.formatMessage({ id: 'how-to-buy2' })}</p>
            </div>
            <div>
            <div className='numberWrapper'>
                <span className="howNumber">3</span>
                <StaticImage
                  src="../../images/how3.png"
                  height={115}
                  className="howIcon"
                  placeholder="memeraidsFish"
                  layout="fixed"
                  alt="Shiboon"
                />
              </div>
              <span className="howTitle">{intl.formatMessage({ id: 'how-title3' })}</span>
              <p>{intl.formatMessage({ id: 'how-to-buy3' })}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default How
