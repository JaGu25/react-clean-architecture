import { RefObject, useEffect } from "react";

const useOutsideElement = (ref: RefObject<HTMLDivElement>, action: Function, exceptionsClassNames: Array<string> = []) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ((ref.current && !ref.current.contains(event.target as Node))) {
                const element = event.target as HTMLElement;
                if (!exceptionsClassNames.some(e => element.classList.contains(e))) action();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
}

export default useOutsideElement;