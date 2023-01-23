import styled from 'styled-components';

export const Container = styled.li`
  background: white;
  width: 32%;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TitleProduct = styled.h2`
  font-size: 16px;
  color: black;
  margin-bottom: 15px;
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.div`
  position: relative;
`;

export const ContainerProduct = styled.div`
  position: relative;
`;

export const ListPriceProduct = styled.h3`
  color: #d1d1d1;
  text-decoration: line-through;
  margin-bottom: 3px;
  font-size: 15px;
`;

export const BestPriceProduct = styled.h4`
  color: #fe4448;
  display: block;
  font-size: 16px;
  margin-bottom: 3px;
`;

export const InstallmentsPriceProduct = styled.span`
  font-size: 14px;

  .strong {
    font-weight: 700;
  }
`;

export const ContainerPrice = styled.div`
  height: 56px;
`;

export const ButtonBuyProduct = styled.button`
  width: 70%;
  background: #18776e;
  color: white;
  margin: 25px auto 0;
  display: block;
  height: 40px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;

  :hover {
    opacity: 0.7;
  }
`;

export const BuyProduct = styled.button`
  width: 70%;
  background: #55e000;
  margin: 25px auto 0;
  display: block;
  height: 40px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

export const ButtonWishlist = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  :hover {
    opacity: 0.5;
  }
`;