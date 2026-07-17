"use client";

import { useContext } from "react";
import { CurrentDeviceContext } from "@/contexts/CurrentDeviceProvider";

export function useCurrentDevice() {
  const context = useContext(CurrentDeviceContext);

  if (!context) {
    throw new Error(
      "useCurrentDevice must be used inside CurrentDeviceProvider"
    );
  }

  return context;
}

export { CurrentDeviceContext } from "@/contexts/CurrentDeviceProvider";
