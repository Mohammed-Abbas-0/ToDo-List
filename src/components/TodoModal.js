import React, { useState } from 'react'
import ModalStyle from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlices';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

export default function TodoModal({ modalOpen, setModalOpen }) {
    const [title,setTitle]      = useState('');
    const [status,setStatus]    = useState('Incomplete');
    const dispatch              = useDispatch();
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(title && status) 
        {
            dispatch(addTodo({
                id: uuid(),
                // title: title
                title,
                status,
                time: new Date().toLocaleDateString()
            }));
            setModalOpen(false);
            toast.success('Task Added Successfully :)');
        }
        else{
            toast.error('Task shouldn`t be empty');
        }
        //console.log({title,status});
    }
  return (
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
             onSubmit={e => handleSubmit(e)}>
                <h3 className={ModalStyle.formTitle}>Add Task</h3>
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
                    <Button type='submit' variant='primary'> Add Task </Button>
                    <Button
                     variant='secondary'
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