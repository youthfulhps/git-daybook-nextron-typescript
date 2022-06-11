import useRequest from '../../libs';
import { useEffect, useState, useMemo } from 'react';
import { getUserLanguages } from '@apis/Users';

const useLanguageList = (userId: string) => {
  const { data, error, isValidating, mutate } = useRequest(`/users/${userId}/repos?sort=updated`);

  const [languages, setLanguages] = useState({});

  const hasLanguages = useMemo(() => {
    return !!Object.keys(languages).length;
  }, [languages]);

  useEffect(() => {
    const setUserLanguages = async (repos: any) => {
      if (!repos || !repos.length) return;
      const allLaguages = await getUserLanguages(repos);
      setLanguages(allLaguages);
    };

    setUserLanguages(data);
  }, [data]);

  return { languages, hasLanguages, error, isValidating, mutate };
};

export default useLanguageList;
