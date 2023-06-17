function ListOfRepos({ listRepos }) {
  return (
    <div className="list" style={{ display: "grid", margin: "32px 0" }}>
      <h3>Recent Repositories</h3>

      {listRepos?.map((repo) => {
        return (
          <blockquote key={repo.id} style={{ margin: "16px 0" }}>
            <strong>{repo.name}</strong>
            <div>{repo.description}</div>
          </blockquote>
        );
      })}
    </div>
  );
}

export default ListOfRepos;
