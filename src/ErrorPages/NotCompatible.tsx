import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IncompatibleFeatureMain = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 2px 8px 8px 2px;
  box-shadow: rgba(19, 51, 77, 0.15) 0px 2px 4px;
  text-align: center;
`

const IncompatibleFeatureTitle = styled.h1`
  color: #a0aab2;
  margin: 0;
  font-size: 4em;
`

const IncompatibleFeatureBody = styled.p`
  color: #333;
  font-family: sans-serif;
`

interface NotCompatibleProps {
  feature: {
    name: 'sessionStorage'
  }
}

export const NotCompatible: FC<NotCompatibleProps> = ({ feature }) => (
  <IncompatibleFeatureMain>
    <IncompatibleFeatureTitle>&#9888;</IncompatibleFeatureTitle>
    <IncompatibleFeatureBody
      dangerouslySetInnerHTML={{
        __html: incompatibilityMessages[feature.name].de
      }}></IncompatibleFeatureBody>
    <IncompatibleFeatureBody
      dangerouslySetInnerHTML={{
        __html: incompatibilityMessages[feature.name].en
      }}></IncompatibleFeatureBody>
  </IncompatibleFeatureMain>
)

const incompatibilityMessages = {
  sessionStorage: {
    de: `Lieber Etvas Nutzer, unser Marktplatz für Zusatz-Services ist aus technischen Gründen im Inkognitomodus leider nicht verfügbar. Bitte loggen Sie sich im normalen Browserbetrieb in die Plattform ein.`,
    en: `Dear Etvas user, our marketplace for additional services is unfortunately not available in incognito mode for technical reasons. Please log in to the platform in normal browser mode.`
  }
}
