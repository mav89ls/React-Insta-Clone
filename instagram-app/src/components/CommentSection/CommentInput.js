import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        className="comment-submit"
        type="text"
        placeholder="Add comment... "
        value={props.comment}
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
