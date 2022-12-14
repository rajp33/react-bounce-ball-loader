import styled, { keyframes } from 'styled-components';

export interface BounceShadowProps {
    easeDelay: number;
}

const shrink = keyframes`
    100% {
        transform: scaleX(.5);
        opacity: .01;
    }
`;

export const BounceShadow = styled.div<BounceShadowProps>`
    position: relative;
    opacity: .1;
    bottom: 20px;
    width: 20px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    display: inline-block;
    margin: 5px;
    animation: ${shrink} .5s ease ${({ easeDelay }) => easeDelay + 's'} infinite alternate
`;