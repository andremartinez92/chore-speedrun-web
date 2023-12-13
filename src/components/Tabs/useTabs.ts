'use client';

import { SyntheticEvent, useState } from 'react';

export const useTabs = (startingIndex: number = 0) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(startingIndex);

  const handleChange = (_event: SyntheticEvent, newTabIndex: number) => {
    setCurrentTabIndex(newTabIndex);
  };

  return { currentTabIndex, handleChange };
};
