import { useState } from 'react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { getRepoList } from '@apis/repo';

const useRepoList = (userId: string) => {
  const sortBy = ['created', 'updated', 'pushed', 'full_name'] as const;
  const [selectedSort, setSelectedSort] = useState<typeof sortBy[number]>('full_name');

  const { isLoading, isError, data, error } = useQuery<AxiosResponse<any[]>, AxiosError>(
    ['repoList', userId, selectedSort],
    () => getRepoList(userId, selectedSort),
  );

  const mutateSort = async (sort: typeof sortBy[number]) => {
    setSelectedSort(sort);
  };

  return {
    data: data?.data,
    error,
    isLoading,
    isError,
    sortBy,
    mutateSort,
  };
};

export default useRepoList;
