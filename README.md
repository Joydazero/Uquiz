# 리액트 복습 프로젝트
## :react-icon: React 프로젝트 만들기

# 1단계

### 요구사항

- Vite를 이용하여 React 프로젝트를 만들어주세요.
- React의 기본 뼈대만 남기고 다른 내용은 제거해주세요.

### 단계별로 구현하기

- 아래 코드를 활용하여 React-Vite 프로젝트를 생성해주세요.
    
    ```bash
    npm create vite@latest
    ```
    
- 필요없는 파일은 지우고 기본 뼈대 부분만 남깁니다.
## :github_logo: GitHub와 연동하기

### 요구사항

- Git을 활용하여 버전관리를 진행해주세요.
- GitHub에 새로운 Repository를 생성해주세요.
- GitHub에 업로드하여 다른 사람들이 소스코드를 볼 수 있게 접근 설정을 Public으로 지정해주세요.
- GitHub에 작성한 코드를 업로드해주세요.
- 공유란에 생성한 GitHub 레포지토리 주소를 적어주세요.

---------

# 2단계

## :structure: 라우팅 설정

### 요구사항

<aside>
📌

전체 페이지 구성

- 닉네임 설정 페이지(메인 페이지)
- 퀴즈 풀이 페이지
- 결과 페이지
</aside>

- 아래 페이지와 주소를 기반으로 React-Router-Dom을 활용하여 라우팅을 설정해주세요.
    
    
    | 주소 | 렌더링 컴포넌트 |
    | --- | --- |
    | `/` | Home |
    | `/quiz/:nickname` | Quiz |
    | `results/:nickname` | Results |

### 단계별로 구현하기

1. `react-router-dom` 라이브러리를 설치합니다.
    
    ```bash
    npm install react-router-dom
    ```
    
2. `App.jsx` 에서 주소에 맞춰 Route를 구성합니다.
    
    
    | 주소 | 렌더링 컴포넌트 |
    | --- | --- |
    | `/` | Home |
    | `/quiz/:nickname` | Quiz |
    | `results/:nickname` | Results |
    - 힌트
        - `react-router-dom` 과 `react-dom` 은 다른 라이브러리입니다.
        - `BrowserRouter`, `Routes`, `Route`가 사용되어 구성됩니다.
        - 공식예시: https://github.com/remix-run/react-router/tree/dev/examples/basic/src

## 👤 닉네임 설정 페이지 구현

### 요구사항

- React 컴포넌트를 활용하여 `Home` 컴포넌트에 닉네임 설정 페이지를 구현합니다.
- `Home` 컴포넌트에서는 닉네임을 입력받는 페이지를 구성합니다.
- 사용자는 닉네임을 입력할 수 있는 입력창과 `시작하기` 버튼을 통해 퀴즈를 시작할 수 있습니다.
- 닉네임을 입력하지 않은 상태에서 `시작하기` 버튼을 누를 경우, **닉네임 입력은 필수임을 알리는 경고창**이 표시됩니다.
- 닉네임을 정상적으로 입력한 경우, **`/quiz/닉네임`** 형식의 경로로 라우팅되며 퀴즈 화면으로 이동합니다.

---------------------

#3단계

## 📝 퀴즈 풀이 페이지 구현

<aside>
📌

퀴즈 풀이 페이지는 문제를 푸는 페이지입니다.

문제는 하나씩 보이며, 다음 버튼을 통해 다음 문제로 넘어갈 수 있습니다. 문제는 아래 파일을 사용합니다.

[questions.json](attachment:2f6d372c-0cd4-42a5-86ce-dad412c495f7:questions.json)

</aside>

### 요구사항

- 퀴즈 풀이 페이지에서는 **한 번에 하나의 문제만 사용자에게 표시**됩니다.
- **선택지는 단일 선택**만 가능하도록 구성하여, 사용자가 하나의 보기만 선택할 수 있게 합니다.
- `다음` 버튼을 눌렀을 때,
    - **선택한 보기가 있을 경우**: 다음 문제로 넘어갑니다.
    - **선택하지 않았을 경우**: `선택지를 선택해주세요.`라는 **경고창**을 띄웁니다.
- 문제를 넘길 때마다 **선택 상태는 초기화**되어, 이전 선택이 유지되지 않도록 처리합니다.

--------

# 4단계

## 📢 배포하기

**배포에 적합한 Vercel, Netlify 등의 서비스 또는 GitHub Pages, AWS, Firebase Hosting 등을 활용해 배포할 수 있습니다.** 


💡

### 공식문서 Link

공식문서를 활용하여 배포를 진행해주세요.

- https://vercel.com/
- https://www.netlify.com/
- https://firebase.google.com/?gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--3o_PuxcybCuLXh34ns9JeZgo2fMsryErYBROLEUHRop-LqG5d0jAxoC_GsQAvD_BwE&gclsrc=aw.ds&hl=ko
- https://github.com/
- https://aws.amazon.com/ko/free/?gclid=CjwKCAiAxKy5BhBbEiwAYiW--6LicGC5wTZNF8cAIVIBFIvGG-dxl7E-Xdg5bCzXgOw2ECNJnTExPBoCrc4QAvD_BwE&trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&ef_id=CjwKCAiAxKy5BhBbEiwAYiW--6LicGC5wTZNF8cAIVIBFIvGG-dxl7E-Xdg5bCzXgOw2ECNJnTExPBoCrc4QAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws!15286221779!129400439466&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all


## Custom Hooks를 활용한 로직 분리하기

- React에서는 `useState`, `useEffect` 등 기본 Hook 외에도, **직접 만든 로직 재사용용 Hook인 Custom Hook**을 정의할 수 있습니다.
- Custom Hook을 사용하면 **로직과 UI를 분리**하고, **중복되는 코드나 복잡한 상태 관리**를 더 깔끔하게 정리할 수 있습니다.

### 요구사항

- 기존 컴포넌트의 로직 중, **상태 관리, 이벤트 처리, 비즈니스 로직** 등을 Custom Hook으로 분리해보세요.
- UI 렌더링 로직은 컴포넌트에 유지하고, **로직은 Hook으로 이동**하는 것을 목표로 합니다.
- Custom Hook은 `use`로 시작하는 함수 이름으로 정의하고, 필요한 값(상태, 함수 등)을 반환해보세요.

## 404 NotFound 페이지 구현

- 사용자가 잘못된 URL로 접근했을 때, **친절하게 안내해주는 404 Not Found 페이지**를 구현해보세요.
- 404 페이지는 사용자 경험을 향상시키고, 서비스의 완성도를 높이는 데 중요한 요소입니다.

### 요구사항

- 유효하지 않은 경로에 접근했을 때 렌더링되는 **404 페이지 컴포넌트**를 작성합니다.
- `react-router-dom`의 `Routes` 구성에서, 마지막에 `<Route path="*">`를 활용하여 **모든 예외 경로를 404 페이지로 연결**하세요.
- 404 페이지에는 다음과 같은 내용을 포함하고 있습니다.
    - `"찾을 수 없는 페이지입니다"` 또는 `"존재하지 않는 경로입니다"`와 같은 안내 문구
    - 홈으로 돌아가는 버튼 또는 링크