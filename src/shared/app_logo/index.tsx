import React from 'react';
import './style.scss';
import { ReactComponent as CryptIcon } from '../../assets/logos/Icon - Dark.svg';

interface AppLogoProps {
    className: string;
}

export default function AppLogo(props: AppLogoProps): JSX.Element {
  return (
    <CryptIcon />
  );
}