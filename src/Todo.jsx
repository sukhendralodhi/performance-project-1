import { useState } from "react";
import { data } from "./data";
import Form from "./Form";
import List from "./List";

const Todo = () => {
    const [people, setPeople] = useState(data);

    const addPerson = (name) => {
        const fakeId = Date.now();
        const newPerson = { id: fakeId, name };
        setPeople([...people, newPerson]);
    }
    // console.log(people);
    return (
        <section>
            <Form addPerson={addPerson} />
            <List people={people} />
        </section>
    );
}

export default Todo;