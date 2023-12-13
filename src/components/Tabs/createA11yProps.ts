export const createA11yProps = (tabId: string, tabPanelId: string) => {
  return {
    id: tabId,
    'aria-controls': tabPanelId,
  };
};
