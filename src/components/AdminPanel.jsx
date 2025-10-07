import { useQuizContext } from "../components/QuizContext";

function AdminPanel() {
  const { qSetData, SetanswerCounts, setResult } = useQuizContext();

  const resetAllData = () => {
    localStorage.removeItem("ranking");   // 랭킹 초기화
    localStorage.removeItem("blocked");   // (만약 차단 목록도 관리했다면)
    SetanswerCounts(0);
    setResult({ nickname: "", score: 0, total: 0 });
    alert("퀴즈 기록이 모두 초기화되었습니다!");
    window.location.reload(); // 새로고침으로 초기화 반영
  };

  return (
    <button onClick={resetAllData} className="rounded-[7px] bg-[#ccc] text-white px-[1rem] py-[.5rem]">
      퀴즈 기록 전체 초기화
    </button>
  );
}

export default AdminPanel;
