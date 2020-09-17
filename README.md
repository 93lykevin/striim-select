This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start the project, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Usage Examples:
The Select component can take an array of strings or an array of objects.
The objects must have a key named "label".

```
const options = ["chocolate", "strawberry", "mango", "cherry", "blueberry"];

const optionsObjs = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];


    <div>
        <Select options={options}></Select>
    </div>
```

    OR

```
    <div>
        <Select options={optionsObj}></Select>
    </div>
```
