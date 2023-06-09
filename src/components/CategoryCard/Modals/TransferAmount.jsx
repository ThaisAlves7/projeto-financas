import Modal from "@/components/UI/Modal";
import { toggleTransferAmount } from "@/store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../UI/Modal.module.scss";

const TransferAmount = () => {
  const { isVisible, category } = useSelector(
    (state) => state.ui.transferAmount
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleTransferAmount(null))}
      title="Transferir"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <p>De</p>
            <p className="caption">Pessoal</p>
          </div>

          <div className={styles["label-input"]}>
            <label htmlFor="destination">Para</label>
            <select name="destination" id="destination" className="max-width">
              <option value="essencial">Essencial</option>
              <option value="viagem">Viagem</option>
              <option value="acoes">Ações</option>
            </select>
          </div>

          <div className={styles["label-input"]}>
            <label htmlFor="amount" className="p">
              Valor:
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="R$"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Transferir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TransferAmount;
