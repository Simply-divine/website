import styled from 'styled-components';

export const CardWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-color: #fef4f2;
  border-radius: 10px;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    /* Typical small screen device width */
    width: 95%;
    flex: none;
    max-width: 100%;
    margin-left: 0;
  }
`;

export const CardImage = styled.div`
  /* min-height: 400px; */
  flex: 1 1 auto;
  max-height: 70vh;
  img {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 20px;
  }
`;

export const CardContent = styled.div`
  flex: 0 1 auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

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

  .add-to-cart-btn {
    margin: 2px 2px 10px 2px;
    border-radius: 25px;
    color: #50be77;
    background-color: white;
    border: 1px solid green;
    height: 50px;
  }
`;
