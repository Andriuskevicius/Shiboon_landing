import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './story.sass'

const Story = () => {
  return (
  <div className="storySection">
    <h1>$HIBOON <br/>STORY</h1>
    <div className="storyColumn">
      <p></p>
      <StaticImage
          src="../../images/story1.png"
          width={250}
          className="storyShiboon"
          placeholder="blurred"
          layout="fixed"
          alt="Shiboon"
        />
    </div>
    <div className="storyColumn">
      <StaticImage
            src="../../images/story2.png"
            width={250}
            style={{ marginLeft: 80, marginTop: 40 }}
            className="storyShiboon"
            placeholder="blurred"
            layout="fixed"
            alt="Shiboon"
        />
      <p style={{ marginTop: 40 }}>In the vibrant world of decentralized finance, $HI, the adventurous Shiba Inu, and BOON, the wise baboon, met unexpectedly.</p>
    </div>
    <div className="storyColumn">
      <p>$HI chased memes on Solana while BOON explored hidden gems & labyrinthine depths of Ethereum L2. Their encounter led to the discovery of $HIBOON, sparking a shared passion for crypto.</p>
      <StaticImage
            src="../../images/story3.png"
            width={250}
            style={{ marginLeft: 40 }}
            className="storyShiboon"
            placeholder="blurred"
            layout="fixed"
            alt="Shiboon"
          />
    </div>
    <div className="storyColumn">
    <StaticImage
          src="../../images/story4.png"
          width={250}
          className="storyShiboon"
          placeholder="blurred"
          layout="fixed"
          alt="Shiboon"
        />
      <p>Thus, a legend was born of two unlikely companions navigating the wilds of decentralized finance.</p>
    </div>
  </div>
  )
}

export default Story
