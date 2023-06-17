import { useRef } from "react";
import "./search.css";
function GitHubUserSearch({ onSubmit }) {
  const name = useRef(null);

  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(name.current.value);
      }}
    >
      <input ref={name} type="text" placeholder="User"></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default GitHubUserSearch;
