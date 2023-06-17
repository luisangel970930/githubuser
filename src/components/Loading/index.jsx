import "./loading.css";

function Loading() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "50vh" }}>
      <div style={{ display: "grid", gap: "6px" }}>
        <h3>Loading...</h3>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
