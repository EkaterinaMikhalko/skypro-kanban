import Cards from "../Cards/Cards";
import { ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      {cardList.map((card) => (
        <Cards
          title={card.title}
          topic={card.topic}
          date={card.date}
          key={card._id}
          id={card._id}
        />
      ))}
    </MainColumn>
  );
}
