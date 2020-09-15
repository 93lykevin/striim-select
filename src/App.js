import React from "react";
import "./App.css";
import Select from "./select";
// import Select from "../../select-module-kevin-ly/src/select";

// give array string OR object as the options to Select component
const options = ["chocolate", "strawberry", "mango", "cherry", "blueberry"];
const optionsObjs = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function App() {
    return (
        <div className="App">
            <Select options={options}></Select>
        </div>
    );
}

export default App;
