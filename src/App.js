import React, { useEffect, useState } from 'react';
import './App.css';
import PostDetail from './PostDetail';

function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const abortControl = new AbortController();

    const loadUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?userId=1", {signal: abortControl.signal});
      const userFroAPI = await response.json();
      setUsers(userFroAPI);
    };
    loadUsers();

    return () => {
      abortControl.abort();
    }
  }, []);


  return (
    <div className="App">
      {users.map((user, index) => (<PostDetail key={index}  userId={user.id} name={user.name} company={user.company}/>))}   
    </div>
  );
}

export default App;
