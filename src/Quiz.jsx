import { useParams } from "react-router-dom";
import QuizForm from "./QuizForm";
function Quiz(){
    const { nickname } = useParams();
    return(
        <>
        <QuizForm contentWith="w-[30rem]">
            <h2 className="text-xl"><span className="text-[#ff0000] font-bold">{nickname}</span>님, 안녕하세요!</h2>
            <p className="text-lg mt-4">🪄 지금부터 퀴즈를 시작합니다.</p>
        </QuizForm>
        </>
    )
}
export default Quiz;