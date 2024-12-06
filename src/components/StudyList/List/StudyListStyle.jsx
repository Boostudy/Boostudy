import styled from 'styled-components';

export const PageWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  color: #333;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    color: #007acc;
  }

  span {
    font-size: 2rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    color: #007acc;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 15px;
    color: #444;
  }

  p {
    line-height: 1.6;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }
`;

export const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  color: #ffffff;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 30px;

  p {
    font-size: 1rem;
  }
`;

export const LinkButton = styled.a`
  color: #007acc;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
