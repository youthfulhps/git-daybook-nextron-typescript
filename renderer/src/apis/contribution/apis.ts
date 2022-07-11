import { API } from '..';
import { getContributionsQuery } from '@apis/contribution/graphql';

export const getTodayContributions = (userId: string, since: string) => {
  const body = {
    query: getContributionsQuery(userId, since),
  };

  return API.post('/graphql', body);
};
