import { API } from '..';
import axios from 'axios';
import { getRepoList } from '../repo';

const getUser = async (userId: string) => {
  return API.get(`/users/${userId}`);
};

export const getUserLanguageList = async (userId: string) => {
  const { data: repoList } = await getRepoList(userId, 'updated');

  const requests = repoList
    .filter((repo) => !(repo.fork || repo.name.includes('github.io')))
    .map((repo) => API.get(repo.languages_url));

  return await Promise.all(requests);
};

export { getUser };
