import { useState } from "react";

export default function useForm() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange,
  };
}
