# Component-based UI with React

[Setting up Development Environment](#setting-up-development-environment) | [Build Components](#build-components) | [Review Basic React Patterns](#review-basic-react-patterns) | [ES6 Features](#es6-features) | [More Advanced React Patterns](#more-advanced-react-patterns) | [Integrate Components](#integrate-components) | [Eject The Application](#eject-the-application)

## Agenda

**[Setting up Development Environment](#setting-up-development-environment)**
  - [ ] CRA.
  - [ ] ESLint and Prettier in the IDE.
  - [ ] SCSS with React.
  - [ ] Storybook.

**[Build Components](#build-components)**
  - [ ] Design and build in isolation.
  - [ ] Add component to Storybook.
  - [ ] Component interface, accepting props and returning React elements.
  - [ ] Expected props and the type of data each represents.

**[Review Basic React Patterns](#review-basic-react-patterns)**
  - [ ] Review concepts from last week.
  - [ ] Components.
  - [ ] Props.
  - [ ] State.
  - [ ] Event Handlers.
  - [ ] Controlled Components.

**[ES6 Features](#es6-features)**
  - [ ] Object/array destructuring.
  - [ ] Spread operator.
  - [ ] Property shorthand.

**[More Advanced React Patterns](#more-advanced-react-patterns)**
  - [ ] Passing props with spread operator.
  - [ ] Passing actions down as props.
  - [ ] Lifting state up.
  - [ ] Creating a controlled list using `<ul>` with clickable `<li>`.

**[Integrate Components](#integrate-components)**
  - [ ] Combine components.
  - [ ] Actions from parent components.
  - [ ] Lifting state.

**[Eject The Application](#eject-the-applicatin)**
 - [ ] What is this? Why do we do it?
 - [ ] How to do it.
 - [ ] Implications.

## Setting up Development Environment

### CRA

Create React App (CRA) is a command line tool that helps you create a new React.js application with a single command. It sets up a comfortable development environment that uses Webpack, Babel, ESLint, and other tools.

Here is an example of creating a new app:

```bash
npx create-react-app my-app
```

### ESLint and Prettier in the IDE

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


### SCSS with React

SCSS (or SASS) is a CSS preprocessor that adds many useful features like variables, nesting, and mixins, among other things. It can be used in a React application by installing node-sass:

```bash
npm install node-sass
```

Then, you can import your .scss files into your component:

```jsx
import './MyComponent.scss';

const MyComponent = () => (
  <div className="my-component">
    Hello, World!
  </div>
);
```

### Storybook

Storybook is a tool for developing and testing UI components in isolation. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

To install Storybook, you can use the following command:

```bash
npx -p @storybook/cli sb init
```

After running the command, start Storybook by running:

```bash
npm run storybook
```

## Build Components

### Design and build in isolation

Designing and building components in isolation promotes component reusability and helps to maintain a clean codebase. This approach allows you to focus on one component at a time without worrying about how it will interact with the rest of your app. Tools like Storybook facilitate this process.

Here's an example of a simple React component that could be built in isolation:

```jsx
import React from 'react';

const MyComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default MyComponent;
```

### Adding to Storybook

This component could then be used in a Storybook story:

```jsx
import React from 'react';
import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const Default = () => <MyComponent title="Hello, World!" content="Lorem ipsum" />;
```

### Component Interface

The "interface" of a component refers to the props that it accepts. In our `MyComponent` example above, the interface is `props`.

```jsx
const MyComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);
```

Each prop has an implicit "type" of data that it represents. In this case, both `title` and `content` are expected to be strings.

### Expected props and the type of data each represents

Prop types are a way to enforce that components are used correctly, and can be especially helpful during development to catch potential issues. In our `MyComponent` example, we could add PropTypes like so:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MyComponent;
```

With this, if `MyComponent` is used without a `title` or `content`, or with props of the wrong type, a warning will be logged in the console.

### State

State allows React components to change their output over time in response to user actions, network responses, and anything else. We use the `useState` hook in functional components to handle state.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return <h1>{count}</h1>;
}
```

### Event Handlers

Event handlers are functions that are called in response to user interactions like clicks, key presses, etc.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

### Controlled Components

Controlled components have their state controlled by the component itself, rather than user input. This is often done with form elements.

```jsx
import { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return <input value={value} onChange={handleChange} />;
}
```

### ES6 Features

- **Object/Array Destructuring:** A handy feature that allows you to extract properties from an object or array.

```jsx
const person = { name: 'John Doe', age: 30 };
const { name, age } = person; // name = 'John Doe', age = 30

const array = ['first', 'second', 'third'];
const [first, second] = array; // first = 'first', second = 'second'
```

- **Spread Operator:** Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected.

```jsx
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // newArray = [1, 2, 3, 4, 5]
```

- **Property Shorthand:** If you want to create an object with properties that are currently in variables, you can use the shorthand syntax.

```jsx
const name = 'John Doe';
const age = 30;
const person = { name, age }; // equivalent to { name: name, age: age }
```

## Extend Concepts from Last Week

### Passing Props with Spread Operator

The spread operator can be used to pass the entire props object to a child component, such as the Item component in our case.

Without the spread operator:

```jsx
const List = () => {
  const item = {
    name: 'Item 1',
    description: 'This is the first item',
  };

  return <Item name={item.name} description={item.description} />;
};
```

With the spread operator:

```jsx
const List = () => {
  const item = {
    name: 'Item 1',
    description: 'This is the first item',
  };

  return <Item {...item} />;
};
```

### Passing Actions Down as Props

In React, data can flow down from parent to child components through props, including function props that handle events or actions.

Without passing actions down as props:

```jsx
const Button = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me!</button>;
};

const List = () => {
  return (
    <div>
      <Button />
      <p>This is a list component</p>
    </div>
  );
};
```

With passing actions down as props:

```jsx
const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Click me!</button>
);

const List = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Button handleClick={handleClick} />
      <p>This is a list component</p>
    </div>
  );
};
```

### Lifting State Up

When several components need to share and manipulate the same state, we can "lift the state up" to their closest common ancestor. In our case, it would be the List component.

Without lifting state up:

```jsx
const Item = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Item</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const List = () => {
  return (
    <div>
      <Item />
      <p>This is a list component</p>
    </div>
  );
};
```

With lifting state up:

```jsx
const Item = ({ count, handleClick }) => (
  <div>
    <p>Item</p>
    <p>Count: {count}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
);

const List = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Item count={count} handleClick={handleClick} />
      <p>This is a list component</p>
    </div>
  );
};
```

### Creating a Controlled List using `<ul>` with Clickable `<li>`

In our case, we can demonstrate a controlled list using the List and Item components.

```jsx
const Item = ({ item, selected, handleClick }) => (
  <li onClick={() => handleClick(item)} className={selected ? 'selected' : ''}>
    {item}
  </li>
);

const List = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item}
          item={item}
          selected={item === selectedItem}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return <List items={items} />;
};
```

In the above example, the List component maintains the selected item state and passes it to the Item components. Each Item component represents a clickable list item and receives the selected state and the handleClick function as props.

We can create a list in React where each list item `<li>` is controlled (clickable).

```jsx
import { useState } from 'react';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = item => setSelectedItem(item);

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul>
      {items.map(item => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
      <p>Selected Item: {selectedItem}</p>
    </ul>
  );
};
```

Certainly! Here's the updated checklist for the "Eject The Application" section with improved instructions and examples:

Certainly! Here's the revised version of the "Eject The Application" section with each checklist item as its own subheading:

### What is Ejecting and Why Do We Do It?

Ejecting a Create React App (CRA) project refers to the process of exposing and taking ownership of the underlying build configuration. It allows developers to have full control over the project's build tools and configurations. Some reasons for ejecting include the need for advanced customizations, integrating additional libraries, or modifying the build process to meet specific requirements.

### How to Eject the Application
To eject a CRA project, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of your React application.
3. Run the following command to eject your application:

   ```bash
   npm run eject
   ```

   This command triggers the ejection process, removing the single build dependency from the project. It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) into your project.

   > Note: Ejecting is a one-way operation and cannot be reversed. Before proceeding, ensure you commit your changes or create a new branch.

### Implications of Ejecting
Ejecting your application has several implications:

- **Full Control:** Once ejected, you'll have full control over the build configuration and dependencies. You can modify the configurations according to your needs.
- **Manual Maintenance:** Ejected projects require manual maintenance and configuration. You'll be responsible for keeping the build tools and configurations up to date.
- **Dependency Management:** With ejection, you'll need to manage the dependencies manually. This includes updating, adding, and removing dependencies as needed.
- **Loss of CRA Features:** Ejecting means losing the benefits of the Create React App's default configurations, updates, and optimizations. You'll need to handle those aspects yourself.

Make sure to carefully consider the implications before proceeding with the ejection process.