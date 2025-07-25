import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise,
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // Imitate StandardJS rules
      'no-var': 'error',
      'prefer-const': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'only-multiline'],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'space-before-function-paren': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],

      // Recommended React and Promise/Import/N plugins
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
