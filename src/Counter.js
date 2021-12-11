import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
export function Counter() {
  const [like, setLike] = useState(0);
  //   const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const decrementLike = (Like) => {
  if (Like<=0){
      return;
  } else {
  setLike(like - 1);}
}

  return (
    <div className="counter-container">
      <IconButton
        className="likes-dislikes"
        onClick={incrementLike}
        aria-label="like"
        color="primary"
      >
        <Badge color="primary">➕</Badge>
      </IconButton>

      <IconButton
        className="likes-dislikes "
        onClick={decrementLike}
        aria-label="dislike"
        color="error"
      >
        <Badge color="error">➖</Badge>
      </IconButton>
      {/* <IconButton> */}
      <Badge badgeContent={like}>🛒</Badge>
      {/* </IconButton> */}
    </div>
  );
}
