import { useEffect,useState } from "react";
import "./App.css";

const Timer = () =>{

    const [sec,setSec]=useState(0);

    useEffect(() => {
    const id = setInterval(() => {
        setSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
    }, []);

    return (
        <div>{sec}</div>
    )
};
export default Timer;