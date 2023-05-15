import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    return (
        <button style={{ marginBottom: '1rem' }} onClick={() => handleIncrement()} className="btn">count: {count}</button>
    );
}

export default Counter;