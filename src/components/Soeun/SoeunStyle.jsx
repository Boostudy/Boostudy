import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  white-space: pre-line;
  color: #121212;
  min-height: 100vh;
  letter-spacing: 2px;
  cursor: text;
  user-select: text;
`;

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "-270px")};
  width: 250px;
  height: 100%;
  background-color: #121212;
  padding: 120px 20px;
  border-right: 1px solid #333;
  z-index: 100;
  transition: left 0.3s ease;
  overflow-y: auto;
`;

export const SidebarItem = styled.button`
  display: block;
  width: 100%;
  background-color: ${({ $isActive }) => ($isActive ? "#333" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#aaa" : "#fff")};
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #2a2f35;
    color: #fff;
  }
`;

export const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #141a1f;
  border-radius: 10px;
  position: fixed;
  top: 60px;
  left: 10px;
  z-index: 1000;
  cursor: pointer;

  .menu-icon {
    width: 30px;
  }

  &:hover {
    background-color: #333;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 1.7;
  padding: 10px;
  border-left: 4px solid #75b6fb;
  margin-bottom: 20px;
  background-color: #eee;
  border-radius: 4px;
`;

export const SubsectionContainer = styled.div`
  margin-top: 25px;
`;

export const SubsectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #222;
`;

export const SubsectionContent = styled.p`
  font-size: 16px;
  line-height: 1.65;
  margin-bottom: 25px;
  background-color: #eee;
  border-radius: 5px;
  color: #000;
  padding: 10px;
`;

export const AnswerButton = styled.button`
  background-color: #75b6fb;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 15px 0;

  &:hover {
    background-color: #9ccdfd;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #1c2329;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    color: #60e6f2;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: #60e6f2;
    }
  }
`;

export const CodeEditor = styled.div`
  background-color: #272822;
  color: #f8f8f2;
  padding: 20px;
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  overflow-x: auto;
`;

export const SidebarStickyContainer = styled.div`
  position: sticky;
  top: 0; 
  z-index: 110; 
  background-color: #121212;
  padding-top: 20px; 
`;