import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["c", "e", "f"],
    Doing: ["a", "b"],
    Done: ["d"],
    "Do Later": ["x", "z"],
  },
});
