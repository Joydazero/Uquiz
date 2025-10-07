import { Routes, Route } from 'react-router-dom'
import './App.css'

import { RouteConfig } from '../router'

function App() {
  return (
    <>
      <Routes>
        {RouteConfig.map( (config)=> (<Route key={config.path}{...config} />))}
        {/* <Route index element={<Home />}></Route>
        <Route path="results/:nickname" element={<Results />}></Route>
        <Route path="/quiz/:nickname" element={<Quiz />}></Route>
        <Route path="*" element={<p>페이지를 찾을 수 없습니다.</p>}></Route> */}
      </Routes>
    </>
  )
}
export default App
