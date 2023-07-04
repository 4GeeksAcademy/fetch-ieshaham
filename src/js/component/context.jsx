import react, {createContext, useState, useEffect} from "react";
export const Context = createContex();

export default function ContextProvider(props) {

    const [todoList, setTodoList] = useState([]);
    useEffect(() => {

        console.log('In the Context useEffect');
        fetchTodos();
    }, []);
    
    const addTodos = async () => {
        const yourTodos = [];
        const response  = await fetch ('https://1e2f-147-70-17-49.ngrok-free.app/todos/user/elvis',{
            method:'post',
            body: JSON.stringify({ todos:yourTodos}),
            headers: {"Content-Type": "application/json"}

        }).then((res) => res.json())
    }
    const fetchTodos = async () => {

        const response = await fetch("https://1e2f-147-70-17-49.ngrok-free.app/todos/user/elvis").then((res) =>res.json());

        const {todos = [] } = response;

        setTodoList(todos);
    }

    return(
        <Context.Provider value={{ todoList,setTodoList}}>
            {props.children}
        </Context.Provider>
    )
}