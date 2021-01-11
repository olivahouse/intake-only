import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { Subheading } from '@olivahouse/ui';

import orientation from './orientation.png';
import styles from './styles.module.css';

export const Component = () => {
  const [isTooSmall, setIsTooSmall] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleClickDismiss = () => setIsDismissed(true);

  const handleResize = useCallback(
    debounce(() => {
      setIsDismissed(false);

      setIsTooSmall(window.innerWidth > 500 && window.innerHeight < 500);
    }, 100),
    [setIsDismissed, setIsTooSmall]
  );

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div
      className={`${styles.container} ${
        !isDismissed && isTooSmall && styles.visible
      }`}
    >
      <img alt="portrait-mode" src={orientation} />
      <Subheading>This website works best in portrait mode</Subheading>
      <p onClick={handleClickDismiss}>Use it anyway</p>
    </div>
  );
};

Component.displayName = 'MinimumHeightWarner';
