import LinkWrapper from 'components/LinkWrapper'
import { XCircle } from '@styled-icons/octicons'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <XCircle size={32} aria-label="Close" />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>Hihihi viajar é legal</p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
