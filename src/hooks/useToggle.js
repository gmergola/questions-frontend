import { useState } from 'react';

/**useToggle: A hook to toggle state between true and false */
function useToggle(initialValue=false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(v => !v);
  }

  return [value, toggle];
}

export default useToggle;