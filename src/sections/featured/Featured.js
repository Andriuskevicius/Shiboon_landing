import React from 'react'
import './featured.sass'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl } from 'gatsby-plugin-intl'

const Featured = () => {
  const intl = useIntl()
  return (
  <div className="featuredSection">
    <div className="featuredRow">
      <div className="featuredTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'featured-in' })}</h1>
      </div>
      <div className='featuredImages'>
        <StaticImage
              src="../../images/cointelegraph-2.png"
              height={37}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
                  <StaticImage
              src="../../images/coindesk.png"
              height={32}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
                  <StaticImage
              src="../../images/technopedia.png"
              height={33}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
                  <StaticImage
              src="../../images/coingecko.png"
              height={45}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
                  <StaticImage
              src="../../images/crypto-news.png"
              height={34}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
                  <StaticImage
              src="../../images/newsbtc.png"
              height={50}
              className="featuredBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />
          </div>
    </div>
  </div>
  )
}

export default Featured
