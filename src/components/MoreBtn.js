import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  margin: 24px auto;
  width: 180px;
  height: 48px;
  background: #ffffff;
  border-radius: 28px;
  border: 2px solid #9706ed;
  font-family: "GmarketSansmedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 47px;
  align-items: center;
  text-align: center;
  color: #2d2d2d;
`;

function MoreBtn({ mbtiType, text, onclick }) {
  const onClickBtn = () => {
    {
      return <>{}</>;
    }
  };

  return <Button onClick={onClickBtn}>{text}</Button>;
}

export default MoreBtn;
