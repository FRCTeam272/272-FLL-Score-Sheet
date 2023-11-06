import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const StickyDiv = styled.div`
  background-color: darkgreen;
  color: white;
  padding: 1rem;
  position: sticky;
  bottom: 0;   
`;

export const ContentDiv = styled.div`
  padding: 1rem;
`;