import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { fetchtasks } from '../app/features/todo/todoslice';
import { deletetask } from '../app/features/todo/todoslice';
import { updatetask } from '../app/features/todo/todoslice';
import { useRef } from 'react';

const Todolist = () => {
    const tasks = useSelector( (state) => state.todo.tasks);
    const status = useSelector( (state) => state.todo.status);
    const dispatch = useDispatch();

    const [task, setTask] = useState({id: "", title: "", description: ""});

    useEffect(() => {
      // if (status === 'idle') {
        dispatch(fetchtasks());
      // }
    }, [status, dispatch]);   
    // This means the effect will run whenever status or dispatch changes.

    const buttonRef = useRef(null);
    const closeRef = useRef(null);

    const openModal = (task) => {
      buttonRef.current.click();
      setTask(task);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updatetask(task));
      closeRef.current.click();
    }

    const handleOnChange = (event) => {
      const {name, value} = event.target;

      setTask((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }

  return (
    <>
    {
        tasks && tasks.map( (task,index) => (
            <li key={index}>{task.title}
            <button onClick={() => dispatch(deletetask(task._id))}>DELETE</button>
            <button onClick={ () => openModal(task)}>UPDATE</button>
            </li>
        ))
    }
    {/* <button onClick={() => dispatch(fetchtasks())}>Fetch Tasks</button> */}

    <button type="button" ref={buttonRef} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Ttile
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={task.title}
            onChange={handleOnChange}
          /> 
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="exampleInputPassword1"
            value={task.description}
            onChange={handleOnChange}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
      {/* </form>
          </div> */}
          <div class="modal-footer">
            <button type="button" ref={closeRef} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
          </form> 
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todolist
