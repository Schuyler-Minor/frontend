import styled from 'styled-components';

export const StyledClass = styled.div`
display: flex;
flex-flow: column nowrap;
background: lightblue;
margin: 3% auto;
color: black;
width: 50%;
padding: 2%;

& .infoButton{
    width: 25%;
    margin: 3% auto;
}

& .infoDiv{
    display: flex;
    flex-flow: column wrap;
}

& .infoDiv button {
    width: 25%;
    margin: auto;
}

h3 {
    margin: auto;
}

p{
    margin: auto;
}
`
export const StyledSearch = styled.div`
 display: flex;
 flex-flow: column nowrap;

`

export const FilterContainer = styled.div`
  display: flex;
  margin: auto;
  flex-flow: column wrap;
  item-align: center;

  h2{
    text-align: center;
  }
`
export const SearchBar = styled.div`
    margin: 1% auto;
`