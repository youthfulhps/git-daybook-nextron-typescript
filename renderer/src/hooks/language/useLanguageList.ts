import { useEffect, useState, useMemo } from 'react';
import { getUserLanguages } from '@apis/user';
import { useQuery } from 'react-query';
import { getRepoList, RepoSortBy } from '@apis/repo';
import { AxiosResponse, AxiosError } from 'axios';
import { repoListQueries } from '~/queries/repos';

const useLanguageList = (userId: string) => {
  const { data, error } = useQuery<AxiosResponse<any[]>, AxiosError>(
    [repoListQueries.repoList, userId, RepoSortBy.updated],
    () => getRepoList(userId, RepoSortBy.updated),
    { keepPreviousData: true },
  );

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

    setUserLanguages(data?.data);
  }, [data?.data]);

  return { languages, hasLanguages, error };
};

export default useLanguageList;
