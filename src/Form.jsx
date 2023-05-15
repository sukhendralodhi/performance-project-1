/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ addPerson }) => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Please enter a name');
            return;
        }
        addPerson(name);
        setName('');
    }
    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name" className="form-label"></label>
                <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button className="btn btn-block" type="submit">Add Person</button>
        </form>
    );
}

export default Form;