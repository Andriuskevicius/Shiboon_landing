import React from 'react'
import './faq.sass'
import { useIntl } from 'gatsby-plugin-intl'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import './fancy-example.css'

const Faq = () => {
  const intl = useIntl()
  return (
  <div className="faqSection">
    <div className="faqRow">
      <div className="faqTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'faq-title' })}</h1>
        <div className="faqWrapper">
          <Accordion
              allowMultipleExpanded={true}
              allowZeroExpanded={true}
          >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq1' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq1-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq2' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq2-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq3' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq3-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq4' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq4-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq5' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq5-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq6' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq6-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {intl.formatMessage({ id: 'faq7' })}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    {intl.formatMessage({ id: 'faq7-answer' })}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Faq
