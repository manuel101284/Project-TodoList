import React, { useState } from "react";
import { BsFillPatchCheckFill, BsFillPatchMinusFill } from 'react-icons/bs';

const Todo = ({title, completed, removeTodoItemProp, editTodoItemProp}) => {

    const [Value, setValue] = useState(title)
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompletedState] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
    
        if(key === 13){
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        }
        else if(key === 27){
            setTempValue(Value);
            setIsEditing(false);
        }
    }

    const handleInputOnChange = (e) => {
        setTempValue(e.target.Value);
    }

    const handelButtonClick = () => {
        setCompletedState((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({completed: newState});
            return newState;
        })
    }

    return (
        <div className="grid w-full px-5 py-2 my-3" onDoubleClick={handleDivDoubleClick}>
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}    
                            />
                        </div>
                    </div>:
                    <div className="grid md:grid-cols-2 lg:grid-cols-1 w-full px-2 bg-darkGreen rounded-md border-2 border-lightGreen">
                        <div className="content-center m-auto" onDoubleClick={handleDivDoubleClick}>
                            <h2 className={"font-Rubik font-light text-center tracking-wide text-white text-xl pt-3 md:pt-0 lg:pt-3 pb-2 md:pb-0 lg:pb-2" + (completedState ? "green" : "")}>{Value}</h2>
                        </div>
                        <div className="flex gap-3 md:flex-col lg:flex-row justify-around pt-1 md:pt-3 lg:pt-1 pb-3 md:pb-3 lg:pb-3">
                            <div className="self-center justify-self-center bg-white px-1 rounded-md">
                                <button className={"flex items-stretch" + (completedState ? "blue" : "green")} onClick={handelButtonClick}>
                                    <h className="font-Rubik font-semibold text-center inline-block align-middle tracking-wide text-darkGreen text-lg">Hecho</h>
                                    <i className="self-center justify-self-center"><BsFillPatchCheckFill alt='tarea finalizada' size={20} className="fill-darkGreen pl-1"/></i>
                                </button>
                            </div>
                            <div className="self-center justify-self-center bg-white px-1 rounded-md">
                                <button className="flex items-stretch" onClick={removeTodoItemProp}>
                                    <h className="font-Rubik font-semibold text-center inline-block align-middle tracking-wide text-darkGreen text-lg">Eliminar</h>
                                    <i className="self-center justify-self-center"><BsFillPatchMinusFill alt='eliminar tarea' size={20} className="fill-darkGreen pl-1"/></i>
                                </button>
                            </div>
                        </div>   
                    </div>
            }
        </div>
    );
}

export default Todo

// At begin, the component List contains this section.
// Now, this component has the work to-do and two buttons: red and green