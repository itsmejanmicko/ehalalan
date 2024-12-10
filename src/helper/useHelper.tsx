import { useState, useRef } from 'react';

export function useModal(initialState = false) {
  const [isShowModal, setIsShowModal] = useState(initialState);
  const modalRef = useRef<HTMLDivElement | null>(null);

  function handleToggleModal() {
    setIsShowModal(prevState => !prevState);
  }


  return { isShowModal, handleToggleModal, modalRef };
}
