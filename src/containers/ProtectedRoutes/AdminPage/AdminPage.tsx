import { useContext, type FC } from "react";
import { ProtectedRoutesContext } from "../../../context/protectedRoutesContext";
import { Navigate } from "react-router";

export const AdminPage: FC = () => {
  const { isAllowed, redirectPath } = useContext(ProtectedRoutesContext);

  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return <div>AdminPage</div>;
};
