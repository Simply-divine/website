import styled from 'styled-components';

export const CardSliderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    /* Typical small screen device width */
    overflow-x: auto;
    padding: 5px;
  }
`;
