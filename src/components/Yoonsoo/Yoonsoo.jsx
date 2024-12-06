import React, { useState } from "react";
import * as I from "../Soeun/SoeunStyle";
import openIcon from "../../assets/icon/open.svg";
import closeIcon from "../../assets/icon/close.svg";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";

const sections = [
  {
    id: "study1",
    title: "스터디 1",
    content: "리액트와 JSX",
    subsections: [
      {
        id: "problem1",
        title: "문제 1: 컴포넌트 작성",
        content: `1. 자신의 이름 출력
        2. 좋아하는 음식 출력
        3. 현재 날짜를 출력`,
        answerTemplate: `import React from 'react';

const Problem1 = () => {
  return (
    <>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </>
  );
};

export default Problem1;`,
        component: FirstQuestion,
      },
      {
        id: "problem2",
        title: "문제 2: 문제 1 확장 문제",
        content: `1. 이름과 좋아하는 음식을 변수에 저장하고 JSX 내부에서 출력하도록 수정하세요.
        2. toLocaleDateString() 메서드를 사용해 현재 날짜를 지역 형식으로 출력하세요.`,
        answerTemplate: `import React from 'react';

const Problem2 = () => {

  return (
    <>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </>
  );
};

export default Problem2;`,
        component: SecondQuestion,
      },
    ],
  },
  {
    id: "study2",
    title: "스터디 2 - 추가 페이지",
    content: "추가 페이지 내용입니다.",
  },
];

const Yoonsoo = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  const currentSection = sections.find((section) => section.id === activeSection);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openModal = (Component) => {
    setCurrentComponent(() => Component);
    setShowModal(true);
  };
  

  const closeModal = () => {
    setShowModal(false);
    setCurrentComponent(null);
  };

  return (
    <>
      <I.MenuToggle onClick={toggleMenu}>
        <img src={isMenuOpen ? closeIcon : openIcon} alt="Toggle Menu" className="menu-icon" />
      </I.MenuToggle>

      <I.Container>
        <I.Sidebar $isMenuOpen={isMenuOpen}>
          <I.SidebarStickyContainer>
            {sections.map((section) => (
              <I.SidebarItem
                key={section.id}
                $isActive={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </I.SidebarItem>
            ))}
          </I.SidebarStickyContainer>
        </I.Sidebar>

        <I.Content>
          <I.Title>{currentSection.title}</I.Title>
          <hr />
          <I.Description>{currentSection.content}</I.Description>

          {currentSection.subsections && (
            <I.SubsectionContainer>
              {currentSection.subsections.map((subsection) => (
                <div key={subsection.id}>
                  <I.SubsectionTitle>{subsection.title}</I.SubsectionTitle>
                  <I.SubsectionContent>{subsection.content}</I.SubsectionContent>
                  <I.CodeEditor>
                    <pre>{subsection.answerTemplate}</pre>
                  </I.CodeEditor>
                  <I.AnswerButton onClick={() => openModal(subsection.component)}>
                    실습 컴포넌트 열기
                  </I.AnswerButton>
                </div>
              ))}
            </I.SubsectionContainer>
          )}
        </I.Content>
      </I.Container>

      {showModal && currentComponent && 
  React.createElement(currentComponent, { onClose: closeModal })
}


    </>
  );
};

export default Yoonsoo;
