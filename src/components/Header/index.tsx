import React from 'react';

import MenuLink from '../MenuLink';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <MenuLink to="/" label="Listagem" activeOnlyWhenExact />
          <MenuLink to="/import" label="Importar" />
        </nav>
      </header>
    </Container>
  );
};

export default Header;
