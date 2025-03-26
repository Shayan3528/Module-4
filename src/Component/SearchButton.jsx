export default function SearchButton({onClick}) {
  return (
    <>
      <button 
      onClick= {onClick}
      className=" border border-gray-400 px-3 py-0.5 rounded ml-10">
        {" "}
        Search
      </button>
    </>
  );
}
