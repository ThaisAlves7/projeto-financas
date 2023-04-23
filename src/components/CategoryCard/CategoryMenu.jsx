import useCloseMenu from "@/hooks/useCloseMenu";
import CardMenu from "../UI/CardMenu";

const CategoryMenu = ({ toggleMenuHandler }) => {
  const menuRef = useCloseMenu(toggleMenuHandler);

  return (
    <CardMenu ref={menuRef}>
      <li>Editar</li>
      <li>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
