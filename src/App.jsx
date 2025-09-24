import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Results from './Results'
import Quiz from './Quiz'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="results/:nickname" element={<Results />}></Route>
        <Route path="/quiz/:nickname" element={<Quiz />}></Route>
        <Route path="*" element={<p>페이지를 찾을 수 없습니다.</p>}></Route>
      </Routes>
    </>
  )
}
export default App
