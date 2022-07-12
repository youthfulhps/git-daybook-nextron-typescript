import { API } from '..';
import { getContributionsQuery } from '@apis/contribution/graphql';

export const getTodayContributions = (userId: string, from: string, to: string) => {
  const body = {
    query: getContributionsQuery(userId, from, to),
  };

  return API.post('/graphql', body);
};
