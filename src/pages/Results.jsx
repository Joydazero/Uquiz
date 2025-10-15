import QuizForm from "../components/QuizForm";
import { useQuizContext } from "../components/QuizContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

  const API_BASE = import.meta.env.PROD
  ? "https://uquiz.onrender.com" // Render에서 배포된 백엔드 URL
  : "http://localhost:3000";      // 로컬 json-server URL

function Results(){
    const { nickname } = useParams();
    const navigate = useNavigate();
    const { result, setResult, qdata, qSetData, answerCounts, SetanswerCounts, addRanking, rankingList, setRankingList } = useQuizContext();

    const hasAdded = useRef(false);

    useEffect(() => {
    const saveRanking = async () => {
        if (!hasAdded.current && result.nickname) {
        hasAdded.current = true;  // ✅ 호출 전에 true로 먼저 세팅
        await addRanking(result.nickname, result.score);
        }
    };
    saveRanking(); 
    }, [result, addRanking]); 

    const sortedRanking = [...rankingList].sort((a, b) => b.score - a.score);
    const handleResetQuiz = () => {
        SetanswerCounts(0);
        setResult({ nickname: "", score: 0 });
        navigate("/");
    };
    const handleDelete = async (nickname) => {
        try {
            // 닉네임으로 먼저 검색
            //const res = await fetch(`http://localhost:3000/newRanking?nickname=${nickname}`);
            const res = await fetch(`${API_BASE}/newRanking?nickname=${nickname}`);
            const data = await res.json();

            if (data.length > 0) {
            const targetId = data[0].id; // 닉네임이 유일하다고 가정
            await fetch(`${API_BASE}/newRanking/${targetId}`, { method: "DELETE" });

            setRankingList((prev) => prev.filter((el) => el.nickname !== nickname));
            }
        } catch (err) {
            console.error(err);
        }
        };

    return(
        <>
        <QuizForm contentWith="w-[35rem]" contentHeight="h-[40rem]">
            <div className="flex items-center justify-evenly flex-col px-[50px] py-[20px] tracking-normal w-full">
                <h2 className="text-[#000] font-bold text-2xl">📝 Uquiz?</h2>
                <h3 className="mt-[1rem] text-[rgb(0,0,0)] font-medium text-lg">📊 퀴즈 결과</h3>
                <p className="mt-6">
                    <strong>닉네임:</strong> {result.nickname}
                </p>
                <p className="mt-3"><b>내 점수 :</b><span><span>{result.score}</span><small>/</small><span>{result.total}</span></span></p>
                <div className="table w-full mt-10">
                    <div className="table-header-group">
                        <div className="table-row">
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">순위</div>
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">ID</div>
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">점수</div>
                            <div className="table-cell bg-[#383838] text-[#fff] text-center">삭제</div>
                        </div>      
                    </div>
                    <div className="table-row-group">
                       
                            {
                                sortedRanking.map( (user, idx )=>(
                                 <div className="table-row" key={idx}>
                                    <div className="table-cell text-center">{idx+1}</div>
                                    <div className="table-cell text-center">{user.nickname}</div>
                                    <div className="table-cell text-center">{user.score} / {result.total}</div>
                                    <div className="table-cell text-center">
                                        <button  onClick={() => handleDelete(user.nickname)}>삭제</button>
                                    </div>
                                </div>
                                ))
                            }
                        
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="mt-3 rounded-[7px] bg-[#ccc] text-white px-[1rem] py-[.5rem]" onClick={handleResetQuiz}>다시 하기</button>
                </div>
            </div>
        </QuizForm>
        </>
    )
}
export default Results;