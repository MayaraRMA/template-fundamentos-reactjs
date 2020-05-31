import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  routeMatch: boolean;
}

export const appearFromLeft = keyframes`
  from {
    border-bottom: 2px solid transparent;
  }

  to {
    border-bottom: 2px solid #ff872c;
  }
`;

export const Container = styled.div<ContainerProps>`
  border-bottom: 2px solid transparent;
  padding-bottom: 10px;
  transition: all 0.2s;
  ${props =>
    props.routeMatch &&
    css`
      animation: ${appearFromLeft} 0.8s;
      border-bottom: 2px solid #ff872c;
    `}
  & + div {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
`;
