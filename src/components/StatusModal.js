import { useEffect } from 'react';

function StatusModal({ type, message, onClose }) {
  useEffect(() => {
    if (!message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      onClose?.();
    }, 2500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [message, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className={`status-modal ${type === 'error' ? 'error' : 'success'}`} role="alert">
      <strong>{type === 'error' ? 'Error' : 'Success'}</strong>
      <span>{message}</span>
    </div>
  );
}

export default StatusModal;
