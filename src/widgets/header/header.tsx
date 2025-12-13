import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import { ArrowLeft } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="overflow-hidden rounded-b-xl bg-white">
      <Wrapper className="flex items-center justify-between bg-white py-3">
        <Button size="icon-sm" variant="secondary" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <h1 className="flex-1 text-center text-lg font-semibold">{title}</h1>
      </Wrapper>
    </header>
  );
};

export default Header;
