import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizForm from "../components/QuizForm";


function Nickname(){
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();
    const handleNickname = (e) => {
        const target = e.target;
        console.log(e.target.value);
        setNickname(target.value)
    }
    // const  [ errorMessage , setErrorMessage] = useState("")
    // const onSubmit = (e) => {
        // form 자체의 제출 행동은 금지!
    //     e.preventDefault();
    //     if ( nickname === ""){
    //         alert("닉네임음 필수 입니다.")
    //      setErrorMessage('닉네임음 필수 입니다.')
    //     }else{
    //         navigate({ to: `/quiz/${nickname}`});
    //            setErrorMessage('')
    //     }
    // }
    const handleButtonClick = () => {
        if( nickname.trim() === '' ){
            return alert('닉네임을 입력해주세요');
        }else{
            navigate(`/quiz/${nickname}`)
        }
    }
    return(
        <>  
            <QuizForm contentWith="w-[25rem]" contentHeight="h-[25rem]">        
                {/* <form action={onSubmit}></form> */}
                    <h2 className="text-[#000] font-bold text-2xl">📝 Uquiz?</h2>
                    <input type="text" className="bg-[white] border-1 border-[#a9a9a9] rounded-[5px] text-center mt-4 h-[2.3rem] w-[15rem]" value={nickname}  onChange={handleNickname} placeholder="닉네임을 입력하세요." />
                    {/* <button type="submit">ee</button> */}
                    <button className="bg-[#4842f3] hover:bg-[#333765] transition-background ease-linear duration-100 rounded-[5px] text-[#fff] mt-4 w-[10rem] py-[.5rem]" onClick={handleButtonClick}>시작하기</button>
                
            </QuizForm>
        </>
    )
}
export default Nickname;

 // onChange={(e) => {
                            // console.log(e.target.value); // 현재 입력값 확인
                            // setNickname(e.target.value);  }}