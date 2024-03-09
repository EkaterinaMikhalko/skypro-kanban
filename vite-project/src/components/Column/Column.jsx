import Cards from "../Cards/Cards";
import { ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cardList }) {
  console.log(cardList);
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
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
