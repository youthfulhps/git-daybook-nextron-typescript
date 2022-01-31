import React, { useMemo, useState, createContext } from 'react';

type SectionContextProviderProps = {
  children: React.ReactNode;
};

type SectionContextType = {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

function SectionContextProvider({ children }: SectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  const sectionContextState = useMemo<SectionContextType>(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection, setActiveSection],
  );

  return <SectionContext.Provider value={sectionContextState}>{children}</SectionContext.Provider>;
}

export default SectionContextProvider;
