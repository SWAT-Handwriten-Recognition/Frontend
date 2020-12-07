/**
 * Explain features to user
 */
import {
  FeaturesContainer,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Text,
  TextContainer,
  Gif,
  GifContainer
} from './styled'

import signUpGIF from '../../assets/Gif/signup.gif'
import uploadGIF from '../../assets/Gif/upload.gif'
import confrim from '../../assets/Gif/confirm.gif'
import enjoy from '../../assets/Gif/enjoy.gif'

const Features = () => {

  return (
    <FeaturesContainer>
      <Feature1>
        <TextContainer>
          <Text>
            Step 1 → Sign Up
          </Text>
        </TextContainer>
        <GifContainer>
          <Gif src={signUpGIF} />
        </GifContainer>
      </Feature1>
      <Feature2>
        <TextContainer>
          <Text>
            Step 2 → Upload your sign
          </Text>
        </TextContainer>
        <GifContainer>
          <Gif src={uploadGIF} />
        </GifContainer>
      </Feature2>
      <Feature3>
        <TextContainer>
          <Text>
            Step 3 → Confirm your sign
          </Text>
        </TextContainer>
        <GifContainer>
          <Gif src={confrim} />
        </GifContainer>
      </Feature3>
      <Feature4>
        <TextContainer>
          <Text>
            Step 4 → Enjoy the app
          </Text>
        </TextContainer>
        <GifContainer>
          <Gif src={enjoy} />
        </GifContainer>
      </Feature4>
    </FeaturesContainer>
  )
}

export default Features;
