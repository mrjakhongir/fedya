import Wrapper from "@/shared/ui//custom/wrapper";
import Menu from "./menu";

const HomePage = () => {
  const tg = window.Telegram?.WebApp;
  tg?.ready();

  const user = tg?.initDataUnsafe?.user;
  if (user) return <>user:{JSON.stringify(user)}</>;

  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default HomePage;
