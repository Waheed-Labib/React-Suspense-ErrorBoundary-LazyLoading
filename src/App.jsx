import './App.css'
import FetchOnRender from './fetching-components/fetch-on-render/FetchOnRender'

function App() {

  return (
    <>
      <ol>
        <h1>Different fetching approaches with React</h1>
        <li>
          <FetchOnRender></FetchOnRender>
        </li>

        <li>
          <h2>Fetch then Render</h2>
        </li>

        <li>
          <h2>Render while Fetching</h2>
        </li>
      </ol>
    </>
  )
}

export default App
