import { useState } from "react";

function QueueExample() {
  const [notifications, setNotifications] = useState([]);
  const onClick = () => {
    setNotifications([...notifications, 'Invite Message']);

    setTimeout(() => setNotifications((prev) => prev.slice(1)), 1000);
  };

  return (
    <div>
      <button onClick={onClick}>
        Invite User To Community
      </button>
      <aside>
        {notifications.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </aside>
    </div>
  );
}

export default QueueExample;
