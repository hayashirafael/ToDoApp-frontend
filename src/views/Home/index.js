import React, {useState, useEffect} from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';



function Home() {
    const [filterActived, setFilterActived] = useState('today')
    const [tasks, setTasks] = useState([])
    const [lateCount, setLateCount] = useState()

    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/11:11:11:11:11:12`)
        .then(response => {
            setTasks(response.data)
            
        })
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:12`)
        .then(response => {
            setLateCount(response.data.length)
            console.log(response.length)
            
        })
    }

    function notification() {
        setFilterActived('late')
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
    }, [filterActived])


    return (
        <S.Container>
            <Header lateCount={lateCount} notification={notification}/>
            <S.FilterContainer>
                <button type="button" onClick={() => setFilterActived('all')}>
                    <FilterCard title={"Todos"} actived={filterActived === 'all'} />
                </button>

                <button type="button" onClick={() => setFilterActived('today')}>
                    <FilterCard title={"Hoje"} actived={filterActived === 'today'}/>
                </button>
                    
                <button type="button" onClick={() => setFilterActived('week')}>
                    <FilterCard title={"Semana"} actived={filterActived === 'week'}/>
                </button>

                <button type="button" onClick={() => setFilterActived('month')}>
                    <FilterCard title={"Mês"} actived={filterActived === 'month'}/>
                </button>

                <button type="button" onClick={() => setFilterActived('year')}>
                    <FilterCard title={"Ano"} actived={filterActived === 'year'}/>
                </button>

            </S.FilterContainer>
            <S.Title>
                <h3>{filterActived === 'late' ? "TAREFAS ATRASADAS" : "TAREFAS"}</h3>
            </S.Title>
            <S.Content>
                {
                    tasks.map(t => (
                        <Link to={`/task/${t._id}`}>
                         <TaskCard type={t.type} title={t.title} when={t.when}/> 
                        </Link>
                    ))
                    
                }
            
            </S.Content>
            <Footer/>
        </S.Container>

    )
}


export default Home;