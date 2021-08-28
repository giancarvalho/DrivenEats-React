export default function BottomBar(props) {
  const { status, text } = props.active;

  return (
    <div className={`bottom-bar`}>
      <button className={`checkout ${status}`}>{text}</button>
    </div>
  );
}
