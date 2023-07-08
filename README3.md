Certainly, I've revised and formatted your content below. Hopefully, it's now more aligned with your preference:

# M07-W17 | Component-Based UI with React

## Topics Covered

1. Recap on React and Component-Based UIs
2. Managing Lists Using Controlled Components
3. Advanced JSX Syntax
4. React Developer Tools
5. Introduction to Storybook

### 1. Recap: React and Declarative UI Frameworks

- **What**: Developers describe **what** to render, rather than detailing **how** to do it.
- **When**: React determines **when** to render, the developer does not control this directly.
- **Asynchrony**: React's rendering process is not synchronous upon data changes.
- **Data Ownership**: This is a key concept in understanding React. Components own their state data and pass it down to child components as needed.

### 2. Advanced JSX Syntax

#### Fragment

```jsx
// The <></> syntax is shorthand for React.Fragment, allowing us to group multiple elements without adding an extra node to the DOM
export default function CarListItem() {
  return (
    <>
      <h5>Model: F-150</h5>
      <div>Make: Ford</div>
      <div>Price: $5000</div>
    </>
  )
}
```

#### JSX Element Child Array

```jsx
function CarList() {
  const cars = [
    { model: 'F-150', make: 'Ford', price: 5000 },
    { model: 'Corolla', make: 'Toyota', price: 5000}
  ]

  const carDisplay = cars.map(car => (
    <div key={car.model}>
      <h5>Model: {car.model}</h5>
      <p>Make: {car.make}</p>
      <p>Price: ${car.price}</p>
    </div>
  ));

  return (
    <>
      {carDisplay}
    </>
  );
}
```

#### Props Spreading

```jsx
const car = { id: 1, model: 'F-150', make: 'Ford', price: 5000 }

// Without props spreading
<CarListItem key={car.id} model={car.model} make={car.make} price={car.price} />

// With props spreading
<CarListItem key={car.id} {...car} />
```

#### Props Destructuring

```jsx
// Without destructuring, you have to access properties from the props object
export default function CarListItem(props) {
  return (
    <div key={props.model}>
      <h5>Model: {props.model}</h5>
      <p>Make: {props.make}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}

// With destructuring, you can directly access the props values
export default function CarListItem({id, model, make, price}) {
  return (
    <div key={id}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
    </div>
  )
}
```

#### Conditional Rendering

```jsx
let button;
if (status === 'AVAILABLE') {
  button = <button onClick={() => { onStatusChange(id, 'SOLD') }}>Mark As Sold</button>
} else {
  button = null
}

return {button}
```
Or using inline `IF` with `&&` operator:
```jsx
{status === 'AVAILABLE' && <button onClick={() => { onStatusChange(id, 'SOLD') }}>Mark As Sold</button>}
```

### 3. Component Data Communication

#### Parent to Child

```jsx
// Parent Component
export default function CarList () {
  const cars = [
    { id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'SOLD' },
    { id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ]

  const carDisplay = cars.map(car => <CarListItem key={car.id} {...car} />)

  return <>{carDisplay}</>;
}
```

#### Child to Parent

```jsx
// Parent Component
const onStatusChangeHandler = (id, status) => {
  const newState = cars.map(car => car.id === id ? {...car, status} : car);
  setCars(newState);
};

const carDisplay = cars.map(car => <CarListItem key={car.id} {...car} onStatusChange={onStatusChangeHandler}/>);

// Child Component
export default function CarListItem({id, model, make, price, status, onStatusChange}) {
  return (
    <div key={id}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
      {status === 'AVAILABLE' && <button onClick={() => onStatusChange(id, 'SOLD')}>Mark As Sold</button>}
    </div>
  )
}
```

#### Data Flow Between Siblings

- Data flow between sibling components must be managed through their closest shared parent.

### 4. Controlled Inputs

```jsx
export default function CarList() {
  const [contact, setContact] = useState('8881234567');

  return (
    <>
      <p>The contact is {contact}</p>
      <input value={contact} onInput={(e) => setContact(e.target.value)} />
    </>
  )
}
```

### 5. Storybook

- Storybook allows you to build UI components in **isolation**.
- It supports various libraries, not just React.
- Offers multiple syntaxes and is highly customizable.
- Check out the [official website](https://storybook.js.org/) for more information and resources.
