import styled from "styled-components";

const Cont = styled.div`
    width: 100%;
    background-color: white;

    display: flex;
    align-items: center;
`
const Logo = styled.img`
    width: 20%;
    padding: 1em;
`

const TitleExpo = styled.h1`
    padding-left: 23%
`


export default function HeaderComp() {
    return (
        <Cont>
            <Logo src="./logo.png" />
            <TitleExpo>Expo Line</TitleExpo>
        </Cont>
    )
}