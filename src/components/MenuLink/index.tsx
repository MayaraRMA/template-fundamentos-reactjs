import React, { useState, useCallback } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

interface MenuProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

const MenuLink: React.FC<MenuProps> = ({
  label,
  to,
  activeOnlyWhenExact,
}: MenuProps) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Container routeMatch={!!match}>
      <Link to={to}>{label}</Link>
    </Container>
  );
};

export default MenuLink;
