declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_B4A_APP_ID: string;
      EXPO_PUBLIC_B4A_JS_KEY: string;
      EXPO_PUBLIC_B4A_CLIENT_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
