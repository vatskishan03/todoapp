import React, { useState } from 'react';
export function CreateTodo(){
    //react query
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    
    return <div>
        <input id ="title" style ={{
            padding:10,
            margin:10
        }}
            type="text" placeholder="title" onChange={{function(e){
                const value=e.target.value;
                console.log(e.target)
            }}}></input><br />
        <input style ={{
            padding:10,
            margin:10
        }}type= "text" placeholder="description"></input> <br />

        <button style ={{
            padding:10,
            margin:10
        }}onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,
                }),
                headers:{
                    "Content-Type":"application/json"
                }
        })
                .then(async function(res){
                    const json =await res.json();
                    alert("Todo Added");
               
            })
        
        }}
        >Add a Todo 🚀</button>
    </div>
}

