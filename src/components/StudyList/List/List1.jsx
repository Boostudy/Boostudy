import React from 'react';
import { PageWrapper, Header, Section, CodeBlock, Footer, LinkButton } from './StudyListStyle';

const StudyList1 = () => {
  return (
    <PageWrapper>
      <Header>
        <h1>Week 1</h1>
        <span role="img" aria-label="wind">💨</span>
      </Header>
      
      {/* 리액트 소개 */}
      <Section>
        <h2>✅ 리액트</h2>
        <p>
          리액트는 컴포넌트 기반의 UI 라이브러리로, 재사용 가능한 컴포넌트를 통해 효율적으로 사용자 인터페이스를 개발할 수 있습니다.
          가상 DOM을 사용해 변경된 부분만 업데이트하여 성능을 최적화합니다. 선언형 프로그래밍 방식을 채택해 상태와 데이터에 따라 UI가 자동으로 렌더링됩니다.
        </p>
        <h3>리액트를 사용하는 이유</h3>
        <ul>
          <li>컴포넌트 기반 아키텍처</li>
          <li>가상 DOM (Virtual DOM)</li>
          <li>단방향 데이터 흐름</li>
          <li>선언형 UI</li>
          <li>가장 많이 사용하는 라이브러리</li>
        </ul>
      </Section>
      
      {/* JSX 소개 */}
      <Section>
        <h2>JSX</h2>
        <p>
          리액트에서 HTML과 비슷한 구문을 사용해 UI를 정의하는 문법입니다. JSX는 JavaScript 코드 안에서 HTML을 작성할 수 있도록 하며, 브라우저가 이해할 수 있는 순수 JavaScript로 변환됩니다.
        </p>
        <p>*JSX는 하나의 루트 요소로 감싸야 합니다.</p>
      </Section>
      
      {/* 리액트 설치 */}
      <Section>
        <h2>✅ 리액트 설치하기</h2>
        <p>리액트를 시작하려면 Node.js와 npm이 설치되어 있어야 합니다. 설치 후 아래 명령어를 사용하세요:</p>
        <CodeBlock>
          npx create-react-app boostudy <br />
          cd boostudy <br />
          npm start
        </CodeBlock>
        <h3>프로젝트 구조</h3>
        <p>다음은 기본 디렉토리 구조입니다:</p>
        <CodeBlock>
          boostudy/ <br />
          ├── public/ <br />
          ├── src/ <br />
          │   ├── App.css <br />
          │   ├── App.js <br />
          │   ├── index.js <br />
          │   └── ... <br />
          ├── package.json <br />
          └── ...
        </CodeBlock>
      </Section>

      {/* 리액트 라우팅 */}
      <Section>
        <h2>✅ 리액트 라우팅 설정하기</h2>
        <p>React Router를 사용하여 여러 페이지를 구현합니다. 예제 코드:</p>
        <CodeBlock>
          import React from 'react'; <br />
          import &#123; BrowserRouter, Routes, Route &#125; from 'react-router-dom'; <br />
          export default function Router() &#123; <br />
          &nbsp;&nbsp;return ( <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;BrowserRouter&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Routes&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/" element=&#123;&lt;MainPage /&gt;&#125; /&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/about" element=&#123;&lt;AboutPage /&gt;&#125; /&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Routes&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/BrowserRouter&gt; <br />
          &nbsp;&nbsp;); <br />
          &#125;
        </CodeBlock>
      </Section>
      
      <Footer>
        <p>📝 코드 리뷰: <LinkButton href="https://nashs789.tistory.com/157" target='_blank'>코드 리뷰</LinkButton></p>
      </Footer>
    </PageWrapper>
  );
};

export default StudyList1;
