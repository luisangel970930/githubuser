const API_GITHUB = "https://api.github.com/users/";

export const fetchGitHubUser = (name) => {
  return fetch(`${API_GITHUB}${name}`);
};
export const fetchGitHubUserRepos = (name) => {
  return fetch(`${API_GITHUB}${name}/repos`);
};
