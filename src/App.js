import React from 'react';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import TasksContent from './components/TasksContent';
import './styles/GlobalStyles.css';
import AppStyle from'./styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';
import FooterInfoTodo from './components/FooterInfoTodo';

function App() {
  return (
    <main className="container">
      <PageTitle id="as"> Todo List </PageTitle>
      <section className={AppStyle.app__wrapper}>
        <AppHeader/>
        <TasksContent/>        
        <FooterInfoTodo/>
      </section>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize:'1.4rem'
          }
      }}
      />
    </main>
  );
}

export default App;
