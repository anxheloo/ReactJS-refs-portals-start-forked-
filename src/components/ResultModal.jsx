import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ result, targetTime, timeRemaining, setTimeRemaining }, ref) => {
    const dialog = useRef();

    // const userLost =
    // timeRemaining <=
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return (
      <dialog ref={dialog} className="result-modal">
        {userLost && <h2>You Lost</h2>}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>
            {targetTime * 1000 - timeRemaining} milliseconds left.
          </strong>
        </p>
        <form method="dialog">
          <button
            onClick={() => setTimeRemaining(targetTime * 1000)}
            onClose={() => setTimeRemaining(targetTime * 1000)}
          >
            Close
          </button>
        </form>
      </dialog>
    );
  },
);

export default ResultModal;
