import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [message, setMessage] = useState();
	
	useEffect (()=>{
		const getIndex = async () => {
			const resp = await axios.get("/index");
			setMessage(resp.data);
		}
		getIndex();
	}, []);
  return (
    <div>
		<h1> ㅇ.ㅇ </h1>
		<h3>{message}</h3>
    </div>
  );
}

export default App;
