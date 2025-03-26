import { useEffect, useState } from "react";
export default function Example() {
  const [result, setResult] = useState([2]);

  useEffect(() => {
    let update = true;

    async function start() {
      const str = await sum(2, 3);

      if (!update) {
        setResult([...result, str]);
      }

      console.log("....", update);
    }

    start();

    return () => {
      update = false;
    };
  }, []);

  return (
    <>
      <ul>
        {result.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </>
  );
}

function sum(a, b) {
  return a + b;
}
