import Cards from "../Cards/Cards";

function Column({title, cardList}) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      {cardList.map ((card) => <Cards title = {card.title} topic = {card.theme} date = {card.date} key = {card.id}/>)}

    </div>
  );
}
export default Column;