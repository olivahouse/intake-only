import React from 'react';

import { SplashMessage } from '../SplashMessage';
import { SurveySparrow } from '../SurveySparrow';
import { Thanks } from '../Thanks';

import { Pane } from './Pane';
import styles from './styles.module.css';

export const Component = ({ step, setStep }) => {
  const handleFinishSplashScreen = () => {
    setStep(1);
  };

  const handleSubmitSurveySparrow = () => {
    setStep(2);
  };

  return (
    <div className={styles.container}>
      <Pane showOnStep={0} step={step}>
        <SplashMessage onFinish={handleFinishSplashScreen} />
      </Pane>
      <Pane showOnStep={1} step={step}>
        <SurveySparrow onSubmit={handleSubmitSurveySparrow} />
      </Pane>
      <Pane showOnStep={2} step={step}>
        <Thanks />
      </Pane>
    </div>
  );
};

Component.displayName = 'Form';
