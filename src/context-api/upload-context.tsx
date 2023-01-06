import { useState, createContext } from "react";

export const ContextApi = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [openModalMobile, setOpenModalMobile] = useState(false);

  const [popupMessage, setPopupMessage] = useState<any>({
    isVisible: false,
    message: "",
    severity: "",
  });

  return (
    <ContextApi.Provider
      value={{
        popupMessage,
        setPopupMessage,
        openModalMobile,
        setOpenModalMobile,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
