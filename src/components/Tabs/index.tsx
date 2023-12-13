'use client';

import { Box, Tabs as MUITabs, Tab } from '@mui/material';
import { ReactNode } from 'react';
import CustomTabPanel from './CustomTabPanel';
import { createA11yProps } from './createA11yProps';
import { useTabs } from './useTabs';

export type TabData = {
  tabId: string;
  tabPanelId: string;
  label: string;
  children: ReactNode;
};

const Tabs = ({ tabsData }: { tabsData: Array<TabData> }) => {
  const { currentTabIndex, handleChange } = useTabs();

  return (
    <Box>
      <Box>
        <MUITabs
          value={currentTabIndex}
          onChange={handleChange}
          aria-label="Register and sign in form tabs"
        >
          {tabsData.map(({ label, tabId, tabPanelId }) => {
            return (
              <Tab
                key={tabId}
                label={label}
                {...createA11yProps(tabId, tabPanelId)}
              />
            );
          })}
        </MUITabs>
      </Box>

      {tabsData.map(({ tabPanelId, tabId, children }, index) => {
        return (
          <CustomTabPanel
            key={tabPanelId}
            index={index}
            currentTabIndex={currentTabIndex}
            aria-labelledby={tabId}
            id={tabPanelId}
          >
            {children}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

export default Tabs;
