export const getContributionsQuery = (userId: string, from: string, to: string) => `
  query {
    user(login: "${userId}") {
      contributionsCollection(from: "${from}T00:00:00Z", to: "${to}T00:00:00Z") {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;
