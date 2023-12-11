'use client';
import { Auth } from '@supabase/auth-ui-react';
import { SupabaseClient } from '@supabase/supabase-js';
import { createContext, ReactNode, useContext } from 'react';
import { supabase } from './supabase';

const SupabaseClientContext = createContext<SupabaseClient | null>(null);

export function SupabaseProvider(props: { children: ReactNode }) {
  return (
    <SupabaseClientContext.Provider value={supabase}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        {props.children}
      </Auth.UserContextProvider>
    </SupabaseClientContext.Provider>
  );
}

export function useSupabaseClient(): SupabaseClient {
  const client = useContext(SupabaseClientContext);
  if (client === null) {
    throw new Error(
      'Supabase client not provided via context.\n' +
        'Did you forget to wrap your component tree with SupabaseProvider?'
    );
  }
  return client;
}
