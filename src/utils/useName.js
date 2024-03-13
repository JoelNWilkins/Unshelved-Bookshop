import { useState } from "react";

function useName() {
    const getName = () => {
        return localStorage.getItem("name");
    };

    const [name, setName] = useState(getName());

    const saveName = (userName) => {
        localStorage.setItem("name", userName);
        setName(userName);
    };

    return {
        setName: saveName,
        name
    }
}

export default useName;