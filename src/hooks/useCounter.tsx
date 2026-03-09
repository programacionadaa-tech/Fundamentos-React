import { useState } from "react";


export const useCounter = () => {
    const [count, setCount] = useState(20);

    const increaseBy = (value: number) => {
        setCount(count + value);
    };

    return {
        count,
        increaseBy,
    };
};