export const getContributionsQuery = (userId: string, since: string) => `
  query {
    user(login: "${userId}") {
      name
      contributionsCollection(from: "${since}T00:00:00Z") {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
            firstDay
          }
        }
      }
    }
  }
`;
