import styled from 'styled-components'

export const Container = styled.div`

width: 100%;

`

export const FilterContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-top: 30px;

button {
    background: none;
    border: none;
}

`

export const Content = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

a {
    text-decoration: none;
    color: black;
}


`

export const Title = styled.div`
width: 100%;
border-bottom: 1px solid #20295F;
display: flex;
justify-content: center;
margin-bottom: 20px;


h3 {
    color: #20295F;
    position: relative;
    top: 30px;
    background: #fff;
    padding: 0 20px;
}
`