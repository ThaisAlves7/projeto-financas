import useGetCurrency from "@/hooks/useGetCurrency";
import { TbPencil } from "react-icons/tb";
import styles from "./CategoryCard.module.scss";
import CategoryMenu from "./CategoryMenu";
import useMenu from "@/hooks/useMenu";

const CategoryCard = ({ data }) => {
  const { title, amount, percentage } = data;

  //Hook para tornar visível/invisível as opções de edição
  const [isVisible, toggleMenuHandler] = useMenu();

  //Hook de conversão de moeda
  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" onClick={toggleMenuHandler} />
        {isVisible && <CategoryMenu toggleMenuHandler={toggleMenuHandler} />}
      </div>

      <h2>{title}</h2>
      <h3>{formatedAmount}</h3>
      <h4>Alocado: {percentage}%</h4>
    </div>
  );
};

export default CategoryCard;
