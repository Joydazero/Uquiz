import QuizForm from "../components/QuizForm";
import { useQuizContext } from "../components/QuizContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import AdminPanel from "../components/AdminPanel";

function Results(){
    const { nickname } = useParams();
    const navigate = useNavigate();
    const { result, setResult, qdata, qSetData, answerCounts, SetanswerCounts, addRanking, rankingList } = useQuizContext();     

    const hasAdded = useRef();
    useEffect(() => {
        if (!hasAdded.current && result.nickname) {
            addRanking(result.nickname, result.score);
            hasAdded.current = true;
        }
    }, [result]);

    //const sortedRanking = [ ...rankingList].filter(user => user.nickname !== "디즈니").sort( (a,b)=> b.score - a.score)
    const sortedRanking = [ ...rankingList].sort( (a,b)=> b.score - a.score)
    const handleResetQuiz = () => {
        SetanswerCounts(0);
        setResult({ nickname: "", score: 0 });
        navigate("/");
    };
    console.log(sortedRanking);
    
    return(
        <>
        <QuizForm contentWith="w-[35rem]" contentHeight="h-[40rem]">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[#000] font-bold text-2xl">📝 Uquiz?</h2>
                <h3 className="mt-[2rem] text-[rgb(0,0,0)] font-medium text-xl">📊 퀴즈 결과</h3>
                <p>
                    <strong>닉네임:</strong> {result.nickname}
                </p>
                <p><b>내 점수 :</b><span><span>{result.score}</span><small>/</small><span>{result.total}</span></span></p>
                <div className="table w-full mt-3">
                    <div className="table-header-group">
                        <div className="table-row">
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">순위</div>
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">ID</div>
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">점수</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                       
                            {
                                sortedRanking.map( (user, idx )=>(
                                 <div className="table-row" key={idx}>
                                    <div className="table-cell text-left">{idx+1}</div>
                                    <div className="table-cell text-left">{user.nickname}</div>
                                    <div className="table-cell p-2">{user.score} / {result.total}</div>
                                </div>
                                ))
                            }
                        
                    </div>
                </div>
                <div className="text-center">
                    <div>
                        <AdminPanel></AdminPanel>
                    </div>
                    <button className="mt-3 rounded-[7px] bg-[#ccc] text-white px-[1rem] py-[.5rem]" onClick={handleResetQuiz}>다시 하기</button>
                </div>
            </div>
        </QuizForm>
        </>
    )
}
export default Results;