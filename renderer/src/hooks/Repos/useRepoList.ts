import { useState } from 'react';
import useRequest from '../../libs';

const useRepoList = () => {
  const sortBy = ['created', 'updated', 'pushed', 'full_name'] as const;
  const [selectedSort, setSelectedSort] = useState<typeof sortBy[number]>('full_name');
  const { data, error, isValidating, mutate } = useRequest(
    `/users/youthfulhps/repos?sort=${selectedSort}`,
  );

  const mutateSort = (sort: typeof sortBy[number]) => {
    setSelectedSort(sort);
    mutate();
  };

  return { data, error, isValidating, mutate, sortBy, mutateSort };
};

export default useRepoList;
