import styled from 'styled-components';

export const ImageCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
  ${({ index }) =>
    index % 2 !== 0 &&
    `
    flex-direction: row-reverse;
  `}

  @media only screen and (max-width: 600px) {
    flex-direction: column !important;
    align-items: center;
  }
`;

export const Image = styled.div`
  flex: 1 1 auto;
  max-height: 60vh;
  max-width: 40vw;
  margin-right: 20px;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    width: 80vw;
    max-width: 100vw;
    margin-right: 0;
  }
`;

export const CardContent = styled.div`
  flex: 1 1 auto;
  margin-left: 0;
  max-height: 60vh;
  max-width: 40vw;
  justify-content: center;
  background-color: #f7f6f2;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  border-radius: 20px;
  align-items: center;

  .tagline {
    font-weight: bolder;
    font-size: small;
    color: #50be77;
    margin-bottom: 0;
  }

  .price {
    font-size: small;
    margin-bottom: 0;
  }

  .explore-btn {
    border-radius: 10px;
    color: #50be77;
    background-color: #f7f6f2;
    border: 1px solid green;
    height: 50px;
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 80vw;
    max-width: 100vw;
    margin-right: 0;
    padding: 10px;
    margin-top: 2px;
  }
`;
