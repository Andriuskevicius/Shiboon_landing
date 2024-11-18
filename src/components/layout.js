/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useMemo } from 'react'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui'
import * as web3 from '@solana/web3.js'
import Header from './header/header'
import Footer from './footer/Footer'
import '../styles/app.sass'
import '../styles/wallet.css'

const Layout = ({ page, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const endpoint = web3.clusterApiUrl('mainnet-beta')
  const wallets = useMemo(() => [], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
      <WalletModalProvider>
        <Header page={page} siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
