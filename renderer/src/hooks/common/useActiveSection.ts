import { useContext, useMemo } from 'react';
import { SectionContext } from '@contexts/SectionContext';

const useActiveSection = (section: string) => {
  const sectionContext = useContext(SectionContext);

  const isSectionActivated = useMemo(() => {
    return sectionContext.activeSection === section;
  }, [sectionContext.activeSection]);

  const activateSection = () => {
    sectionContext.setActiveSection(section);
  };

  return {
    isSectionActivated,
    activateSection,
  };
};

export default useActiveSection;
