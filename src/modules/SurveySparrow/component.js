import React, { useEffect, useCallback } from 'react';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

export const Component = ({ onSubmit }) => {
  const handleMessage = useCallback(
    (event) => {
      if (!event || !event.data) return;

      if (event.data.type === 'surveyCompleted') {
        onSubmit();
        return;
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const src = getSrc();

  return (
    <div className={styles.container}>
      <iframe
        allowFullScreen=""
        id="ss_widget_frame"
        src={src}
        title="questionnaire"
      ></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
