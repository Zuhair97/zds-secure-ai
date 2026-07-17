"use client";

import { createContext, useState } from "react";

export const CurrentDeviceContext = createContext(null);

export default function CurrentDeviceProvider({ children }) {
  const [currentDevice, setCurrentDevice] = useState(null);

  return (
    <CurrentDeviceContext.Provider
      value={{
        currentDevice,
        setCurrentDevice,
      }}
    >
      {children}
    </CurrentDeviceContext.Provider>
  );
}
