import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: black;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    padding: 0.5vw;
    align-items: center;
    font-weight: bolder;
    color: white;
    border-bottom: 5px solid #fff;
`



function Header() {
    return (<HeaderContainer>
        <h1>Super Dog Jump</h1>
        </HeaderContainer>
    )
}

export default Header;