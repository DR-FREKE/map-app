"use client";

import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

type FormContextType = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  completed: number[];
  markAsCompleted: (step: number) => void;
  setCompleted: Dispatch<SetStateAction<number[]>>;
};

interface FormContextProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<FormContextType | null>(null);
/** the createContext asks for a default value...
 * now the default value is needed in the case where we wanted
 *  to access the value of the context api from outside the provider
 * then we'd get the default value. for instance, we could set the default value to be home but it is always a very rare case...
 * in this project, we'll just set it to be null */

export const useFormContext = () => useContext(FormContext)!;

const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [active, setActive] = useState<number>(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const markAsCompleted = (step: number) => {
    setCompleted(prev => (prev.includes(step) ? prev : [...prev, step]));
  };

  return <FormContext.Provider value={{ active, setActive, completed, markAsCompleted, setCompleted }}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
