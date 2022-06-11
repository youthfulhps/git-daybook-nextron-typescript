import { API } from '..';
import axios from 'axios';

const getUser = async (userId: string) => {
  return API.get(`/users/${userId}`);
};

const getUserLanguageList = async (userId: string, sortBy: string) => {
  return API.get(`/users/${userId}/repos?sort=${sortBy}`);
};

export const getUserLanguages = async (repos: any) => {
  try {
    const allLaguages = {};
    for (let repo of repos) {
      if (repo.fork || repo.name.includes('github.io')) continue;
      const languages = await axios.get(repo.languages_url);
      Object.keys(languages.data).map((key) => {
        if (allLaguages.hasOwnProperty(key)) {
          allLaguages[key] += languages.data[key];
        } else {
          allLaguages[key] = languages.data[key];
        }
      });
    }

    const sortedLaguages = Object.entries(allLaguages)
      .sort(([, a], [, b]) => Number(b) - Number(a))
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    return sortedLaguages;
  } catch (e) {
    return {};
  }
};

export { getUser, getUserLanguageList };
