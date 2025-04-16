import Form from "./Component/Form";
import SaveButton from "./Component/SaveButton";
import StatusBus from "./Component/StatusBus";

export default function App() {
  return (
    <>
      <StatusBus />
      <SaveButton />
      <hr />
      <Form />
      
    </>
  );
}
