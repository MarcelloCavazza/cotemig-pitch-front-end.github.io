import styled from "styled-components";
import colors from "../../../global-styles/colors";

const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  
  & .team-container {
    width: 90vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${colors.logoGreenOne},
      ${colors.logoGreenTwo}
    );
    clip-path: circle(35% at right 90%);
    z-index: -1;
    overflow: visible;
  }
`;

export default Section;
