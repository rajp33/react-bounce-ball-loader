import styled, { keyframes } from 'styled-components';

export interface BounceBallProps {
    background: string;
    easeDelay: number; // in seconds
}

const jump = keyframes`
    0% {transform: scaleY(.8);}
    100% {
        transform: translateY(-70px);
    }
`;

export const BounceBall = styled.div<BounceBallProps>`
    width: 20px;
    position: relative;
    display: inline-block;
    margin: 5px;
    height: 20px;
    border-radius: 50%;
    z-index: 999;
    animation: ${jump} .5s ease ${({ easeDelay }) => easeDelay + 's'} infinite alternate;
    background: ${({ background }) => background}
`;