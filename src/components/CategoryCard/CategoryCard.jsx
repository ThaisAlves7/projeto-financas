import useGetCurrency from "@/hooks/useGetCurrency";
import { TbPencil } from "react-icons/tb";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ data }) => {
  const { title, amount, percentage } = data;

  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" />
      </div>

      <h2>{title}</h2>
      <h3>{formatedAmount}</h3>
      <h4>Alocado: {percentage}%</h4>
    </div>
  );
};

export default CategoryCard;
