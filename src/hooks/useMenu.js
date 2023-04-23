import { useState } from "react";

const useMenu = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleMenuHandler = () => setVisible(!isVisible);

  return [isVisible, toggleMenuHandler];
};

export default useMenu;
