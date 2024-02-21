export default function ModalStrcture({ id, header, body, footer, onClose }) {
    return (
      <div id={id || "Modal"} className="modal-strcture">
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={onClose} className="modal-close-icon">&times;</span>
            <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="modal-body">
            {body ? (
              body
            ) : (
              <div>
                <p>This is our Modal Body</p>
              </div>
            )}
          </div>
          <div className="modal-footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    );
  }