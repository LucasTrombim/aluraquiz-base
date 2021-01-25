import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 16px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
            <Widget.Content>
              <h1>{db.description}</h1>
            </Widget.Content>
        </Widget>
        <Widget>
            <Widget.Content>
              <h1>{db.description}</h1>
            </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/LucasTrombim"/>
      </QuizContainer>
    </QuizBackground>
  )
}
