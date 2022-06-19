import useRequest from '../../libs';

const useUser = (userId: string) => {
  const { data, error, isValidating, mutate } = useRequest(`/users/${userId}`);

  return { data, error, isValidating, mutate };
};

export default useUser;
