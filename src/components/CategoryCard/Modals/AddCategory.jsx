import Modal from "@/components/UI/Modal";
import { toggleAddCategory } from "@/store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../UI/Modal.module.scss";

const AddCategory = () => {
  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title="Nova Categoria"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Título:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Essencial"
            />
          </div>

          <div className={styles["label-input"]}>
            <label htmlFor="porcentagem" className="p">
              Porcentagem Alocada:
            </label>
            <input
              type="text"
              id="porcentagem"
              name="porcentagem"
              placeholder="%"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategory;
