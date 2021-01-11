import React from 'react';
import { Button, Paragraph } from '@olivahouse/ui';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => (
  <div className={styles.container}>
    <h1 className={styles.logo}>Oliva</h1>
    <div style={{ height: '40px' }} />
    <Paragraph>
      In the next few minutes, we'll ask you to answer a few questions about how
      you've been feeling.
    </Paragraph>
    <Paragraph>
      Talking about personal stuff isn't always easy, so we really appreciate
      your openness. It will help us prepare for your first session.
    </Paragraph>
    <Paragraph>
      Your answers will be stored anonymously and will be 100% confidential
      between you and your therapist.
    </Paragraph>
    <div style={{ height: '20px' }} />
    <Button isCentered onClick={onFinish}>
      Start questions
    </Button>
  </div>
);

Component.displayName = 'SplashMessage';
