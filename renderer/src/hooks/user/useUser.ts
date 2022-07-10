import { useQuery } from 'react-query';
import { getUser } from '@apis/user';
import { AxiosResponse, AxiosError } from 'axios';

const useUser = (userId: string) => {
  const { isLoading, isError, data, error } = useQuery<AxiosResponse<any>, AxiosError>(
    ['user', userId],
    () => getUser(userId),
  );

  return { user: data && data.data, error, isError, isLoading };
};

export default useUser;
