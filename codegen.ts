import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://strapi.12thwonder.com/graphql',
	documents: 'src/**/*.ts',
	generates: {
		'src/lib/gql/': {
			preset: 'client',
			plugins: [],
      presetConfig: {
     
        fragmentMasking: false
      },
			config: {
				useTypeImports: true,
        fragmentMasking: false

			}
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};

export default config;
