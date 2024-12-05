import React from 'react';
import './Main.css'; 
import Logo from '../../../src/assets/icon/logo.svg';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1 className="main-title">부스트 덕성 스터디 페이지입니다.</h1>
      <img 
        src={Logo}
        alt="부스트 로고"
        className="main-image"
      />
    <button 
        className="main-button" 
        onClick={() => navigate('/studylist')} 
      >
        StudyList로 이동
      </button>
    </div>
  );
};

export default Main;
