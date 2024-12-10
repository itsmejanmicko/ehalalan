import { useState, useEffect, useRef } from 'react';

export function useModal() {
  const [isShowModal, setIsShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  function handleToggleModal() {
    setIsShowModal(prevState => !prevState);
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isShowModal, handleToggleModal, modalRef };
}
