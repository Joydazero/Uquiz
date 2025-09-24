import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizForm from "./QuizForm";

function Nickname(){
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if( nickname.trim() === '' ){
            return alert('닉네임을 입력해주세요');
        }else{
            navigate(`/quiz/${nickname}`)
        }
    }
    return(
        <>  
            <QuizForm contentWith="w-[25rem]">        
                <h2 className="text-[#000] font-bold text-2xl">📝 Uquiz?</h2>
                <input type="text" className="bg-[white] border-1 border-[#a9a9a9] rounded-[5px] text-center mt-4 h-[2.3rem] w-[15rem]" value={nickname} 
                        onChange={(e) => {
                        console.log(e.target.value); // 현재 입력값 확인
                        setNickname(e.target.value);  }}
                        placeholder="닉네임을 입력하세요." />
                <button className="bg-[#4842f3] hover:bg-[#333765] transition-background ease-linear duration-100 rounded-[5px] text-[#fff] mt-4 w-[10rem] py-[.5rem]" onClick={handleButtonClick}>시작하기</button>
            </QuizForm>
        </>
    )
}
export default Nickname;