import { useEffect,useState } from "react";
import "./App.css";

const Timer = () =>{

    const [sec,setSec]=useState(0);

    useEffect(() => {
    const time = setInterval(() => {
        setSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(time);
    }, []);

    return (
        <div>{sec}</div>
    )
};
export default Timer;
