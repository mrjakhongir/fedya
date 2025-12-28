import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import { ArrowLeft } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  link: string;
};

const Header: React.FC<Props> = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <header className="overflow-hidden rounded-b-xl bg-white shadow-sm">
      <Wrapper className="flex items-center justify-between py-3">
        <Button
          size="icon-sm"
          variant="secondary"
          onClick={() => navigate(link)}
        >
          <ArrowLeft />
        </Button>
        <h1 className="flex-1 text-center text-lg font-semibold">{title}</h1>
      </Wrapper>
    </header>
  );
};

export default Header;
