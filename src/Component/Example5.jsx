import { useEffect, useState } from "react";

export default function Example5() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);


  const [jsonToSubmit, setJsonTOSubmit] = useState(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonTOSubmit({ firstName, lastName });
  }

  function post( url, data ) {
    console.log(`Posted to url ${url} with data ${JSON.stringify(data)}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="border border-gray-400 rounded inline-block m-2 ">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full h-auto"
          />
        </span>
        <span className="border border-gray-400 rounded inline-block m-2 ">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-auto"
          />
        </span>
        <button
          type="submit"
          className="border border-gray-400 px-3 m-3 rounded w-auto h-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
