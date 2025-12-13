import Wrapper from "@/shared/ui//custom/wrapper";
import { useEffect, useState } from "react";
import Menu from "./menu";

const HomePage = () => {
  const [user, setUser] = useState<TelegramUser | undefined>(undefined);
  const tg = window.Telegram?.WebApp;
  tg?.ready();

  const tgUser = tg?.initDataUnsafe?.user;

  useEffect(() => {
    setUser(tgUser);
    alert(JSON.stringify(tgUser));
  }, [tgUser]);

  if (user) return <>user:{JSON.stringify(user)}</>;

  return (
    <Wrapper>
      user
      <Menu />
    </Wrapper>
  );
};

export default HomePage;
