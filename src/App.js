import React, { useState } from 'react';
import { Viewport } from '@olivahouse/ui';
import '@olivahouse/ui/lib/styles.css';

import {
  MinimumHeightWarner,
  BackButtonDisabler,
  CloseWindowWarner,
  Form,
} from './modules';

const App = () => {
  const [step, setStep] = useState(0);

  const setStepWithBounds = (nextStep) => {
    const boundedStep = Math.max(0, Math.min(2, nextStep));

    setStep(boundedStep);
  };

  return (
    <Viewport isVisible>
      <MinimumHeightWarner />
      <BackButtonDisabler />
      <CloseWindowWarner step={step} />
      <Form setStep={setStepWithBounds} step={step} />
    </Viewport>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
