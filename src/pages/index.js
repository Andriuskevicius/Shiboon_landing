import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/common.sass'
import '../styles/reset.sass'
import Hero from '../sections/hero/Hero'
import Buy from '../sections/buy/Buy'
import Story from '../sections/story/Story'
import How from '../sections/how/How'
import Featured from '../sections/featured/Featured'
import Raid from '../sections/raid/Raid'
import Subscribe from '../sections/subscribe/Subscribe'
import Faq from '../sections/faq/Faq'
import Tokenomics from '../sections/tokenomics/Tokenomics'
import Volume from '../sections/volume/Volume'
import Roadmap from '../sections/roadmap/Roadmap'

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: 'title' })} />
      <div className="section">
        <Hero />
        <Buy />
        <Volume />
        <Story />
        <Tokenomics />
        <How />
        <Roadmap />
        <Raid />
        <Featured />
        <Subscribe />
        <Faq />
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

export default IndexPage
