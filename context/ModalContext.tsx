import React, { createContext, useState } from 'react';
import { Media } from '../types';

interface Modal {
  data: Media;
  setModalData: (item: Media) => void;
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
}

interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalContext = createContext<Modal>({} as Modal);

export function ModalProvider({ children }: ModalProviderProps) {
  const [data, setModalData] = useState<Media>({} as Media);
  const [isModal, setIsModal] = useState<boolean>(false);

  return <ModalContext.Provider value={{ data, setModalData, isModal, setIsModal }}>{children}</ModalContext.Provider>;
}
