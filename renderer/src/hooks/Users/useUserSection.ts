import { useContext, useMemo } from 'react';
import { SectionContext } from '@contexts/SectionContext';

const useUserSection = () => {
  const sectionContext = useContext(SectionContext);

  const isUserSectionActive = useMemo(() => {
    return sectionContext.activeSection === 'user';
  }, [sectionContext.activeSection]);

  const activeUserSection = () => {
    sectionContext.setActiveSection('user');
  };

  return {
    isUserSectionActive,
    activeUserSection,
  };
};

export default useUserSection;
