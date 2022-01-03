import React from 'react';
import styled, { css } from 'styled-components';
import useReveal from '../hooks/useReveal';


interface Props {
    duration?: number;
    delay?: number;
    direction?: 'down' | 'up' | 'left' | 'right';
    distance?: string;
    repeat?: boolean;
    immediate?: boolean;
    spy?: any;
    threshold?: number;
    className?: string;
    style?: any;
    as?: React.ElementType;
    children: React.ReactNode;
}


const Wrapper = styled.div<{
    duration: number;
    delay?: number;
    direction?: 'down' | 'up' | 'left' | 'right';
    distance?: string;
    show: boolean;
}>`
    transition: all ${props => props.duration}ms;
    transition-delay: ${props => props.delay}ms;
    opacity: ${props => props.show ? 1 : 0};
    ${props => {
        switch (props.direction) {
            case 'down':
                const downDistance = props.distance ? -props.distance : '-100%';
                return css`
                    transform: translateY(${props.show ? 0 : downDistance});
                `;
            case 'up':
                const upDistance = props.distance ?? '100%';
                return css`
                    transform: translateY(${props.show ? 0 : upDistance});
                `;
            case 'left':
                const leftDistance = props.distance ? -props.distance : '-100%';
                return css`
                    transform: translateX(${props.show ? 0 : leftDistance});
                `;
            case 'right':
                const rightDistance = props.distance ?? '100%';
                return css`
                    transform: translateX(${props.show ? 0 : rightDistance});
                `;
        }
    }}
`;


export default function Fade(props: Props): JSX.Element {
    const {
        duration = 800,
        delay = 0,
        direction,
        distance,
        repeat = false,
        immediate = false,
        spy,
        threshold = 0,
        className = '',
        style = {},
        children = <></>,
        as = 'div'
    } = props;

    const { ref, show } = useReveal({
        threshold,
        repeat,
        immediate,
        delay,
        spy
    });

    return (
        <Wrapper
            duration={show ? duration : 0}
            delay={show ? delay : 0}
            direction={direction}
            distance={distance}
            show={show}
            ref={ref}
            className={className}
            style={style}
            as={as}
        >
            {children}
        </Wrapper>
    );
}
