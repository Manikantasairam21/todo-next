import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return Response.json(
      {
        data: todos,
        message: "Successfully fetched todos",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: `Server Error ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, description } = await request.json();
    if (!name || !description) {
      return Response.json(
        { message: "Name and description are required" },
        { status: 400 }
      );
    }
    await prisma.todo.create({
      data: {
        name,
        description,
        completed: false,
      },
    });

    // const newTodos = await prisma.todo.findMany();

    return Response.json(
      {
        // data: newTodos,
        message: "Successfully added new todo",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: `Server Error ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { id, completed } = await request.json();

    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });

    // const newTodos = await prisma.todo.findMany();
    return Response.json(
      {
        // data: newTodos,
        message: "Succesfully Updated a todo",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: `Server Error ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    if (!id)
      return Response.json({ message: "id is required" }, { status: 400 });
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    // const newTodos = await prisma.todo.findMany();

    return Response.json(
      {
        // data: newTodos,
        message: "Succesfully deleted a Todo",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: `Server Error ${error.message}`,
      },
      { status: 500 }
    );
  }
}
