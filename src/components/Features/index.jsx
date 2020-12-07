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
} from './styled'

const Features = () => {

  return (
    <FeaturesContainer>
      <Feature1>
        <TextContainer>
          <Text>
            Step 1 → register
          </Text>
        </TextContainer>
      </Feature1>
      <Feature2>
        <TextContainer>
          <Text>
            Step 2 → upload your sign
          </Text>
        </TextContainer>
      </Feature2>
      <Feature3>
        <TextContainer>
          <Text>
            Step 3 → confirm your sign
          </Text>
        </TextContainer>
      </Feature3>
      <Feature4>
        <TextContainer>
          <Text>
            Step 4 → enjoy the app
          </Text>
        </TextContainer>
      </Feature4>
    </FeaturesContainer>
  )
}

export default Features;
