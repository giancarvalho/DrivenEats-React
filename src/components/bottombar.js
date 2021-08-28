import { Link } from "react-router-dom";

export default function BottomBar(props) {
  const { status, text } = props.active;

  return (
    <div className={`bottom-bar ${status}`}>
      <Link to="/review">
        <button className={"checkout"}>{text}</button>
      </Link>
    </div>
  );
}
