import styled, { createGlobalStyle } from "styled-components";

// Colors used across the score sheet
const green = "#1f7a3a";
const darkGreen = "#14532d";
const lightGreen = "#e8f5ec";
const border = "#d4ddd7";
const text = "#1b2620";
const muted = "#5b6b61";

// System fonts only, so no font files are downloaded
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f3f6f4;
    color: ${text};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: ${darkGreen};
  color: white;
  padding: 0.75rem 1rem;

  h1 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

export const ContentDiv = styled.main`
  flex: 1;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Card = styled.section`
  background: white;
  border: 1px solid ${({ $scored }) => ($scored ? green : border)};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  h2 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

export const Points = styled.span`
  flex-shrink: 0;
  min-width: 3rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  text-align: center;
  font-weight: 700;
  background: ${({ $scored }) => ($scored ? green : lightGreen)};
  color: ${({ $scored }) => ($scored ? "white" : muted)};
`;

export const HelpText = styled.p`
  margin: 0.5rem 0 0;
  color: ${muted};
  font-size: 0.9rem;
`;

export const PhotoToggle = styled.details`
  margin-top: 0.5rem;

  summary {
    cursor: pointer;
    color: ${green};
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.25rem 0;
  }

  img {
    display: block;
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-top: 0.5rem;
    border-radius: 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0;
  display: grid;
  gap: 0.5rem;
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 48px;
  padding: 0.6rem 0.75rem;
  border: 2px solid ${({ $checked }) => ($checked ? green : border)};
  border-radius: 10px;
  background: ${({ $checked }) => ($checked ? green : "white")};
  color: ${({ $checked }) => ($checked ? "white" : text)};
  cursor: pointer;
  user-select: none;

  &:focus-within {
    outline: 3px solid #86c79a;
    outline-offset: 2px;
  }
`;

export const Mark = styled.span`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ $checked }) => ($checked ? "white" : border)};
  border-radius: ${({ $round }) => ($round ? "50%" : "6px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const OptionText = styled.span`
  flex: 1;
`;

export const OptionPoints = styled.span`
  flex-shrink: 0;
  font-weight: 700;
`;

export const StickyDiv = styled.footer`
  position: sticky;
  bottom: 0;
  background: ${darkGreen};
  color: white;
  padding: 0.75rem 1rem;
  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
`;

export const Total = styled.div`
  font-size: 1.1rem;

  strong {
    font-size: 2rem;
    margin-left: 0.5rem;
  }
`;

export const ClearButton = styled.button`
  min-height: 44px;
  padding: 0 1.25rem;
  border: 2px solid white;
  border-radius: 10px;
  background: transparent;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
