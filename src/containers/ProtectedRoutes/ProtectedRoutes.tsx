import { useState, type FC } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router";
import { Layout } from "../../components/Layout/Layout";
import { buttonsWrapperStyle } from "./ProtectedRoutes.styles";
import { ProtectedRoutesContext, ProtectedRoutesUsers } from "../../context/protectedRoutesContext";

export const protectedRoutesPath = "/protected-routes";
export const protectedRoutesAdminPath = "/protected-routes/admin";
export const protectedRoutesAuthPath = "/protected-routes/auth";

export const ProtectedRoutes: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<ProtectedRoutesUsers>(null);
  const isMainPage = !!matchPath({ path: protectedRoutesPath, end: true }, pathname);
  const isAdminPage = !!matchPath({ path: protectedRoutesAdminPath, end: true }, pathname);
  const isAuthPage = !!matchPath({ path: protectedRoutesAuthPath, end: true }, pathname);
  const isAllowed = isMainPage || user === "admin" || (user === "user" && isAuthPage);

  return (
    <Layout>
      <div css={buttonsWrapperStyle}>
        {user ? (
          <button onClick={() => setUser(null)}>LogOut</button>
        ) : (
          <>
            <button onClick={() => setUser("user")}>LogIn user</button>
            <button onClick={() => setUser("admin")}>LogIn admin</button>
          </>
        )}
      </div>

      <div css={buttonsWrapperStyle}>
        {user === "admin" && (
          <button onClick={() => navigate(protectedRoutesAdminPath)} disabled={isAdminPage}>
            В админку
          </button>
        )}
        {!!user && (
          <button onClick={() => navigate(protectedRoutesAuthPath)} disabled={isAuthPage}>
            На страницу для авторизированных пользователей
          </button>
        )}
        <button onClick={() => navigate(protectedRoutesPath)} disabled={isMainPage}>
          На главную
        </button>
      </div>

      <ProtectedRoutesContext.Provider value={{ isAllowed, redirectPath: protectedRoutesPath }}>
        <Outlet />
      </ProtectedRoutesContext.Provider>
    </Layout>
  );
};
