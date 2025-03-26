export default function SearchInput({ ref }) {
  return (
    <>
      <input
        ref={ref}
        type="text"
        className="border border-gray-400 rounded m-10 "
      />
    </>
  );
}
