import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [indexMessage, setIndexMessage] = useState("");
    const [mainMessage, setMainMessage] = useState("");
    
    useEffect(() => {
        const getIndex = async () => {
            const resp = await axios.get("/index");
            setIndexMessage(resp.data);
        }
        getIndex();
    }, []);
    
    useEffect(() => {
        const getMain = async () => {
            const resp = await axios.get("/jin");
            setMainMessage(resp.data);
        }
        getMain();
    }, []);
  
    return (
        <div>
            <h1> ㅇ.ㅇ </h1>
            <h3>Index Message: {indexMessage}</h3>
            <h3>Main Message: {mainMessage}</h3>
        </div>
    );
}

export default App;
