import { useState } from 'react'
import './App.css';

function App() {
  const [toDos, settoDos] = useState([])
  const [toDo, settoDo] = useState('')
  const day=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day[new Date().getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { settoDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { settoDos([...toDos, { id: Date.now(), title: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          console.log(value);
          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                settoDos(toDos.filter(obj => {
                  if (obj.id == value.id) {
                    obj.status = e.target.checked
                  }
                  return obj
                }))
              }} value={value.status} type="checkbox" name="" id="" />
              <p>{value.title}</p>
            </div>
            <div className="right">
              <i onClick={(e)=>{
                settoDos(toDos.filter(obj=>{
                  return obj.id!=value.id?obj:null
                    
                }))
              }} className="fas fa-times"></i>
            </div>
          </div>);
        })}

      </div>
    </div>
  );
}

export default App;
