import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const CardSection = styled(Flex)`
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ direction }) => direction};

  img {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
