import { TaskPriority } from "./taskPriority";

export type Task = {
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: Date;
};
