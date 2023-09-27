import { sql } from "~~/server/dbcon";

export const read = async () => {
  const result = await sql({
    query: "SELECT id, title, is_complete, created_at FROM todo_tasks",
  });
  return result;
};

export const create = async (data) => {
  await sql({
    query: `INSERT INTO todo_tasks (title) VALUES (?)`,
    values: [data.title],
  });
  return true;
};

export const details = async (data) => {
  const result = await sql({
    query: "SELECT id FROM todo_tasks WHERE title = ?",
    values: [data.title],
  });
  return !!result.length;
};

export const update = async (id) => {
  await sql({
    query: `UPDATE todo_tasks SET is_complete = ? WHERE id = ?`,
    values: [true, id],
  });
  return await read();
};

export const remove = async (id) => {
  await sql({
    query: "DELETE FROM todo_tasks WHERE id = ?",
    values: [id],
  });
  return await read();
};
