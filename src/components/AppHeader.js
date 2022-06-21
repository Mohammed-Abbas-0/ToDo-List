import Button, { SelectButton } from './Button';
import AppStyle from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { useState } from 'react';



export default function AppHeader() {
    const [modalOpen,setModalOpen] = useState(false);
    
    return (
            <section className={AppStyle.appHeader}>
                <Button                     
                    onClick={()=>setModalOpen(true)}
                > Add New Task </Button>
                <SelectButton id="status">
                    <option value='all'> All </option>
                    <option value='incomplete'> Incomplete </option>
                    <option value='complete'> Complete </option>
                </SelectButton>
                <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </section>
    )
}
