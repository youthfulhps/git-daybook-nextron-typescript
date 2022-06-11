import { API } from '..';

const getRepoList = async (userId: string, sortBy: string) => {
  return API.get(`/users/${userId}/repos?sort=${sortBy}`);
};

export { getRepoList };
