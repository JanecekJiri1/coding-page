import { useEffect } from "react";
export const useClickOutside = (ref, onClickOutside) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClickOutside]);
};
