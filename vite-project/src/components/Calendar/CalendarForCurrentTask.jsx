import { DayPicker } from "react-day-picker";
import { useTask } from "../../hooks/useTasks";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

export default function CalendarForCurrentTask({
  selectedDate,
  setSelectedDate,
}) {
  const { tasks } = useTask();
  const { id } = useParams();
  let currentTask = tasks.find((item) => item._id === id);
  let footer = (
    <p>Срок исполнения: {format(currentTask.date, "PP", { locale: ru })}</p>
  );
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
}
