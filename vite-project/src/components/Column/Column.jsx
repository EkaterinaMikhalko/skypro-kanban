import Cards from "../Cards/Cards";

function Column({title}) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <Cards title = "Название задачи" topic = "Web design"/>
      <Cards title = "Название задачи" topic = "Research"/>
      <Cards title = "Название задачи" topic = "Web design"/>
      <Cards title = "Название задачи" topic = "Research"/>
      <Cards title = "Название задачи" topic = "Web design"/>
    </div>
  );
}
export default Column;
