import { useEffect, useState } from "react";
import { fetchComment } from "../Utlis/fetchComment";


export default function Comment({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function startfetching() {
      const json = await fetchComment(postId);
      if (!ignore) {
        setComments(json);
      }
    }
    startfetching();
    return () => {
      ignore = true;
    };
  }, [postId]);



  return (
    <>
      <ul>
        {comments.map((comment, i) => (
          <li key={comment.id}>{i + 1 + ".." + comment.name} </li>
        ))}
      </ul>
    </>
  );
}
