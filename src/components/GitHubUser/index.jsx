import GitHubLogo from "../GitHubLogo";
import Loading from "../Loading";
import Alert from "../Alert";
import User from "../User";
import GitHubUserSearch from "../GitHubUserSearch";
import useSearch from "../../hooks/useSearch";

function GitHubUser() {
  const { loading, detailUser, error, requestUser } = useSearch();

  return (
    <>
      <GitHubLogo />
      <GitHubUserSearch onSubmit={requestUser} />
      {loading && <Loading />}
      {error && !loading && !detailUser.user && <Alert status={error} />}
      {!loading && detailUser && !error && (
        <>
          {" "}
          <User details={detailUser.user} />
        </>
      )}
    </>
  );
}

export default GitHubUser;
