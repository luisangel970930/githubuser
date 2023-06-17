function User({ details }) {
  return (
    <>
      <div style={{ display: "flex", gap: "16px" }}>
        <div className="avatar">
          <img src={details.avatar_url} alt={details.login} />
        </div>
        <section style={{ display: "grid", gap: "16px", padding: "16px" }}>
          <div>
            Followers: <strong>{details.followers}</strong>
          </div>
          <div>
            Public Repositories: <strong>{details.public_repos}</strong>
          </div>
        </section>
      </div>
      <h2>{details.name}</h2>
      <h4>{details.bio}</h4>
    </>
  );
}

export default User;
