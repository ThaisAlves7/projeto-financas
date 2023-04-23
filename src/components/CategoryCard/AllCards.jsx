import styles from "./AllCards.module.scss";
import CategoryCard from "./CategoryCard";
import AddAmount from "./Modals/AddAmount";
import AddCategory from "./Modals/AddCategory";
import EditCategory from "./Modals/EditCategory";
import SubtractAmount from "./Modals/SubtractAmount";
import TransferAmount from "./Modals/TransferAmount";
import NoCard from "./NoCard";

const DUMMY_DATA = [
  { id: 1, title: "Essencial", amount: 400, percentage: 10 },
  { id: 2, title: "Viagem", amount: 8000, percentage: 50 },
  { id: 3, title: "Ações", amount: 4400, percentage: 30 },
];

const AllCards = () => {
  const cards = DUMMY_DATA.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ));

  return (
    <>
      <AddAmount />
      <SubtractAmount />
      <TransferAmount />
      <EditCategory />
      <AddCategory />

      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  );
};

export default AllCards;
