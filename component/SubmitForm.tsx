"use client";
import { PrioritiesList } from "@/constants/prority";
import { Task } from "@/types/task";
import { useForm } from "react-hook-form";

export const SubmitForm = ({
  createTask,
}: {
  createTask: (newTask: Task) => void;
}) => {
  const { register, handleSubmit } = useForm<Task>();

  return (
    <form
      data-testid="todo-submit-form"
      aria-label="form"
      onSubmit={handleSubmit((data) => createTask(data))}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...register("title")} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" {...register("description")} />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select id="priority" {...register("priority")}>
          {PrioritiesList.map((priority, index) => {
            return (
              <option key={index} value={priority}>
                {priority}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input id="dueDate" {...register("dueDate")} type="date" />
      </div>
      <button type="submit">Submit Task</button>
    </form>
  );
};
