import React, { useState } from 'react';
import './Soeun.css';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';

const Soeun = () => {
  const [showFirstQuestion, setShowFirstQuestion] = useState(false);
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);

  return (
    <div className="problem-container">
      <h1 className="problem-title">소은의 문제 페이지</h1>
      <hr className="divider" />

      {/* 문제 1 */}
      <div className="problem-section">
        <h2 className="problem-heading">문제 1: 컴포넌트 작성</h2>
        <p className="problem-description">
          1. 다음 요구사항을 충족하는 코드를 작성하세요
          <ul>
            <li>자신의 이름 출력</li>
            <li>좋아하는 음식을 출력</li>
            <li>현재 날짜를 출력</li>
          </ul>
        </p>
        <p className="example-output">
          <strong>예상 출력:</strong>
          <br />
          안녕하세요, 저는 소은입니다.
          <br />
          제가 좋아하는 음식은 연어입니다.
          <br />
          오늘 날짜는 2024-12-05입니다.
        </p>
        <div className="code-editor">
          <h3>문제 1 답안 작성:</h3>
          <pre>
            {`import React from 'react';

const SoeunFirst = () => {
  return (
    <>
      답안
    </>
  );
};

export default SoeunFirst;
            `}
          </pre>
        </div>
      </div>
      <button style={{cursor: 'pointer'}} onClick={() => setShowFirstQuestion(!showFirstQuestion)}>
          {showFirstQuestion ? '문제 1 닫기' : '문제 1 답안 보기'}
        </button>
        {showFirstQuestion && (
          <FirstQuestion onClose={() => setShowFirstQuestion(false)} />
        )}
      <hr className="divider" />

      {/* 문제 2 */}
      <div className="problem-section">
        <h2 className="problem-heading">문제 2: 문제 1 확장 문제</h2>
        <p className="problem-description">
          1. 이름과 좋아하는 음식을 <strong>변수</strong>에 저장하고 JSX 내부에서 출력하도록 수정하세요.
          <br />
          2. <code>toLocaleDateString()</code> 메서드를 사용해 현재 날짜를 지역 형식으로 출력하세요.
        </p>
        <p className="example-output">
          <strong>예상 출력:</strong>
          <br />
          안녕하세요, 저는 소은입니다.
          <br />
          제가 좋아하는 음식은 연어입니다.
          <br />
          오늘 날짜는 2024. 12. 5.입니다.
        </p>
        <div className="code-editor">
          <h3>문제 2 답안 작성:</h3>
          <pre>
            {`import React from 'react';

const SoeunSecond = () => {
  const name = '소은'; // 여기에 이름 작성
  const favoriteFood = ''; // 여기에 좋아하는 음식 작성
  const today = new Date().toLocaleDateString('ko-KR');

  return (
    <>
      {/* 답안을 여기 작성하세요 */}
    </>
  );
};

export default SoeunSecond;
            `}
          </pre>
        </div>
        <button style={{cursor: 'pointer'}} onClick={() => setShowSecondQuestion(!showSecondQuestion)}>
          {showSecondQuestion ? '문제 2 닫기' : '문제 2 답안 보기'}
        </button>
        {showSecondQuestion && (
          <SecondQuestion onClose={() => setShowSecondQuestion(false)} />
        )}
      </div>
    </div>
  );
};

export default Soeun;
