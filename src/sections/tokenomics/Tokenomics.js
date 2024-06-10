import React from 'react'
import './tokenomics.sass'
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'

const flowerIcon = <svg className='spinningFlower22' width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_30_498)">
<path d="M116.423 117.562C103.946 129.538 87.954 110.564 81.5011 102.581C67.552 127.523 51.7109 123.83 49.7832 123.25C28.5795 116.875 37.2518 100.465 43.9513 92.4572C22.909 96.0655 17.8957 84.7921 17.4319 79.4485C16.0588 63.6256 41.4062 66.5208 51.0514 64.4913C32.5875 44.4166 35.6048 27.3866 41.4807 23.3891C59.4625 10.6457 75.1694 37.0047 82.9635 50.9779C112.446 38.0546 121.957 42.7894 127.804 51.7158C138.02 70.5388 118.187 77.5222 104.027 81.7766C117.238 90.8134 123.673 110.604 116.423 117.562Z" fill="#EE82FF" stroke="black" strokeWidth="3"/>
<path d="M81.5158 60.6941C89.3829 64.0689 93.0245 73.1823 89.6496 81.0494C86.2748 88.9165 77.1614 92.5581 69.2943 89.1833C61.4272 85.8084 57.7856 76.695 61.1604 68.8279C64.5353 60.9608 73.6487 57.3192 81.5158 60.6941Z" fill="#FF975D" stroke="black" strokeWidth="3"/>
</g>
<defs>
<clipPath id="clip0_30_498">
<rect width="114" height="113" fill="white" transform="translate(105.054 149.137) rotate(-156.781)"/>
</clipPath>
</defs>
</svg>

const Tokenomics = () => {
  const intl = useIntl()
  return (
    <div id="exchange" className="exchangeSection">
      <h1>Token-o-mics</h1>
      <h1 className='hMobile'>Token<br/>-o-<br/>mics</h1>
      <div className="exchangeRow">
        {flowerIcon}
        <StaticImage
            src="../../images/tokenomics.png"
            height={640}
            className="tokenomicsImage spinningFlower11"
            placeholder="blurred"
            layout="constrained"
            alt="Shiboon"
          />
        <div className="exchangeTextContainer">
          <h2>{intl.formatMessage({ id: 'tokenomics1' })}</h2>
          <p className='violetText2'>1.000.000.000 $SHBN</p>
          <h2>{intl.formatMessage({ id: 'tokenomics2' })}</h2>
          <h2>{intl.formatMessage({ id: 'tokenomics3' })}</h2>
          <h2>{intl.formatMessage({ id: 'tokenomics4' })}</h2>
          <h2>{intl.formatMessage({ id: 'tokenomics5' })}</h2>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
