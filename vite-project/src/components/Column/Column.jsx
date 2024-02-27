import Cards from "../Cards/Cards";
import { ColumnTitle } from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      {cardList.map((card) => (
        <Cards
          title={card.title}
          topic={card.theme}
          date={card.date}
          key={card.id}
          id={card.id}
        />
      ))}
    </div>
  );
}
export default Column;
