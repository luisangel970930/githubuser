import GitHubLogo from "../GitHubLogo";
import Loading from "../Loading";
import Alert from "../Alert";
import GitHubUserSearch from "../GitHubUserSearch";
import useSearch from "../../hooks/useSearch";

function GitHubUser() {
  const { loading, detailUser, error, requestUser } = useSearch();
  console.log(error);
  return (
    <>
      <GitHubLogo />
      <GitHubUserSearch onSubmit={requestUser} />
      {loading && <Loading />}
      {error && !loading && !detailUser.user && <Alert status={error} />}
    </>
  );
}

export default GitHubUser;
