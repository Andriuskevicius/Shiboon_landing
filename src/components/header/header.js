import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './header.sass'
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
import LanguageMenu from './lang'
import LogoIcon from '../../images/LogoIcon'

const menu = [
  // {
  //   title: 'Lightpapper',
  //   link: '/'
  // },
  {
    title: 'Social Meme Raid',
    link: '/#social-meme-raid'
  }
]

const menu2 = [
  // {
  //   title: 'Lightpaper',
  //   link: '/'
  // },
  {
    title: 'Social Meme Raid',
    link: '/#social-meme-raid'
  }
]

const xLogo = <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35656 5.11105L14.0782 0.0610046H12.2852L8.57938 4.02533L5.74122 0.0610046H0.836914L5.80114 6.99559L0.836914 12.3059H2.62991L6.57902 8.08192L9.60269 12.3059H14.507L9.35656 5.11105ZM3.36368 1.35933H5.07325L11.9797 11.0064H10.2701L3.36368 1.35933Z" fill="#EFFF82"/>
</svg>

const zLogo = <svg width="31" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.339966 18.2786V12.4889C1.11118 11.9886 1.88751 11.4852 2.75838 10.9201C2.10176 10.3579 1.50468 9.84662 1.02283 9.43417V2.14549C7.30735 2.44502 13.5065 2.01024 19.4323 0C21.1399 1.69619 22.8016 3.34687 24.4776 5.01163V10.9338C24.0696 11.263 23.5703 11.6661 22.9875 12.1365C23.728 12.781 24.3396 13.3133 24.8502 13.7577V20.977C21.7555 22.7276 11.5364 23.9387 5.51951 23.3294C3.6937 21.5489 2.0004 19.8978 0.339966 18.2786ZM13.7284 18.3323C13.7035 18.2532 13.6785 18.1739 13.6533 18.0948C16.7796 15.694 19.7663 13.1298 22.5368 10.3991V7.54768C17.6906 8.92808 12.8036 9.31864 7.86282 9.23108V12.3079C10.6478 12.4644 13.3836 12.2455 16.2815 11.9752C13.2848 14.4573 10.258 16.6065 7.1808 18.6431V21.4854C12.5588 21.7033 17.8209 21.2811 22.9499 19.7344V16.6997C21.3823 17.0408 19.8881 17.4147 18.3758 17.6815C16.8359 17.9533 15.2781 18.1195 13.7282 18.3321L13.7284 18.3323Z" fill="black"/>
</svg>

const tLogo = <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1231 0.97041L11.9233 12.2018C11.9233 12.2018 11.8288 12.715 11.1923 12.715C10.854 12.715 10.6796 12.5542 10.6796 12.5542L5.91478 8.60031L3.58351 7.42524L0.591582 6.62957C0.591582 6.62957 0.05896 6.47566 0.05896 6.03529C0.05896 5.66825 0.60685 5.4932 0.60685 5.4932L13.1242 0.520592C13.1242 0.520592 13.5065 0.382588 13.7855 0.383181C13.957 0.383181 14.1524 0.456589 14.1524 0.676795C14.1524 0.823603 14.1231 0.97041 14.1231 0.97041Z" fill="#EFFF82"/>
<path d="M7.69292 10.0755L5.6811 12.0568C5.6811 12.0568 5.59361 12.1244 5.47674 12.1273C5.43623 12.1285 5.39277 12.1221 5.34814 12.102L5.91428 8.59918L7.69292 10.0755Z" fill="transpare"/>
<path d="M11.7431 2.84733C11.6439 2.71814 11.4606 2.69465 11.3314 2.79273L3.5824 7.43007C3.5824 7.43007 4.8191 10.89 5.00761 11.489C5.1967 12.0886 5.3482 12.1021 5.3482 12.1021L5.91433 8.59922L11.688 3.25839C11.8172 3.16033 11.8412 2.97652 11.7431 2.84733Z" fill="#94A138"/>
</svg>

const iLogo = <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.4821 23.7917C20.7853 23.7917 24.2738 20.3032 24.2738 16C24.2738 11.6968 20.7853 8.20834 16.4821 8.20834C12.1789 8.20834 8.69043 11.6968 8.69043 16C8.69043 20.3032 12.1789 23.7917 16.4821 23.7917ZM16.4821 21.1945C19.3509 21.1945 21.6766 18.8688 21.6766 16C21.6766 13.1312 19.3509 10.8056 16.4821 10.8056C13.6133 10.8056 11.2877 13.1312 11.2877 16C11.2877 18.8688 13.6133 21.1945 16.4821 21.1945Z" fill="#0F0F0F"/>
<path d="M24.2752 6.90996C23.558 6.90996 22.9766 7.49137 22.9766 8.20857C22.9766 8.92577 23.558 9.50718 24.2752 9.50718C24.9924 9.50718 25.5738 8.92577 25.5738 8.20857C25.5738 7.49137 24.9924 6.90996 24.2752 6.90996Z" fill="#0F0F0F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3.04651 5.96937C2.19727 7.6361 2.19727 9.81798 2.19727 14.1817V17.8178C2.19727 22.1816 2.19727 24.3635 3.04651 26.0301C3.79352 27.4963 4.98549 28.6883 6.4516 29.4352C8.11833 30.2845 10.3002 30.2845 14.6639 30.2845H18.3001C22.6638 30.2845 24.8457 30.2845 26.5124 29.4352C27.9785 28.6883 29.1705 27.4963 29.9174 26.0301C30.7667 24.3635 30.7667 22.1816 30.7667 17.8178V14.1817C30.7667 9.81798 30.7667 7.6361 29.9174 5.96937C29.1705 4.50327 27.9785 3.3113 26.5124 2.56428C24.8457 1.71504 22.6638 1.71504 18.3001 1.71504H14.6639C10.3002 1.71504 8.11833 1.71504 6.4516 2.56428C4.98549 3.3113 3.79352 4.50327 3.04651 5.96937ZM18.3001 4.31227H14.6639C12.4392 4.31227 10.9269 4.31429 9.75789 4.40979C8.61922 4.50283 8.03692 4.67145 7.63071 4.87842C6.65331 5.37644 5.85866 6.17109 5.36065 7.14849C5.15367 7.55469 4.98505 8.13699 4.89202 9.27567C4.79652 10.4446 4.79449 11.957 4.79449 14.1817V17.8178C4.79449 20.0426 4.79652 21.5549 4.89202 22.7239C4.98505 23.8626 5.15367 24.4449 5.36065 24.8511C5.85866 25.8285 6.65331 26.6231 7.63071 27.1211C8.03692 27.3281 8.61922 27.4968 9.75789 27.5898C10.9269 27.6852 12.4392 27.6873 14.6639 27.6873H18.3001C20.5248 27.6873 22.0371 27.6852 23.2061 27.5898C24.3448 27.4968 24.9271 27.3281 25.3333 27.1211C26.3107 26.6231 27.1053 25.8285 27.6033 24.8511C27.8103 24.4449 27.979 23.8626 28.072 22.7239C28.1674 21.5549 28.1695 20.0426 28.1695 17.8178V14.1817C28.1695 11.957 28.1674 10.4446 28.072 9.27567C27.979 8.13699 27.8103 7.55469 27.6033 7.14849C27.1053 6.17109 26.3107 5.37644 25.3333 4.87842C24.9271 4.67145 24.3448 4.50283 23.2061 4.40979C22.0371 4.31429 20.5248 4.31227 18.3001 4.31227Z" fill="#0F0F0F"/>
</svg>

const Header = () => {
  const [menuBurger, setMenuBurger] = useState(false)

  const burgerHandler = () => {
    setMenuBurger(menuBurger => !menuBurger)
  }

  return (
  <header
    style={{
      margin: '0 auto',
      padding: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }}
  >
  <div className='menu first'>
    <ul className='menuInner'>
        <li className='headerRegular'><Link target='_blank' to="/">{xLogo}</Link></li>
        <li className='headerRegular'><Link target='_blank' to="/">{tLogo}</Link></li>
        <li><Link target='_blank' to="/">{zLogo}</Link></li>
        <li><Link target='_blank' to="/">{iLogo}</Link></li>
    </ul>
    <ul className='menuInner'>
      {menu2.map((x, index) => (
        <li key={index}>
          <Link
            to={x.link}
              >
            {x.title}
          </Link>
      </li>
      ))}
    </ul>
  </div>
  <div className='menu'>
    <Link
      className="headerLogo"
      to="/"
    >
      <LogoIcon />
    </Link>
  </div>
  <div className='menu second'>
    <LanguageMenu />
    <div className='walletConnectButton'>
      <WalletMultiButton />
    </div>
  </div>
  { menuBurger
    ? <div className="mobile-menu">
      <Link
        className="headerLogo"
        to="/"
      >
       <LogoIcon />
      </Link>
    <div className="mobile-menu-wrapper">
      <ul className="mobile-menu-small">
      {menu.map((x, index) => (
          <li onClick={() => burgerHandler()} className="mobile-menu-list" key={index}>
            {x.external
              ? <a
              href={x.link}
              target="_blank" rel="noreferrer"
            >
            {x.title}
            </a>
              : <Link
              to={x.link}
                >
              {x.title}
            </Link>}
        </li>
      ))}
      <li className='mobileLanguage'> <LanguageMenu /></li>
        </ul>
        <ul className="mobileSocial">
          <li className='headerRegular'><Link target='_blank' to="https://x.com/ShiboonCoin">{xLogo}</Link></li>
          <li className='headerRegular'><Link target='_blank' to="https://t.me/ShiboonCoin">{tLogo}</Link></li>
          <li><Link target='_blank' to="/">{zLogo}</Link></li>
          <li><Link target='_blank' to="/">{iLogo}</Link></li>
      </ul>
    </div>
    <div className="mobile-menu-social-wrapper">
    <ul>
        {/* {menu2.map((x, index) => (
          <li onClick={() => burgerHandler()} className="mobile-menu-list" key={index}>
            {x.external
              ? <a
              href={x.link}
              target="_blank" rel="noreferrer"
            >
            {x.title}
            </a>
              : <Link
              to={x.link}
                >
              {x.title}
            </Link>}
        </li>
        ))} */}
        <li>
        <div className='walletConnectButton'>
          <WalletMultiButton />
        </div>
        </li>
      </ul>
    </div>
  </div>
    : null
  }
  <button onClick={() => burgerHandler()} className="mobile-burger" aria-label="Burger menu open">
        {menuBurger ? 'Close' : 'Menu'}
  </button>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
