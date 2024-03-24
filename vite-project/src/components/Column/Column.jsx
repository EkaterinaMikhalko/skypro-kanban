import Cards from "../Cards/Cards";
import { ColumnTitle, ColumnTitleP, MainColumn } from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      {cardList.map((task) => (
        <Cards
          title={task.title}
          topic={task.topic}
          date={task.date}
          key={task._id}
          id={task._id}
        />
      ))}
    </MainColumn>
  );
}
