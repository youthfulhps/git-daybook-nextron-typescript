import { useQuery } from 'react-query';
import { getContributions } from '@apis/contribution';
import { AxiosResponse, AxiosError } from 'axios';
import { useMemo } from 'react';

const useContribution = (userId: string, from: string, to: string) => {
  const { isLoading, isError, data, error } = useQuery<AxiosResponse<any>, AxiosError>(
    ['contribution', userId, from, to],
    () => getContributions(userId, from, to),
  );

  const contributions = useMemo(() => {
    return data.data.data.user.contributionsCollection;
  }, [data]);

  return { contributions, error, isError, isLoading };
};

export default useContribution;
