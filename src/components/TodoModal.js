import { useEffect, useState } from "react"
import Button from "./Button"
import { MdOutlineClose } from 'react-icons/md'
import ModalStyle from '../styles/modules/modal.module.scss'
import { useDispatch } from "react-redux";
import {v4 as uuid} from 'uuid';
import { addTodo,updateTodo } from "../slices/todoSlices";
import toast from 'react-hot-toast';
// type -> "Add/Update"
// todo -> Value Of Title && status
export default function TodoModal({type,modalOpen,setModalOpen, todo})
{
    const [title,setTitle]      = useState('');
    const [status,setStatus]    = useState('Incomplete');
    const dispatch              = useDispatch();
    const handleSubmit = (e) => 
    {       
        e.preventDefault();
        if(title && status)
        {
            if(type === "add")
            {
                dispatch(addTodo({
                    id:uuid(),
                    title,
                    status,
                    time:new Date().toLocaleString()
                }));
                setModalOpen(false);
                setTitle("");
                toast.success('Task Added Successfully :)');
            }
            if(type === "update") {
                if(todo.title !== title || todo.status !== status)
                {                    
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        status
                    }));
                    setModalOpen(false);
                    toast.success('Task Updated Successfully :)');
                }
                else toast.error('Task Not Update!');
            }
        }
        else toast.error('Task shouldn`t be empty :(');
    }

    useEffect(()=>{
        if(type === 'update' && todo)
        {
            setTitle(todo.title);
            setStatus(todo.status);
        }else{
            setTitle("");
            setStatus("Incomplete");
        }
    },[modalOpen])
    
    return(
        modalOpen && ( 
        <main className={ModalStyle.wrapper}>
        <section className={ModalStyle.container}>
            <aside 
                className={ModalStyle.closeButton}
                onClick={()=>setModalOpen(false)}
                onKeyDown={()=>setModalOpen(false)}
                tabIndex={0}
                role='button'
            >
                <MdOutlineClose/>
            </aside>
            <form className={ModalStyle.form}
             onSubmit={e => handleSubmit(e)}
             >
                <h3 className={ModalStyle.formTitle}>
                    { type === "update" ? "Update" : "Add"} Task</h3>
                <label htmlFor='title'>
                    Title
                    <input 
                    type='text'
                    id='title'
                    value={title}
                    onChange={(e) =>{ setTitle(e.target.value)} }
                    />
                </label>
                <label htmlFor='status'>
                    Status
                    <select 
                        name='status'
                        id='status' 
                        value={status}
                        onChange={(e)=> setStatus(e.target.value)}
                        >
                        <option value='Incomplete'>Incomplete</option>
                        <option value='Complete'>Complete</option>
                    </select>
                </label>
                <footer className={ModalStyle.buttonContainer}>
                    <Button type='submit'> 
                        {type === "update" ? "Update" : "Add"} Task 
                    </Button>
                    <Button
                        onClick={()=>setModalOpen(false)}
                        onKeyDown={()=>setModalOpen(false)}
                     > Cancel </Button>
                </footer>
            </form>
        </section>        
    </main>
        )
    )
}