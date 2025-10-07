import { useState } from "react";
import { createContext, useContext } from "react"
import data from '../data/questions.json'
export const QuizContext = createContext();

export const QuizProvider = ( {children}) => {
    const [ result, setResult ] = useState({ nickname: "" , score : 0,  total: 0}); 
    const [ qdata, qSetData ] = useState(data); 
    const [ answerCounts, SetanswerCounts ] = useState(0);     
    const [rankingList, setRankingList] = useState(() => {
    const saved = localStorage.getItem("ranking");
        return saved ? JSON.parse(saved) : [];
    });

    const addRanking = (nickname, score) => {
        setRankingList(prev => {
            const exists = prev.some(r => r.nickname === nickname && r.score === score);
            if (exists) return prev;
            const updated = [...prev, { nickname, score }];
            localStorage.setItem("ranking", JSON.stringify(updated));
            return updated;
        });
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
            }}>
        {children}        
        </QuizContext.Provider>
    )
};

export const useQuizContext = () => useContext(QuizContext);

