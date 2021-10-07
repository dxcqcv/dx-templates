import { HashRouter as RouterContainer } from 'react-router-dom';
import React, { FC } from 'react';
import Router from '@/components/Router';

const Main: FC = () => {
  return (
    <>
      {
        <RouterContainer>
          <Router />
        </RouterContainer>
      }
    </>
  );
};

export default Main;
