import useOnlineStatus from "../Hooks/useOnlineStatus";
export default function StatusBus() {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
}
