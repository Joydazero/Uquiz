import { useEffect, useState } from "react";
import { createContext, useContext } from "react"
import data from '../data/questions.json'
export const QuizContext = createContext();
const API_BASE = import.meta.env.PROD
  ? "https://uquiz.onrender.com" // ✅ Render 서버 주소 (배포용)
  : "http://localhost:3000";

export const QuizProvider = ( {children}) => {
    const [ result, setResult ] = useState({ nickname: "" , score : 0,  total: 0}); 
    const [ qdata, qSetData ] = useState(data); 
    const [ answerCounts, SetanswerCounts ] = useState(0);       
    const [rankingList, setRankingList] = useState([]);

    useEffect(()=>{
         fetch(`${API_BASE}/newRanking`)
        .then(res => res.json())
        .then(data => setRankingList(data))
        .catch(err => console.error("랭킹 불러오기 실패", err));
    }, []);


    const addRanking = async (nickname, score) => {
         if (rankingList.some(r => r.nickname === nickname)) return;

        try {
             const res = await fetch(`${API_BASE}/newRanking`, {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nickname, score }),       
            })
            const newRank = await res.json();
            setRankingList((prev) => 
                [...prev, newRank]
                .sort((a, b) => b.score - a.score) // 점수 내림차순 정렬
                .slice(0, 10)
            );
        } catch (error) {
             console.error("랭킹 추가 실패:", error);
        }
        
    };

    return(
        <QuizContext.Provider 
        value={{ 
            result,
            setResult,
            qdata,
            qSetData,
            answerCounts,
            SetanswerCounts,
            rankingList,
            addRanking,
            setRankingList,
            }}>
        {children}        
        </QuizContext.Provider>
    )
};

export const useQuizContext = () => useContext(QuizContext);

