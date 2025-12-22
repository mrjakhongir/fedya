import { useUserLogin } from "@/entities/user/api/query";
import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { paths } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";

const OnboradingPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { mutate: login } = useUserLogin({
    onSuccess: (data) => {
      setUser(data);
      navigate(paths.home);
    },
  });

  const user = WebApp.initDataUnsafe?.user || {
    id: 467649937,
    first_name: "Jahongir",
    last_name: "Nusratov",
    username: "Mr_Jakhongir",
    photo_url:
      "https://t.me/i/userpic/320/5MLpWpkFap6yF2I-_3ZSQIFdaBSxilNYxYMfE7PIUX4.svg",
  };

  const startApp = () => {
    login(user);
  };

  return (
    <Wrapper className="flex h-screen flex-col items-center justify-center gap-3">
      <div className="h-25 w-25 overflow-hidden rounded-full">
        <img src={user.photo_url} alt={user.username} />
      </div>
      <h1 className="text-2xl font-semibold">Hello, {user.first_name}</h1>

      <p className="text-slate-600">
        Welcome to <span className="text-amber-600">My Assist </span>🎉
      </p>
      <Button onClick={startApp}>Start</Button>
    </Wrapper>
  );
};

export default OnboradingPage;
