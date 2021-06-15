import React from 'react'
import * as S from './styles'

import iconDefault from '../../assets/default.png'


function TaskCard(){
    return (
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt="Icon da Tarefa" />
                <h3>Título da tarefa</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>17/10/2020</strong>
                <span>10:10</span>
            </S.BottomCard>
        </S.Container>
    )
}

export default TaskCard;