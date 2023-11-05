import styled from "styled-components";
import road from '../../images/road.png'

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
        <RoadImg src={road} alt='road' />
    )
}

export default Road;