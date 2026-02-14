import {useState} from 'react';
const toDoFunction=()=>{
  const[tasks,setTasks]=useState([]);
  const[taskInput,setTaskInput]=useState('');
  const addTask=()=>{
    if(taskInput.trim()!==''){
      setTasks([...tasks,{text:taskInput,completed:false}]);
      setTaskInput('');
    }
  };
  const toggleTask=(index)=>{
    const updatedTasks=[...tasks];
    updatedTasks[index].completed=!updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask=(index)=>{
    const updatedTasks=tasks.filter((_,i)=>i !==index);
    setTasks(updatedTasks);
  };
  return(
    <div style={styles.container}>
      <h1>React To-Do List</h1>
      <div>
        <input
        type="text"
        value={taskInput}
        onChange={(e)=>setTaskInput(e.target.value)}
        placeholder="enter a task..."
        style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add Task</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task,index)=>(
          <li key={index} style={task.completed?styles.completedTasks:styles.pendingTasks}>
            <span onClick={()=>toggleTask(index)}style={{cursor:'pointer'}}>
              {index+i}.{task.completed? '✔️':'❌'}{task.text}
            </span>
            <button onClick={()=> deleteTask(index)}style={styles.deleteButton}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
const styles={
  container:{
    testAlign:'center',
    fontFamily:'Arial,sans-serif',
    marginTop:'50px',
  },
  input:{
    padding:'10px',
    fontSize:'16px',
    width:'250px',
  },
  addButton:{
    marginLeft:'10px',
    padding:'10px',
    fontSize:'16px',
    cursor:'pointer',
  },
  list:{
    lifeStyleType:'none',
    padding:0,
    marginTop:'20px',
    
  },
  pendingTasks:{
    padding:'10px',
    fontSize:'18px',
    borderBottom:'1px solid #ddd',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  completedTasks:{
    padding:'10px',
    fontSize:'18px',
    textDecoration:'line-through',
    color:'gray',
    borderBottom:'1px solid #ddd',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  deleteButton:{
    background:'none',
    border:'none',
    fontSize:'18px',
    cursor:'pointer',
  },
};
export default toDoFunction;
