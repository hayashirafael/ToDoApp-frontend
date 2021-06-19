import React from 'react'
import * as S from './styles'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, notification}){
    return (
        <S.Container>
            <S.LeftSide>
                <Link to="/">   
                    <button>
                    <img src={logo} alt="Logo"/>
                    </button>
                </Link>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="divisor"/>
                <Link to="/task">NOVA TAREFA</Link>
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