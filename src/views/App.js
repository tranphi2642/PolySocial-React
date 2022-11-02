import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRouters } from '../routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
