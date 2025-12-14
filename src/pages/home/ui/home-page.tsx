import Wrapper from "@/shared/ui//custom/wrapper";
import WebApp from "@twa-dev/sdk";
import Menu from "./menu";

const HomePage = () => {
  console.log(WebApp.initDataUnsafe);
  const user = WebApp.initDataUnsafe?.user;
  if (user) return <>user:{JSON.stringify(user)}</>;

  return (
    <Wrapper>
      user
      <Menu />
    </Wrapper>
  );
};

export default HomePage;
