import "./logo.css";
function GitHubLogo() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        margin: "32px 0",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="avatar">
        <img src="https://github.com/fluidicon.png" alt="GitHub" />
      </div>
      <h1>GitHub Report</h1>
    </div>
  );
}

export default GitHubLogo;
