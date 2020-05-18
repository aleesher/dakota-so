import { useEffect, useRef } from "react";

export default function useClickOutside(onClickOutside: () => void) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return ref;
}
