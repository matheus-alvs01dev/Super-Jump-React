import styled from "styled-components";
import Car from "../Car";
import { React } from 'react';
import Road from "../Road";
import Dog from "../Dog";
import { Jump } from "../functions/Jump";
import { Loop } from "../functions/Loop";
import Buildings from "../Buildings";
import { Score } from "../functions/Loop";


const GameBoardContainer = styled.div`
    width: 100%;
    height: 500px;
    border-bottom: 3vh solid grey;
    margin: 0 auto;
    position: relative;
    background-image: linear-gradient(to bottom, #D67CDB, #DBD15C);
    overflow: hidden;
`


function GameBoard() {

    return (
        <GameBoardContainer>
          
            <Car />
            <Loop />
            <Jump />
            <Dog />
            <Buildings />
            <Road />
            <Score />     

        </GameBoardContainer>
    )
}

export default GameBoard;