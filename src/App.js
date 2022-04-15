import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('')
  const [users, setUser] = useState([])
  const [singleUser, setSingleUser] = useState({})
  const [randomUser,setRandomUser] = useState()
  

  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))

    //single user data 
    fetch("http://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => setSingleUser(data))

    // random user api data
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setRandomUser(data.results[0])
    })
  },[])

  const handleColor = ()=>{
    const color = likeColor ? '' : 'primary';
    setLikeColor(color)
  } 

  return (
    <div className="App">
      <h3>Click The like Icon  <ThumbUpIcon onClick={handleColor} color={likeColor} sx={{ fontSize: 40 }}></ThumbUpIcon></h3>
      <h2>Showing results of many users</h2>
      {
        users.map(user=><li>{user.name}</li>)
      }
      <h2>showing results of single user </h2>
      <h3>Name:{singleUser.name}</h3>

      <h2>Showing results from randomuser.me a complicated api</h2>
      <h3>Name:{randomUser.name.title}</h3>
      <h3>Gender:{randomUser?.gender}</h3>


    </div>
  );
}

export default App;
