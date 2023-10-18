import { useState } from 'react'
import axios from 'axios';
const CreateFruits = () =>  {
    // fruit creation app
    const [fruitData, setFruitData] = useState({
        name: "",
        color: "",
        age: 0,
        readyToEat: false
    });

    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fruitData.name || !fruitData.color){
            setError('Invalid inputs!');
            return
        }
        console.log(fruitData);
        axios({
            method: "POST",
            url: "http://localhost:3000/fruits",
            data: fruitData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res)=>{
            console.log(res.data);
            setFruitData({
                name: "",
                color: "",
                readyToEat: false,
            })
            setError('')
        })
    }
    return (
        <div>
            <h1>New Fruit page</h1>
            {
                error && <div>{error}</div>
            }
          <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={fruitData.name} onChange={(e) => setFruitData({ ...fruitData, name: e.target.value })} /><br />
        Color: <input type="text" name="color" value={fruitData.color} onChange={(e) => setFruitData({ ...fruitData, color: e.target.value })} /><br />
        Age: <input type="number" name="age" value={fruitData.age} onChange={(e) => setFruitData({ ...fruitData, age: e.target.value })} /><br /> {/* Add the age input */}
        Is Ready To Eat: <input type="checkbox" name="readyToEat" checked={fruitData.readyToEat} onChange={(e) => setFruitData({ ...fruitData, readyToEat: e.target.checked })} /><br />
        <button>Create Fruit</button>
      </form>
        </div>);
}
export default CreateFruits;

