import { useState } from 'react';

function Alert() {
  const [isOpen, setIsOpen] = useState(true);

  const handleAlertClose = () => {
    setIsOpen(false);
  };

  const handleAlertOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {isOpen && (
        <div className="alert">
          <p>Get Bing Bonged</p>
          <button onClick={handleAlertClose}>Close</button>
        </div>
      )}
      {!isOpen && (
        <button onClick={handleAlertOpen}>Open Alert</button>
      )}
    </div>
  );
}

export default Alert;

