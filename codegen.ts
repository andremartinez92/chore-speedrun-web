import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'data/schema.graphql',
  documents: 'src/api/**/*.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
