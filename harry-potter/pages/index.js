import Main from '../components/Main'
import Header from '../components/Header'
import Section from '../components/Section'

const header = false

export default function Home() {
    return (
      <div>
        <Header header={header}/>
        <Main />
        <Section />
      </div>
    )
}