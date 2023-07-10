## ESLint and Prettier in the IDE

To make ESLint work with React JSX, you need to:

1. Install the necessary ESLint plugins for React.
2. Configure ESLint to understand the JSX syntax.

Here's how to do both of these:

### Installing Necessary Plugins

Firstly, you need to install the ESLint plugin for React. This plugin adds React specific linting rules to ESLint. If you're also using JSX, you'll need the ESLint plugin for JSX as well.

You can install these plugins using npm or yarn.

With npm:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-jsx-a11y
```

With yarn:

```bash
yarn add --dev eslint-plugin-react eslint-plugin-jsx-a11y
```

### Configuring ESLint to Understand JSX

Next, you need to modify your ESLint configuration to include these plugins and to allow JSX syntax. In your ESLint configuration file, add these lines:

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    /* Your existing rules */
  },
  "settings": {
    "react": {
      "version": "detect" // Automatically detect the react version
    }
  }
}
```

This configuration tells ESLint to use the installed plugins and to allow JSX syntax. In the `extends` array, `"plugin:react/recommended"` and `"plugin:jsx-a11y/recommended"` are the recommended configurations for these plugins. 

`"ecmaFeatures": { "jsx": true }` is needed for ESLint to recognize JSX syntax. 

The `"settings"` field is used by the React plugin to automatically detect and use the installed version of React.

Please note that the ESLint configuration file could be named `.eslintrc.json`, `.eslintrc`, or `eslint.config.js`, among others. The naming depends on the setup of your project.

To configure ESlint with prettier for your project run:

`npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev`

In order for it to be fully configured and allow for format on save, we need to configure a `.prettierrc` file. Here is an example:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid"
}
```

We can then add a few scripts to our package.json to lint our react projects:

```json
{
  "lint": "eslint 'src/**/*.{js,jsx}'",
  "lint:fix": "eslint 'src/**/*.{js,jsx}' --fix"
}
```