import React from 'react'
import { Link } from 'gatsby'
import './footer.sass'
import { useIntl } from 'gatsby-plugin-intl'

const xLogo = <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5619 11.7601L28.6588 0.960938H24.8245L16.8999 9.43834L10.8308 0.960938H0.343262L10.9589 15.79L0.343262 27.1457H4.17746L12.6223 18.1131L19.0882 27.1457H29.5758L18.5619 11.7601ZM5.74655 3.73732H9.40235L24.1713 24.3669H20.5154L5.74655 3.73732Z" fill="black"/>
</svg>

const zLogo = <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586182 39.0874V26.7065C2.23536 25.6368 3.8955 24.5602 5.75779 23.3519C4.35365 22.1496 3.07684 21.0563 2.04644 20.1743V4.58797C15.4854 5.22849 28.7418 4.29876 41.4137 0C45.0653 3.62718 48.6187 7.15702 52.2028 10.717V23.3811C51.3303 24.0851 50.2624 24.9472 49.0162 25.9529C50.5997 27.3313 51.9075 28.4696 52.9995 29.4197V44.8577C46.3818 48.6012 24.529 51.1911 11.6623 49.8883C7.75789 46.0808 4.1369 42.55 0.586182 39.0874ZM29.2164 39.2023C29.163 39.0332 29.1096 38.8635 29.0558 38.6944C35.7411 33.5604 42.1279 28.077 48.0524 22.2377V16.1402C37.6891 19.092 27.2387 19.9272 16.6732 19.74V26.3195C22.6288 26.6541 28.479 26.186 34.676 25.6081C28.2677 30.9158 21.7951 35.5117 15.2148 39.867V45.945C26.7153 46.4108 37.968 45.508 48.9359 42.2006V35.711C45.5837 36.4405 42.3884 37.24 39.1544 37.8105C35.8615 38.3917 32.5303 38.7472 29.216 39.2019L29.2164 39.2023Z" fill="#EFFF82"/>
</svg>

const tLogo = <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1846 1.90565L25.4804 25.9232C25.4804 25.9232 25.2784 27.0206 23.9172 27.0206C23.1939 27.0206 22.8209 26.6766 22.8209 26.6766L12.6316 18.2216L7.64637 15.7088L1.24835 14.0073C1.24835 14.0073 0.109375 13.6782 0.109375 12.7365C0.109375 11.9516 1.281 11.5773 1.281 11.5773L28.0485 0.943751C28.0485 0.943751 28.8659 0.64864 29.4626 0.649906C29.8292 0.649906 30.2472 0.806885 30.2472 1.27778C30.2472 1.59172 30.1846 1.90565 30.1846 1.90565Z" fill="black"/>
<path d="M16.434 21.3763L12.1319 25.6131C12.1319 25.6131 11.9448 25.7576 11.6949 25.7638C11.6083 25.7664 11.5154 25.7526 11.4199 25.7098L12.6306 18.2192L16.434 21.3763Z" fill="#444C0F"/>
<path d="M25.0951 5.91933C24.8829 5.64307 24.4911 5.59284 24.2148 5.80256L7.64404 15.7192C7.64404 15.7192 10.2886 23.118 10.6918 24.3989C11.0961 25.6811 11.4201 25.7099 11.4201 25.7099L12.6307 18.2193L24.9772 6.79835C25.2535 6.58865 25.3048 6.19559 25.0951 5.91933Z" fill="#94A138"/>
</svg>

const Footer = () => {
  const intl = useIntl()
  return (
  <footer>
    <div className="footerWrapper">
      <div className="footerRows">
        <div className='footerMail'>
          <span>{intl.formatMessage({ id: 'bark-to' })} </span>
          <a target="_blank" href="mailto:pumpit@shiboon.com" rel="noreferrer">pumpit@shiboon.com</a>
        </div>
      </div>
      <div className="footerRows mobile">
        <div className="footerCopyright">
          <p>{intl.formatMessage({ id: 'footer-text' })}</p>
        </div>
        <div className="menuSocial">
          <ul>
            <li className='footerRegular'><Link target='_blank' to="https://twitter.com/">{xLogo}</Link></li>
            <li className='footerRegular'><Link target='_blank' to="https://t.me/">{tLogo}</Link></li>
            <li><Link target='_blank' to="https://zealy.io/c/">{zLogo}</Link></li>
          </ul>
          <p>© 2024 Shiboon • {intl.formatMessage({ id: 'rights' })}</p>
        </div>
     </div>
    </div>
  </footer>
  )
}

export default Footer
