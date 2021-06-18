import styled from 'styled-components'

import iconCalendar from '../../assets/calendar.png' 
import iconClock from '../../assets/clock.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

`
export const Form = styled.div`
width: 50%;
height: 500px;


`

export const TypeIcons = styled.div`
width: 100%;
display: flex;
justify-content: center;

.inative {
    opacity: 0.5;
}

button {
    background: none;
    border: none;
}

img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
}
`

export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;


span {
    color: #707070;
    margin: 5px 0;
    
}

input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
}
`
export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span {
    color: #707070;
    margin: 5px 0;
}

textarea {
    font-size: 16px;
    border: 1px solid #EE6B26;
    border-radius: 5px;
    
}
`
export const InputClock = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;


span {
    color: #707070;
    margin: 5px 0;
    
}

input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
}
`
export const InputCalendar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

/*input[type="date"]::-webkit-calendar-picker-indicator {
    color: black;
    opacity: 1;
    display: block;
    background: none;
    width: 20px;
    height: 20px;
    border-width: thin;
}*/

/*img {
    width: 25px;
    height: 25px;
    position: relative;
    left: 95.5%;
    bottom: 35px;
    background: none;
}*/



span {
    color: #707070;
    margin: 5px 0;
    
}

input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
}
`

export const Options = styled.div`
display: flex;
justify-content: space-between;


div {
    color: #EE6B26;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    
}

button {
    color: #20295F;
    font-size: 18px;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
}
`

export const Save = styled.div `
display: flex;
justify-content: center;

button {
    width: 90%;
    height: 50px;
    margin-top: 20px;
    border-radius: 40px;
    background-color: #EE6B26;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
`