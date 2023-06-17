import GitHubLogo from "../GitHubLogo";
import GitHubUserSearch from "../GitHubUserSearch";
import useSearch from "../../hooks/useSearch";

function GitHubUser() {
  const { loading, detailUser, error, requestUser } = useSearch();
  console.log(detailUser);

  return (
    <>
      <GitHubLogo />
      <GitHubUserSearch onSubmit={requestUser} />
    </>
  );
}

export default GitHubUser;
