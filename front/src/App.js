import React, { useState, useEffect } from "react";
import todo from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";


const appTitle = "Nombre de la App";

// const list = [
//     { title: "Test # 1", completed: false },
//     { title: "Test # 2" },
//     { title: "Test # 3 "}
// ];

const App = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const {data} = await todo.get("/todos");
            setTodoList(data);
        }
        fetchData();
    }, []);

    const addTodo = async(item) => {
        const {data} = await todo.post("/todos", item);
        setTodoList((oldlist) => [...oldlist, item]);
    }

    const removeTodo = async(id) => {
        await todo.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id ));
    }

    const editTodo = async(id, item) => {
        await todo.put(`/todos/${id}`, item);
    }

    return (
        <>
            <div className="mx-10 md:mx-36 grid">
                <Section>
                    <h1 className="py-5 font-Rubik text-dark text-center font-normal">
                        {appTitle}
                    </h1>
                </Section>

                <Section>
                    <Form addTodo={addTodo}/>
                </Section>

                <Section>
                    <List
                        editTodoListProp={editTodo}
                        removeTodoListProp={removeTodo}
                        list={todoList}
                    />
                </Section>
            </div>
            <div className="bg-sand mt-5 flex flex-col text-center p-5">
                <h className="text-darkBlue font-Rubik text-base">Desarrollado por:</h>
                <a href="https://github.com/manuel101284" target="_blank" rel="noreferrer" ><h className="font-light text-darkBlue font-Rubik text-base">manuel101284</h></a>
                <a href="https://github.com/MariaHerrera03" target="_blank" rel="noreferrer" ><h className="font-light text-darkBlue font-Rubik text-base">MariaHerrera03</h></a>
                <a href="https://github.com/DaniloDiaz08" target="_blank" rel="noreferrer" ><h className="font-light text-darkBlue font-Rubik text-base">DaniloDiaz08</h></a>
            </div>
        </>
    )
}

export default App