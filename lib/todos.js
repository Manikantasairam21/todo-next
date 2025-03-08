"use server";

import { revalidatePath } from "next/cache";

const domain = "http://localhost:3000";

export async function getTodods() {
  try {
    const response = await fetch(`${domain}/api/todos`);
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addTodo(name, description) {
  try {
    const response = await fetch(`${domain}/api/todos`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
    });
    const todos = await response.json();
    revalidatePath("/");
    // return todos;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${domain}/api/todos`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const todos = await response.json();
    revalidatePath("/");
    // return todos;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, completed) {
  try {
    const response = await fetch(`${domain}/api/todos`, {
      method: "PUT",
      body: JSON.stringify({ id, completed }),
    });
    const todos = await response.json();
    revalidatePath("/");
    // return todos;
  } catch (error) {
    console.log(error);
  }
}
