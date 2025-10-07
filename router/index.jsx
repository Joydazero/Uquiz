import Home from "../src/pages/Home";
import Quiz from "../src/pages/Quiz";
import Results from "../src/pages/Results";

export const RouteConfig = [
    { index: true, element : <Home/> },
    { path : '/quiz/:nickname', element : <Quiz /> },
    { path : '/results/:nickname', element : <Results/>},   
    { path : '*', element : <p>페이지를 찾을 수 없습니다.</p>}
    // 일반적으로는 <NotFoundPage />와 같은 별도의 컴포넌트를 사용합니다.
];