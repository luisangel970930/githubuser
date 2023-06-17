import { useState } from "react";
import { fetchGitHubUser, fetchGitHubUserRepos } from "../service/fetchGitHub";
function useSearch() {
  const [detailUser, setDetailUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestUser = async (name) => {
    let resp;
    setLoading(true);
    setError(null);
    try {
      resp = await fetchGitHubUser(name);

      if (resp.ok) {
        const user = await resp.json();
        setDetailUser({ user });
      } else {
        setError(resp.status);
        setDetailUser({ user: null });
      }
    } catch (error) {
      console.log(error);
    }
    try {
      if (resp.ok) {
        resp = await fetchGitHubUserRepos(name);

        if (resp.ok) {
          const listRepos = await resp.json();
          setDetailUser((prevUser) => {
            return { ...prevUser, listRepos };
          });
        } else {
          setError(resp.status);
          setDetailUser((prevUser) => {
            return { ...prevUser, listRepos: [] };
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return { loading, detailUser, error, requestUser };
}

export default useSearch;
