// 'use client';

// import CustomTabPanel from '@/components/Tabs/CustomTabPanel';
// import { useTabs } from '@/components/Tabs/useTabs';
// import { Box, Tab, Tabs } from '@mui/material';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';

// const tabsData = {
//   register: { tabId: 'register-tab', tabpanelId: 'register-tabpanel' },
//   login: { tabId: 'login-tab', tabpanelId: 'login-tabpanel' },
// };

// const FormTabs = () => {
//   const { currentTabIndex, handleChange } = useTabs();

//   return (
//     <Box>
//       <Box>
//         <Tabs
//           value={currentTabIndex}
//           onChange={handleChange}
//           aria-label="Register and login form tabs"
//         >
//           <Tab
//             label="Register"
//             id={tabsData.register.tabId}
//             aria-controls={tabsData.register.tabpanelId}
//           />
//           <Tab
//             label="Login"
//             id={tabsData.login.tabId}
//             aria-controls={tabsData.login.tabpanelId}
//           />
//         </Tabs>

//         <CustomTabPanel
//           index={0}
//           currentTabIndex={currentTabIndex}
//           aria-labelledby={tabsData.register.tabId}
//           id={tabsData.register.tabpanelId}
//         >
//           <RegisterForm />
//         </CustomTabPanel>

//         <CustomTabPanel
//           index={1}
//           currentTabIndex={currentTabIndex}
//           aria-labelledby={tabsData.login.tabId}
//           id={tabsData.login.tabpanelId}
//         >
//           <LoginForm />
//         </CustomTabPanel>
//       </Box>
//     </Box>
//   );
// };

// export default FormTabs;
