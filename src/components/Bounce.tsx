import React from 'react';
import styled, { css } from 'styled-components';
import useReveal from '../hooks/useReveal';


interface Props {
    duration?: number;
    delay?: number;
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
    show: boolean;
}>`
    ${props => {
        if (props.show) {
            return css`
                animation: bounce-in ${props => props.duration}ms ease;
            `;
        }
    }}
    transition: all ${props => props.duration}ms;
    transition-delay: ${props => props.delay}ms;
    opacity: ${props => props.show ? 1 : 0};
    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% { 
            transform: scale(.9);
        }
        100% { 
            transform: scale(1);
        }
    }    
`;


export default function Bounce(props: Props): JSX.Element {
    const {
        duration = 800,
        delay = 0,
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
