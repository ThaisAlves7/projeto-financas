import { forwardRef } from "react";
import styles from "./CardMenu.module.scss";

const CardMenu = forwardRef(({ children }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
});

CardMenu.displayName = "CardMenu";

export default CardMenu;
