import Header from './components/header'
import Body from './components/Body'
import './App.css'

function App() {

  return (
    <>
      <div className="ambient-backdrop" aria-hidden="true">
        <div className="ambient-blob b1" />
        <div className="ambient-blob b2" />
        <div className="ambient-blob b3" />
        <div className="ambient-grain" />
      </div>
      <Header />
      <Body />
    </>
  )
}

export default App
