import styled from "styled-components";

const Cont = styled.div`
    background-color:#26272b;
    padding:45px 0 20px;
    font-size:15px;
    line-height:24px;
    color:#737373;
`

const ContOne = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: center;
`
const ContTwo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: center;
`
const LeftCont = styled.div`
    width: 20rem;
`
const AroundCont = styled.div`
    padding: 1.5em; 
`
const ResourceCont = styled.div`
    padding: 1.5em; 
`
const ContactCont = styled.div`
    padding: 1.5em; 
`
const Title = styled.h6`
    color:#fff;
    font-size:16px;
    text-transform:uppercase;
    margin-top:5px;
    letter-spacing:2px
`
const Link = styled.ul`
    padding-left:0;
    list-style:none
`
const List = styled.li`
    display:block
`
const Logo = styled.img`
    width: 40%;
`



export default function FooterComp() {
    return (
        <Cont>
            <ContOne>
                <LeftCont>
                    <Logo src="./logo.png" /> 
                    <p>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
                </LeftCont>

                <AroundCont>
                    <Title>Getting Around</Title>
                    <Link>
                        <List><a href="https://www.translink.ca/transit-fares">Transit Fares</a></List>
                        <List><a href="https://www.translink.ca/schedules-and-maps?page=1">Schedules</a></List>
                        <List><a href="https://www.translink.ca/rider-guide">Rider Info</a></List>
                        <List><a href="https://www.translink.ca/alerts">Transit Alearts</a></List>
                    </Link>
                </AroundCont>

                <ResourceCont>
                    <Title>Resources</Title>
                    <Link>
                        <List><a href="https://www.translink.ca/about-us/customer-service/contact-information">Contact Us</a></List>
                        <List><a href="https://www.translink.ca/about-us/careers">Careers</a></List>
                    </Link>
                </ResourceCont>
                <ContactCont>
                    <Title>Contact Us</Title>
                    <Link>
                        <List>Call us at 604.953.3333 </List>
                        <List>400-287 Nelson's Ct., New Westminster, BC V3L0E7</List>
                    </Link>
                </ContactCont>
            </ContOne>
            <hr style={{bordercolor:"#bbb", opacity: 0.5}}/>
            <ContTwo>
                    <div>
                        <p>
                            2023 TransLink, all rights reserved
                        </p>
                    </div>
            </ContTwo>
        </Cont>
    )
}
