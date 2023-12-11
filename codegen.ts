import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
        headers: { apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY },
      },
    },
  ],
  documents: 'src/api/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['yarn format'], // optional
  },
};

export default config;
