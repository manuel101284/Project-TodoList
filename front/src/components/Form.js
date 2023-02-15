import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

const Form = ({addTodo}) => {

    // We create a hook. This useState saves a string, then we use "" 
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    }

    return (
        <form className='px-5 py-2 md:px-10 bg-white/60 rounded-md mb-10 lg:mx-16 border-2 border-darkBlue' onSubmit={handleFormSubmit}>
            <div className='grid grid-cols-5 w-full m-auto'>
                <div className='col-start-1 col-end-5 m-auto'>
                    <input
                    value={inputValue}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Escriba una tarea"
                    className='sm:w-[256px] md:w-[400px] font-Rubik font-light text-center text-darkBlue text-b py-1 border-2 border-lightBlue/60 rounded-md bg-white'>
                    </input>
                </div>
                <div className='col-start-5 col-end-6 justify-self-end'>
                    <button type="submit" className='flex items-stretch'>
                        <i className='self-center'><MdAddCircle alt='añadir tarea' size={30} className='fill-darkBlue hover:fill-lightBlue'/></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form