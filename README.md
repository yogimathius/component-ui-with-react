# Component-based UI with React
This README outlines the lecture agenda and concepts that will be covered in our live-coding session. Please use this as a reference to help guide your learning throughout the session.

## Agenda
- [ ] **Review concepts from last week:**
    - [ ] Components
    - [ ] Props
    - [ ] State
    - [ ] Event Handlers
    - [ ] Controlled Components
    - [ ] ES6 features including:
      - [ ] object/array destructuring
      - [ ] spread operator
      - [ ] property shorthand

- [ ] **Extend concepts from last week:**
    - [ ] passing props with spread operator
    - [ ] passing actions down as props
    - [ ] lifting state up
    - [ ] creating a controlled list using `<ul>` with clickable `<li>`

- [ ] **Storybook:**
    - [ ] How Storybook is used to test a React component
    - [ ] Storybook index.js file

- [ ] **React Dev Tools**

## Review Concepts from Last Week

### Components

Components are the building blocks in React. They allow you to create reusable pieces of code. Components can be either functional or class-based, but we will focus on functional components.

```jsx
// Functional Component
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

### Props

Props (short for properties) are a way of passing data from parent to child components.

```jsx
const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// Use the component
<Welcome name="John Doe" />
```

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

## Storybook

Storybook is a tool for developing and testing UI components in isolation. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

### How Storybook is used to test a React component

With Storybook, you can visualize different states of your UI components and develop them interactively.

Storybook provides a sandbox to build UI components in isolation so you can develop hard-to-reach states and edge cases.

Here's a simple example of a Storybook story:

```jsx
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
```

The `Text` and `Emoji` components are two "stories" that render the `Button` component in two different states: with text and with emojis.

The `action('clicked')` function allows you to simulate and test a user clicking on the button.

### Storybook index.js file

In a typical Storybook setup, the `index.js` file serves as the entry point for your stories. Each story file provides a set of stories that describe a React component, and they are automatically added to the Storybook.

Here's an example of an `index.js` file:

```jsx
// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
```

In the above configuration, Storybook will load any file that ends with `.stories.js` as a story. This allows you to colocate your stories with your source files if you wish.

The `addons` field is used to specify which Storybook addons you want to use with your project. In this case, we're using the `@storybook/preset-create-react-app` for easy setup with Create React App, the `@storybook/addon-actions` to log actions (user interactions) in the Storybook UI, and the `@storybook/addon-links` to enable linking between stories.