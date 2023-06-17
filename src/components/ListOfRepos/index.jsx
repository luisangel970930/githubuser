function ListOfRepos({ listRepos }) {
  return (
    <div className="list" style={{ display: "grid", margin: "32px 0" }}>
      <h3>Recent Repositories</h3>

      {listRepos?.map((repo) => {
        return (
          <blockquote key={repo.id} style={{ margin: "16px 0" }}>
            <h3>{repo.name}</h3>
            <h4>{repo.description}</h4>
          </blockquote>
        );
      })}
    </div>
  );
}

export default ListOfRepos;
