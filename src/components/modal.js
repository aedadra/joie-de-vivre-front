import { useEffect, useRef } from "react";
function Modal({ children, isOpen, handleClose }) {
    // 👇 L'usage de cet ref va particulièrement nous intéresser 
    const dialogRef = useRef(null);

    const close = () => {
        dialogRef.current?.close();
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen && !dialogRef.current?.open) {
            dialog?.showModal(); // 👈 usage propre à l'élément <dialog>
        } else {
            dialog?.close(); // 👈 usage propre à l'élément <dialog>
        }
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            // 👇 capture l'élément 'close' et mise à jour de l'état du composant
            onClose={handleClose}
        >
            {children}

            <button
                type="button"
                onClick={close}
                title="close modal"
                aria-label="close modal"
            >
                fermer
            </button>
        </dialog>
    );
}

export default Modal