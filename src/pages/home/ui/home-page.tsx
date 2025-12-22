import { useUserCheck } from "@/entities/user/api/query";
import Wrapper from "@/shared/ui//custom/wrapper";
import WebApp from "@twa-dev/sdk";
import { Loader } from "lucide-react";
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

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="animate-spin" size={40} />
      </div>
    );
  }
  console.log(data);

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
