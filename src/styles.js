// create and export styled components along with the animation and theming
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    primary: "#03045e",
    secondary: "#caf0f8",
    tertiary: "#023e8a",
    quaternary: "#fff"
  },
  fonts: {
    primary: "helvetica"
  },
  fontSize: {
    primary: "20px",
    secondary: "14px"
  }
};

export const LogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CardWrapper = styled.div`
  background: ${(props) => props.theme.colors.quaternary};

  width: 260px;
  height: 370px;
  background: #fff;
  border-radius: 6px;
  padding-bottom: 5px;
  @media (max-width: 900px) {
    width: 300px;
    height: 340px;
  }
`;

export const ImageContaner = styled.div`
  height: 30vh;
  width: auto;
  overflow: hidden;
`;

export const ImageWrapper = styled.img`
  width: 120%;
  height: 100%;
  border-radius: 4px 4px 10px 20px;
  text-align: center;

  &:hover {
    width: 140%;
    height: 120%;
    transition: 1.2s;
  }
`;

export const TextWrapper = styled.div`
  padding: 10px;
  height: 50px;
`;

export const TitleWrapper = styled.h2`
  font-size: ${(props) => props.theme.fontSize.primary};

  margin: 0;
  font-size: 20px;
  color: #825641ff;
`;

export const DescriptionWrapper = styled.h3`
  font-size: ${(props) => props.theme.fontSize.secondary};
  color: ${(props) => props.theme.colors.tertiary};

  margin-top: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #4c4d4f;
`;

export const ActionsWrapper = styled.div`
  margin-left: 10px;
  padding: 10px 0;
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  margin-right: 10px;
  margin-top: 4px;
  border: 0;
  border-radius: 4px;
  padding: 10px 0px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  background-color: #273f4bff;
  color: white;

  &:hover {
    background-color: #153342;
    color: #ffffff;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  background-color: #1d333eff;
  color: #ffffff;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  background-color: #ffffff;
  color: #1d333eff;
  border: 1px solid #1d333eff;
`;
