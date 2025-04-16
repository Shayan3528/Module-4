import useForm from "../Hooks/useForm";

export default function Form() {
  const firstName = useForm("");
  const lastName = useForm("");

  return (
    <div className="flex flex-col gap-2 m-3">
      <input
        type="text"
        value={firstName.value}
        onChange={firstName.onChange}
        className="border border-gray-400 rounded px-2 w-1/5 "
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName.value}
        onChange={lastName.onChange}
        className="border border-gray-400 rounded px-2 w-1/5 "
        placeholder="Last Name"
      />

      <p> {`Good Afternoon: ${firstName.value}  ${lastName.value}`}</p>
    </div>
  );
}
