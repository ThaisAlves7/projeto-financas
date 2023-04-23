import useCloseMenu from "@/hooks/useCloseMenu";
import CardMenu from "../UI/CardMenu";

const HeaderMenu = ({ toggleMenuHandler }) => {
  const cardRef = useCloseMenu(toggleMenuHandler);

  return (
    <CardMenu ref={cardRef}>
      <li>Adicionar Salário</li>
    </CardMenu>
  );
};

export default HeaderMenu;
