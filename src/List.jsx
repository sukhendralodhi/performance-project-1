/* eslint-disable react/prop-types */
import Person from "./Person";

// eslint-disable-next-line react/prop-types
const List = ({ people }) => {
    return (
        <div style={{textAlign:'center'}}>
            {people.map((person) => {
                const { name, id } = person;
                return <Person key={id} name={name} />
            })}
        </div>
    );
}

export default List;