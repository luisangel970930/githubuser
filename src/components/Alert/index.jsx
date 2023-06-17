import "./alert.css";

function Alert({ status }) {
  return (
    <div className="message">
      <div className="alert">
        <span className="alert-text">
          {status == "404" ? "User Not Found" : "Something went wrong!!"}
        </span>
      </div>
    </div>
  );
}
export default Alert;
