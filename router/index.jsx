import Home from "../src/pages/Home";
import Notfound from "../src/pages/Notfound";
import Quiz from "../src/pages/Quiz";
import Results from "../src/pages/Results";

export const RouteConfig = [
    { index: true, element : <Home/> },
    { path : '/quiz/:nickname', element : <Quiz /> },
    { path : '/results/:nickname', element : <Results/>},   
    { path : '*', element : <Notfound/>}
    // 일반적으로는 <NotFoundPage />와 같은 별도의 컴포넌트를 사용합니다.
];