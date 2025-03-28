import { useState } from "react";
import useData from "../Hook/useData";
export default function SearchResult() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const results = useData(query, page);

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-400  m-5  rounded  px-2 py-0.2"
        />
      </div>
      <hr className="ml-5 mr-5 border-gray-400 " />
      <div>
        <ul className=" flex gap-2 list-none  ml-8 ">
          <li>
            <button
              className=" border border-gray-400 px-2 m-2 rounded "
              onClick={() => setPage(1)}
            >
              {" "}
              1
            </button>
          </li>
          <li>
            <button
              className=" border border-gray-400 px-2 m-2 rounded"
              onClick={() => setPage(2)}
            >
              {" "}
              2
            </button>
          </li>
          <li>
            <button
              className=" border border-gray-400 px-2 m-2 rounded"
              onClick={() => setPage(3)}
            >
              {" "}
              3
            </button>
          </li>
          <li>
            <button
              className=" border border-gray-400 px-2 m-2 rounded"
              onClick={() => setPage(4)}
            >
              {" "}
              4
            </button>
          </li>
        </ul>
      </div>

      <hr className="ml-5 mr-5 border-gray-400" />

      {results}
    </div>
  );
}
