import { QuizProvider } from "../components/QuizContext";
import Nickname from "./Nickname";

function Home(){
  return (
    <>
        <QuizProvider>
          <Nickname></Nickname>
        </QuizProvider>
        
    </>
  )
}


export default Home;