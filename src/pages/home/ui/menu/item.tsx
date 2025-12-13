import { Link } from "react-router-dom";
import type { Item } from "../../model/types";

type Props = {
  item: Item;
};

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="rounded-md bg-white shadow-sm">
      <Link
        to={item.url}
        className="inline-flex h-40 w-full flex-col items-center justify-center gap-3"
      >
        {<item.icon className="h-8 w-8 text-slate-600" />}
        <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
      </Link>
    </li>
  );
};

export default MenuItem;
