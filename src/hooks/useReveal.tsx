import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


interface Options {
    threshold: number;
    repeat: boolean;
    immediate: boolean;
    delay: number;
    spy: any;
}


export default function useReveal(options: Options): {
    ref: (node?: Element) => void;
    show: boolean;
} {
    const {
        threshold,
        repeat,
        immediate,
        delay,
        spy
    } = options;

    const { ref, inView } = useInView({
        threshold,
        triggerOnce: !repeat
    });

    const [show, setShow] = useState(false);

    useEffect(() => {
        let timeoutID: NodeJS.Timeout;
        if (immediate) {
            timeoutID = setTimeout(() => setShow(true), delay);
        }
        return () => clearTimeout(timeoutID);
    }, []);

    useEffect(() => {
        setShow(inView);
    }, [inView]);

    useEffect(() => {
        let timeoutID: NodeJS.Timeout;
        if (spy !== undefined) {
            setShow(false);
            timeoutID =  setTimeout(() => setShow(true), delay);
        }
        return () => clearTimeout(timeoutID);
    }, [spy]);

    
    return { ref, show };
}
