import React from 'react';
import './style.scss'

interface AppTitleProps {
    className?: string;
}

export default function AppTitle(props: AppTitleProps): JSX.Element {
  return (
    <text className={'app_title'}>
      Crypt
    </text>
  );
}