import React from 'react';
import { Paragraph } from '@olivahouse/ui';

import styles from './styles.module.css';

export const Component = () => (
  <div className={styles.container}>
    <Paragraph>Thanks!</Paragraph>
    <Paragraph>Your answers were sent safely and securely.</Paragraph>
    <Paragraph>
      We’ll be in touch to remind you about your session. You don’t need to
      prepare anything, so relax and know that you’re in good hands.
    </Paragraph>
    <Paragraph>
      In the meantime you can{' '}
      <a href="https://www.instagram.com/mind.chronicles/">
        read stories from people like you
      </a>
      .
    </Paragraph>
  </div>
);

Component.displayName = 'Thanks';
