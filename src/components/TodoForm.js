import React,{useState, useEffect,useRef} from 'react'

function TodoForm({onSubmit,edit}) {

    const [input,setInput] =useState(edit? edit.value: '' );

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    }) 

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() *10000),
            text: input
        });

        setInput('');
    }



    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {edit ? (
                    <>
                          <input type="text" placeholder="Update your Item" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={inputRef}/>
                          <button className="todo-button edit" >Update</button>
                    </>
                ) : (
                    <>
                    <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef}/>
                    <button className="todo-button" >Add todo</button>
                    </>
                )}
      
            </form>
        </div>
    )
}

export default TodoForm
