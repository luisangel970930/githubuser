import GitHubLogo from "../GitHubLogo";
import Loading from "../Loading";
import GitHubUserSearch from "../GitHubUserSearch";
import useSearch from "../../hooks/useSearch";

function GitHubUser() {
  const { loading, detailUser, error, requestUser } = useSearch();

  return (
    <>
      <GitHubLogo />
      <GitHubUserSearch onSubmit={requestUser} />
      {loading && <Loading />}
    </>
  );
}

export default GitHubUser;
