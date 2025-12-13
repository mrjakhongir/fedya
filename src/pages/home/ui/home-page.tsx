import Wrapper from "@/shared/ui//custom/wrapper";
import Menu from "./menu";

const HomePage = () => {
  const user = window.Telegram.WebApp.initDataUnsafe.user;

  return (
    <Wrapper>
      {JSON.stringify(user)}
      <Menu />
    </Wrapper>
  );
};

export default HomePage;
