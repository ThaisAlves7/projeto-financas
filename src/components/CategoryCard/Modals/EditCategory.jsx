import Modal from "@/components/UI/Modal";
import { toggleEditCategory } from "@/store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../UI/Modal.module.scss";

const EditCategory = () => {
  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleEditCategory(null))}
      title="Editar"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Título:
            </label>
            <input type="text" id="title" name="title" />
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
            <button type="button" className="btn btn-secondary">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
