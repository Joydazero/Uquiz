import { useNavigate, useParams } from "react-router-dom";
import QuizForm from "../components/QuizForm";
//import data from '../data/questions.json'
import { useState } from "react";
import { useQuizContext } from "../components/QuizContext";



function Quiz(){
    const { nickname } = useParams();
    const navigate = useNavigate();
    //const [ qdata, qSetData ] = useState(data);  // json 데이터
    const [ currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
    const [ selectedOption, setSelectedOption ] = useState("");  // 사용자가 선택한 답
    // const [ answerCounts, SetanswerCounts ] = useState(0);  // 정답 여부
    const { setResult, qdata, qSetData, answerCounts, SetanswerCounts } = useQuizContext();  

    const currentQuestion = qdata[currentIndex];
    const handleRadioInpValue = (e, idx) => {
        const value = e.target.value;
        setSelectedOption(idx + 1);
        console.log("현재 선택 값:", value);    
        console.log("현재 클릭한 옵션 index:", idx + 1);
    };
    const handleNextmoveClick = () => {
        const current = currentQuestion;
        const qAnswer = current.answer +1 ;
        if (!selectedOption) {
            alert("선택지를 선택해주세요.");
            return;
        }else{
            if( currentIndex === qdata.length -1 ){   
                const newScore = answerCounts + (selectedOption === qAnswer ? 1 : 0);
                
                alert("모든 문제를 완료했습니다!");
                setResult({ nickname , score: newScore, total: qdata.length});
                navigate(`/results/${nickname}`);
            }else{
                if( selectedOption === qAnswer ){
                    SetanswerCounts( (prev) => prev + 1);
                }
                setCurrentIndex( (prev) => prev + 1); // 현재 currentIndex = 0 이라면 → prev + 1 = 1 로 업데이트 → 다음 문제로 이동
                setSelectedOption("") // 선택 초기화   
            }
        }
    }

    return(
        <>
        <QuizForm contentWith="w-[30rem]" contentHeight="h-[40rem]">
                    <div >
                        <h2 className="text-[#000] font-bold text-2xl">UQuiz?</h2>
                        <h3 className="text-[#000] font-bold text-2xl">{currentIndex + 1}. {currentQuestion.question}</h3>
                        <ul className="mt-1">
                            {
                            currentQuestion.options.map( (option, idx) => (
                                <li key={idx+1}>
                                    <input type="radio" 
                                    checked={selectedOption === idx + 1}
                                    id={`option_${idx+1}`} name={`${currentIndex + 1}_qst`} 
                                    value={option}                      
                                    onChange={(e) => handleRadioInpValue(e, idx)}
                                    data-index={idx+1}  
                                    className="appearance-auto mr-2"                                  
                                    />
                                    <label htmlFor={`option_${idx+1}`}>{option}</label>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>`현재 점수`{answerCounts}</div>
                        <button onClick={handleNextmoveClick} className="mt-3 w-full h-[40px] bg-[#015ce4] text-white rounded-[7px]"> {currentIndex === qdata.length - 1 ? "결과보기" : "다음"}</button>
                    </div> 
        </QuizForm>
        </>
    )
}
export default Quiz;
