# Component-based UI with React

## Setting up Development Environment
- [ ] ESLint and Prettier in the IDE.
- [ ] CRA.
- [ ] SCSS with React.
- [ ] Storybook.

## Build Components

- [ ] Design and build in isolation.
- [ ] Component interface, accepting props and returning React elements.
- [ ] Expected props and the type of data each represents.

## Review Basic React Patterns

- [ ] Passing props
- [ ] Looping pattern
- [ ] Passing children with JSX
- [ ] Handling DOM events
- [ ] Managing state
- [ ] Controlled inputs
- [ ] Conditional rendering
- [ ] Fragments
- [ ] ES6 features including:
  - [ ] object/array destructuring
  - [ ] spread operator
  - [ ] property shorthand

## Integrate Components

- [ ] Combine components.
- [ ] Actions from parent components.
- [ ] Lifting state.

## Eject The Application

- [ ] If time permits, show how to eject the application to take ownership of the build configuration.
- [ ] Create a new branch, eject and show that it can't be reversed.

## Setting up Development Environment

### ESLint and Prettier in the IDE

ESLint and Prettier are key tools for maintaining high-quality, consistent JavaScript code. ESLint helps catch errors and enforce coding conventions, while Prettier formats code for consistent styling. 

Here is an example of installing ESLint and Prettier in a project:

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

Then, in your `.eslintrc` configuration file, you can extend `prettier` to apply the rules.

```json
{
  "extends": ["prettier"]
}
```

### CRA

Create React App (CRA) is a command line tool that helps you create a new React.js application with a single command. It sets up a comfortable development environment that uses Webpack, Babel, ESLint, and other tools.

Here is an example of creating a new app:

```bash
npx create-react-app my-app
```

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

The spread operator can be used to pass the entire props object to a child component.

```jsx
const Person = (props) => (
  <div>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
  </div>
);

const App = () => {
  const person = {
    name: 'John Doe',
    age: 30,
  };

  return <Person {...person} />;
};
```

### Passing Actions Down as Props

In React, data can flow down from parent to child components through props, and this includes function props which can be used to handle events or execute any other actions.

```jsx
import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>Click me!</button>
);

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <Button handleClick={incrementCount} />
      <p>You clicked {count} times</p>
    </div>
  );
};
```

### Lifting State Up

When several components need to share and manipulate the same state, we can "lift the state up" to their closest common ancestor. 

```jsx
import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>Increment</button>
);

const Display = ({ count }) => <p>You clicked {count} times</p>;

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <Button handleClick={incrementCount} />
      <Display count={count} />
    </div>
  );
};
```

### Creating a Controlled List using `<ul>` with Clickable `<li>`

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

In the above code, we maintain a `selectedItem` state, which is updated whenever a list item is clicked. The selected item is also displayed on the screen.