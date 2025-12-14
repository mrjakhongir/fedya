import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { paths } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnboradingPage = () => {
  const navigate = useNavigate();
  const { setUser, user: authUser } = useAuthStore();
  const user = WebApp.initDataUnsafe?.user || {
    id: 467649937,
    first_name: "Jahongir",
    last_name: "Nusratov",
    username: "Mr_Jakhongir",
    photo_url:
      "https://t.me/i/userpic/320/5MLpWpkFap6yF2I-_3ZSQIFdaBSxilNYxYMfE7PIUX4.svg",
  };
  const startApp = () => {
    setUser(user);
    navigate(paths.tests.root, { replace: true });
  };

  useEffect(() => {
    if (authUser) {
      navigate(paths.tests.root, { replace: true });
    }
  }, []);

  return (
    <Wrapper className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-semibold">
        Welcome to <span className="text-amber-600">My Test </span>🎉
      </h1>
      <p className="text-slate-600">Have a good journey</p>
      <Button onClick={startApp}>Start</Button>
    </Wrapper>
  );
};

export default OnboradingPage;
