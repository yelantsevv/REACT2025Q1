import { useState } from 'react';
import styles from './ErrorButton.module.css';
import { StateError } from '../../types/types';

export default function ErrorButton() {
  const [state, setState] = useState<StateError>({ error: null });

  function throwError() {
    setState({ error: new Error('Triggered Error') });
  }

  if (state.error) {
    throw new Error(`Error Boundary: ${state.error.message}`);
  }

  return (
    <button className={styles.error} onClick={() => throwError()}>
      Error Button
    </button>
  );
}
