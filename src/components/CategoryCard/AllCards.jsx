import styles from "./AllCards.module.scss";
import CategoryCard from "./CategoryCard";
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
    <section className={styles.section}>
      {cards}
      <NoCard />
    </section>
  );
};

export default AllCards;
