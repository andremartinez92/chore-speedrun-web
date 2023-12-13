import { ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  currentTabIndex: number;
  id: string;
  'aria-labelledby': string;
};

const CustomTabPanel = ({
  children,
  index,
  currentTabIndex,
  ...props
}: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={currentTabIndex !== index} {...props}>
      {currentTabIndex === index && children}
    </div>
  );
};

export default CustomTabPanel;
