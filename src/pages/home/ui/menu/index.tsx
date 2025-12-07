import { menuItems } from "../../model/constants";
import MenuItem from "./item";

const Menu = () => {
  return (
    <div className="flex h-screen flex-col py-10">
      <ul className="mt-auto grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
