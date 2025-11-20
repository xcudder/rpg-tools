import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Sheet } from '../types';


interface SheetsContextType {
  sheets: Sheet[];
  setSheets: Dispatch<SetStateAction<Sheet[]>>;
}

const SheetsContext = createContext<SheetsContextType | undefined>(
  undefined
);

export const SheetsProvider = ({ children }: { children: ReactNode }) => {
  const [sheets, setSheets] = useState<Sheet[]>([]);

  const value = {
    sheets,
    setSheets,
  };

  return (
    <SheetsContext.Provider value={value}>
      {children}
    </SheetsContext.Provider>
  );
};

export const useSheetsContext = () => {
  const ctx = useContext(SheetsContext);
  if (!ctx) {
    throw new Error('useSheetsContext must be used within a SheetsProvider');
  }
  return ctx;
};