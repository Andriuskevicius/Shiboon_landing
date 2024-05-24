import React from 'react'
import './subscribe.sass'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import LogoIcon from '../../images/LogoIcon'

const flowerBlue = <svg style={{ position: 'absolute', left: 20, bottom: 0 }} width="150" height="149" viewBox="0 0 150 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_44_603)">
<path d="M116.136 117.216C103.658 129.192 87.6666 110.218 81.2136 102.235C67.2645 127.177 51.4234 123.484 49.4957 122.905C28.2921 116.529 36.9644 100.119 43.6638 92.1115C22.6216 95.7198 17.6082 84.4464 17.1445 79.1028C15.7713 63.2799 41.1187 66.1751 50.7639 64.1456C32.3 44.0709 35.3174 27.0409 41.1932 23.0434C59.175 10.3 74.8819 36.659 82.6761 50.6322C112.159 37.7089 121.669 42.4437 127.517 51.3701C137.733 70.1931 117.899 77.1765 103.74 81.4309C116.951 90.4677 123.386 110.259 116.136 117.216Z" fill="#82F8FF" stroke="black" strokeWidth="3"/>
<path d="M81.2283 60.3481C89.0954 63.723 92.737 72.8364 89.3622 80.7035C85.9873 88.5705 76.8739 92.2122 69.0068 88.8373C61.1397 85.4624 57.4981 76.349 60.873 68.482C64.2478 60.6149 73.3612 56.9732 81.2283 60.3481Z" fill="#FF5DEF" stroke="black" strokeWidth="3"/>
</g>
<defs>
<clipPath id="clip0_44_603">
<rect width="114" height="113" fill="white" transform="translate(104.767 148.792) rotate(-156.781)"/>
</clipPath>
</defs>
</svg>

const flowerOrange = <svg style={{ position: 'absolute', right: 20, bottom: 90 }} width="160" height="161" viewBox="0 0 160 161" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_44_600)">
<path d="M26.7096 106.775C19.0295 91.2791 41.9271 81.7169 51.4782 77.9563C31.8701 57.1665 40.1457 43.1632 41.277 41.4982C53.7206 23.1842 66.7729 36.3805 72.4013 45.1737C75.2724 24.0182 87.5306 22.6181 92.7671 23.779C108.273 27.2163 97.9064 50.5274 96.9487 60.3371C121.638 48.7467 136.978 56.7345 139.029 63.539C145.79 84.5158 115.933 91.5907 100.265 94.8335C103.748 126.835 96.3775 134.487 86.1078 137.387C65.0869 141.485 64.3758 120.47 64.5656 105.687C51.9815 115.578 31.1717 115.778 26.7096 106.775Z" fill="#FF5D00" stroke="black" strokeWidth="3"/>
<path d="M91.4307 90.5371C85.851 97.0292 76.0649 97.7689 69.5727 92.1891C63.0806 86.6094 62.341 76.8233 67.9207 70.3312C73.5004 63.8391 83.2866 63.0994 89.7787 68.6791C96.2708 74.2589 97.0104 84.045 91.4307 90.5371Z" fill="#7ED1FF" stroke="black" strokeWidth="3"/>
</g>
<defs>
<clipPath id="clip0_44_600">
<rect width="114" height="113" fill="white" transform="translate(0 86.4561) rotate(-49.3222)"/>
</clipPath>
</defs>
</svg>

const Subscribe = () => {
  const intl = useIntl()
  return (
  <div className="subSection">
    <div className="subRow">
      <LogoIcon className="logoSvg" />
      <div className="subTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'subscription' })}</h1>
        <div className="subscribeWrapper">
          <input type="text" placeholder={intl.formatMessage({ id: 'enter-your-email' })} />
          <button>{intl.formatMessage({ id: 'subscribe' })}</button>
        </div>
      </div>
    </div>
    {flowerBlue}
    {flowerOrange}
  </div>
  )
}

export default Subscribe
