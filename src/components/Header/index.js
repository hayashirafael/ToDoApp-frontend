import React from 'react'
import * as S from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, notification}){
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
            </S.LeftSide>
            <S.RightSide>
                <a href="#">INÍCIO</a>
                <span className="divisor"/>
                <a href="#">NOVA TAREFA</a>
                <span className="divisor"/>
                <a href="#">SINCRONIZAR CELULAR</a>
                <span className="divisor"/>
                <button onClick={notification} id="notification">
                    <img src={bell} alt="Notificação"/>
                    <span>{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;