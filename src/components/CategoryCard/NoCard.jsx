import { TbPlus } from "react-icons/tb";
import styles from "./NoCard.module.scss";
import { toggleAddCategory } from "@/store/ui-Slice";
import { useDispatch } from "react-redux";

const NoCard = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles["no-card"]}
      onClick={() => dispatch(toggleAddCategory(null))}
    >
      <TbPlus className="icon" />
    </div>
  );
};

export default NoCard;
