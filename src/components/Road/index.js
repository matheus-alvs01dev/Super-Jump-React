import styled from "styled-components";
import road2 from '../../images/road2.png'

const RoadImg = styled.img`
    position: absolute;
    width: 110%;
    height: 20%;
    left: -1rem;
    right: -10;
    bottom: 0;
    z-index: 1;
`

function Road() {
    return (
        <RoadImg src={road2} alt='road' />
    )
}

export default Road;