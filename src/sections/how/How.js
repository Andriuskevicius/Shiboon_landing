import React from 'react'
import './how.sass'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl } from 'gatsby-plugin-intl'

const flower = <svg className='spinningFlower' width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_30_495)">
<path d="M136.283 70.9896C137.872 88.2112 113.067 88.8927 102.803 88.9644C113.616 115.418 100.856 125.505 99.2009 126.651C81.0004 139.26 73.5714 122.251 71.4844 112.021C61.1926 130.726 49.2518 127.621 44.7838 124.654C31.5536 115.867 49.6146 97.848 54.0383 89.0401C26.8319 90.9692 15.3939 77.9962 15.9296 70.9097C17.1699 48.9051 47.5728 53.0486 63.358 55.6613C71.6251 24.5502 81.2549 20.0634 91.8802 21.0532C112.968 24.7942 106.069 44.6572 100.571 58.3823C115.872 53.6823 135.36 60.9836 136.283 70.9896Z" fill="#82D2FF" stroke="black" strokeWidth="3"/>
<path d="M70.0542 62.8488C77.5964 58.7995 86.9931 61.6311 91.0423 69.1732C95.0916 76.7154 92.26 86.1121 84.7178 90.1613C77.1757 94.2106 67.779 91.379 63.7297 83.8369C59.6805 76.2947 62.512 66.898 70.0542 62.8488Z" fill="#EFFFAE" stroke="black" strokeWidth="3"/>
</g>
<defs>
<clipPath id="clip0_30_495">
<rect width="114" height="113" fill="white" transform="translate(153.891 99.5588) rotate(151.769)"/>
</clipPath>
</defs>
</svg>

const How = () => {
  const intl = useIntl()
  return (
  <div className="howSection">
    <div className="howRow">
        <StaticImage
          src="../../images/ShiIcon.png"
          height={400}
          style={{ top: -270, left: 30 }}
          className="howShiboon first"
          placeholder="memeraidsFish"
          layout="fixed"
          alt="Shiboon"
        />
        {flower}
          <StaticImage
          src="../../images/BoonIcon.png"
          height={400}
          style={{ top: -240, right: 0 }}
          className="howShiboon second"
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
