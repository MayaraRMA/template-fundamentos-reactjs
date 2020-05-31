import styled, { css } from 'styled-components';

interface ContainerProps {
  routeMatch: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.routeMatch &&
    css`
      border-bottom: 2px solid #ff872c;
    `}

  padding-bottom: 10px;
  transition: opacity 0.2s;

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
