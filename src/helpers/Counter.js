import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
export function Counter({ count, setCount }) {
  const incrementCount = () => {
    if (count >= 10) {
      return;
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <IconButton
        className="likes-dislikes"
        onClick={incrementCount}
        aria-label="like"
        color="primary"
      >
        <Badge color="primary">➕</Badge>
      </IconButton>
      <input
        value={count}
        readOnly
        style={{ width: 30, textAlign: "center" }}
      />
      <IconButton
        className="likes-dislikes "
        onClick={decrementCount}
        aria-label="dislike"
        color="error"
      >
        <Badge color="error">➖</Badge>
      </IconButton>
    </div>
  );
}
