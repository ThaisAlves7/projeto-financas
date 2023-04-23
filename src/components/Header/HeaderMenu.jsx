import useCloseMenu from "@/hooks/useCloseMenu";
import CardMenu from "../UI/CardMenu";
import { toggleAddSalary } from "@/store/ui-Slice";
import { useDispatch } from "react-redux";

const HeaderMenu = ({ toggleMenuHandler }) => {
  const cardRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={cardRef}>
      <li onClick={() => dispatch(toggleAddSalary(null))}>Adicionar Salário</li>
    </CardMenu>
  );
};

export default HeaderMenu;
