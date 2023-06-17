import GitHubLogo from "../GitHubLogo";
import Loading from "../Loading";
import Alert from "../Alert";
import User from "../User";
import ListOfRepos from "../ListOfRepos";
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
        <div style={{ margin: "64px 0 0 0" }}>
          {" "}
          <User details={detailUser.user} />
          <ListOfRepos listRepos={detailUser.listRepos} />
        </div>
      )}
    </>
  );
}

export default GitHubUser;
