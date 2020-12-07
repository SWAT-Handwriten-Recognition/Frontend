/**
 * Explain features to user
 */
import {
  FeaturesContainer,
  Feature1,
  Feature2,
  Feature3,
  Feature4
} from './styled'

const Features = () => {

  return (
    <FeaturesContainer>
      <Feature1>
        Step 1 → register
      </Feature1>
      <Feature2>
        step 2 → upload your sign
      </Feature2>
      <Feature3>
        step 3 → confirm your sign
      </Feature3>
      <Feature4>
        step 4 → enjoy the app
      </Feature4>
    </FeaturesContainer>
  )
}

export default Features;
