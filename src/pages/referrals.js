import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/common.sass'
import '../styles/reset.sass'
import Referrals from '../sections/referrals/Referrals'

const referralsPage = () => {
  const intl = useIntl()
  return (
    <Layout page="referrals">
      <Seo title={intl.formatMessage({ id: 'title' })} />
      <div className="section">
        <Referrals />
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="Shiboon" />

export default referralsPage
