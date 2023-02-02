import { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { subscribe } from '../lib/events';

export function ModalForm({ header, children, trigger }) {
  const [open, setOpen] = useState(false);

  //Use to close the modal from another component
  subscribe('finish', () => setOpen(false));

  return (
    <Modal
      onClose={ () => setOpen(false) }
      onOpen={ () => setOpen(true) }
      open={ open }
      trigger={ trigger }
    >
      <Modal.Header>{ header }</Modal.Header>
      <Modal.Content>
        { children }
      </Modal.Content>
    </Modal>
  );
}