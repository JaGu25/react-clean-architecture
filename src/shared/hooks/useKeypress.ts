import { useEffect } from 'react';

const useKeypress = (key: string, action: Function) => {
    useEffect(() => {
        function onKeyup(e: KeyboardEvent) {
            if (e.key === key) action()
        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup);
    }, []);
}

export default useKeypress;