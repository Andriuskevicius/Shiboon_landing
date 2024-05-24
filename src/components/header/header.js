import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './header.sass'
import {
  WalletMultiButton, useWalletModal
} from '@solana/wallet-adapter-react-ui'
import LanguageMenu from './lang'
import LogoIcon from '../../images/LogoIcon'

const menu = [
  {
    title: 'Boopaper',
    link: 'https://luckyboo.dog/wp-content/uploads/2024/03/Unleash_the_Fortunes_with_Lucky_Boo_Your_Ultimate_Crypto_Luck_Charm.pdf'
  },
  {
    title: 'Audit',
    link: '/https://coinsult.net/projects/lucky-boo/'
  }
]

const menu2 = [
  {
    title: 'Lightpaper',
    link: 'https://luckyboo.dog/wp-content/uploads/2024/03/Unleash_the_Fortunes_with_Lucky_Boo_Your_Ultimate_Crypto_Luck_Charm.pdf'
  },
  {
    title: 'Social Meme Raid',
    link: 'https://luckyboo.dog/wp-content/uploads/2024/03/Unleash_the_Fortunes_with_Lucky_Boo_Your_Ultimate_Crypto_Luck_Charm.pdf'
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
<path d="M7.69292 10.0755L5.6811 12.0568C5.6811 12.0568 5.59361 12.1244 5.47674 12.1273C5.43623 12.1285 5.39277 12.1221 5.34814 12.102L5.91428 8.59918L7.69292 10.0755Z" fill="#444C0F"/>
<path d="M11.7431 2.84733C11.6439 2.71814 11.4606 2.69465 11.3314 2.79273L3.5824 7.43007C3.5824 7.43007 4.8191 10.89 5.00761 11.489C5.1967 12.0886 5.3482 12.1021 5.3482 12.1021L5.91433 8.59922L11.688 3.25839C11.8172 3.16033 11.8412 2.97652 11.7431 2.84733Z" fill="#94A138"/>
</svg>

// const menuMobile = [
//   {
//     external: false,
//     title: 'About',
//     link: '#features'
//   },
//   {
//     external: false,
//     title: 'Luckyboo Tokenomics',
//     link: '#open-world'
//   },
//   {
//     external: false,
//     title: 'MemeRaids',
//     link: '#why-us'
//   }
// ]

const burger = <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2" y1="2" x2="33" y2="2" stroke="rgba(33, 33, 33, 1)" strokeWidth="4" strokeLinecap="round"/>
<line x1="2" y1="14" x2="33" y2="14" stroke="rgba(33, 33, 33, 1)" strokeWidth="4" strokeLinecap="round"/>
<line x1="2" y1="26" x2="33" y2="26" stroke="rgba(33, 33, 33, 1)" strokeWidth="4" strokeLinecap="round"/>
</svg>

const close = <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2" y1="24.9204" x2="23.9203" y2="3.00004" stroke="black" strokeWidth="4" strokeLinecap="round"/>
<line x1="2.95404" y1="2.62573" x2="24.8743" y2="24.546" stroke="black" strokeWidth="4" strokeLinecap="round"/>
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
        <li className='headerRegular'><Link target='_blank' to="https://twitter.com/LuckyBooToken">{xLogo}</Link></li>
        <li className='headerRegular'><Link target='_blank' to="https://t.me/LuckyBooToken">{tLogo}</Link></li>
        <li><Link target='_blank' to="https://zealy.io/c/luckybooairdrop">{zLogo}</Link></li>
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
          <li className='headerRegular'><Link target='_blank' to="https://twitter.com/LuckyBooToken">{xLogo}</Link></li>
          <li className='headerRegular'><Link target='_blank' to="https://t.me/LuckyBooToken">{tLogo}</Link></li>
          <li><Link target='_blank' to="https://zealy.io/c/luckybooairdrop">{zLogo}</Link></li>
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
        {menuBurger ? close : burger}
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
