import React from 'react';
import styled from 'styled-components';
import { BounceBall, BounceBallProps } from '../BounceBall';
import { BounceShadow, BounceShadowProps } from '../BounceShadow';

export interface BounceBallLoaderProps {
    balls?: BounceBallProps[]
    shadows?: BounceShadowProps[]
}

const Container = styled.div`
    position: absolute;
    height: 50px;
    width: 135px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
`;

const defaultBalls: BounceBallProps[] = [
    {
        background: '#FFCE64',
        easeDelay: 0
    },
    {
        background: '#4BB3EF',
        easeDelay: .15
    },
    {
        background: '#63DD79',
        easeDelay: .25
    },
    {
        background: '#FD6C6C',
        easeDelay: .35
    }
];

const defaultShadows: BounceShadowProps[] = [
    {
        easeDelay: 0
    },
    {
        easeDelay: .15
    },
    {
        easeDelay: .25
    },
    {
        easeDelay: .35
    }
]

const ballJumpStep = .10;
const ballJumpInitialStep = .15;

export const BounceBallLoader: React.FC<BounceBallLoaderProps> = ({balls, shadows}) => {

    return (
        <Container>
            {(balls || defaultBalls).map(ballProps => <BounceBall {...ballProps} />)}
            {(shadows || defaultShadows).map(shadowProps => <BounceShadow {...shadowProps} />)}
        </Container>
    )
}