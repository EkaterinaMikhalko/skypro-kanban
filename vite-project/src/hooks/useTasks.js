import { useContext } from "react";
import { TaskContext } from "../contexts/tasks";

export function useTask (){
    return useContext (TaskContext);
}