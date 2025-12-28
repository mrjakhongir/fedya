import { useUserCheck } from "@/entities/user/api/query";
import Wrapper from "@/shared/ui//custom/wrapper";
import ScreenLoader from "@/widgets/loader";
import WebApp from "@twa-dev/sdk";
import { Navigate } from "react-router-dom";
import Menu from "./menu";

const HomePage = () => {
  const user = WebApp.initDataUnsafe?.user || {
    id: 467649937,
    first_name: "Jahongir",
    last_name: "Nusratov",
    username: "Mr_Jakhongir",
    photo_url:
      "https://t.me/i/userpic/320/5MLpWpkFap6yF2I-_3ZSQIFdaBSxilNYxYMfE7PIUX4.svg",
  };
  const { data, isPending } = useUserCheck(user.id);

  if (isPending) return <ScreenLoader />;

  if (data && !data.exists) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default HomePage;
