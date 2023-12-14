export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Chore: {
        Row: {
          created_at: string;
          id: string;
          is_completed: boolean;
          is_priority: boolean;
          last_completed_at: string | null;
          name: string;
          profile_id: string;
          recurring_days: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          is_priority?: boolean;
          last_completed_at?: string | null;
          name: string;
          profile_id?: string;
          recurring_days: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          is_priority?: boolean;
          last_completed_at?: string | null;
          name?: string;
          profile_id?: string;
          recurring_days?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'Chore_profile_id_fkey';
            columns: ['profile_id'];
            isOneToOne: false;
            referencedRelation: 'Profile';
            referencedColumns: ['id'];
          }
        ];
      };
      Event: {
        Row: {
          chore_id: string;
          created_at: string;
          id: string;
          name: string;
          profile_id: string;
        };
        Insert: {
          chore_id: string;
          created_at?: string;
          id?: string;
          name: string;
          profile_id?: string;
        };
        Update: {
          chore_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          profile_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Event_chore_id_fkey';
            columns: ['chore_id'];
            isOneToOne: false;
            referencedRelation: 'Chore';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'Event_profile_id_fkey';
            columns: ['profile_id'];
            isOneToOne: false;
            referencedRelation: 'Profile';
            referencedColumns: ['id'];
          }
        ];
      };
      Profile: {
        Row: {
          id: string;
          updated_at: string | null;
          username: string;
        };
        Insert: {
          id: string;
          updated_at?: string | null;
          username: string;
        };
        Update: {
          id?: string;
          updated_at?: string | null;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Profile_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      Record: {
        Row: {
          created_at: string;
          event_id: string;
          id: string;
          profile_id: string;
          time: number;
        };
        Insert: {
          created_at?: string;
          event_id: string;
          id?: string;
          profile_id?: string;
          time: number;
        };
        Update: {
          created_at?: string;
          event_id?: string;
          id?: string;
          profile_id?: string;
          time?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'Record_event_id_fkey';
            columns: ['event_id'];
            isOneToOne: false;
            referencedRelation: 'Event';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'Record_profile_id_fkey';
            columns: ['profile_id'];
            isOneToOne: false;
            referencedRelation: 'Profile';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
