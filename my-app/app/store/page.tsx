
import TodoItem from "@/components/TodoItem";
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";
import STYLE from "@/constants/style";


export default async function SimpleDB() {

  const result = await prisma.todo.create({
    data:{
      title: "learn how to use prisma 3",
      done: true,
    }
  })
  console.log(result)
  
  const todo = await (await prisma.todo.findFirst())
  const todos = await (await prisma.todo.findMany())
  const todoX = await (await prisma.todo.findMany({where: {title: "xxx"}}))
  const todoThird = todos[2];

  // async function addTask(formData: FormData){
  //   "use server"
  //   const title = formData.get("title") as string;
  //   const done = formData.get("done") === "on";
  //   console.log("title: ", title, "done: ", done? "true" : "false")
  //   await prisma.todo.create({  
  //     data: {
  //       title,
  //       done,
  //     }
  //   })
  //   revalidatePath("/simple_db")
  // }

  // async function deleteTask(id:string){
  //   "use server"
  //   console.log("Delete task")
  //   await prisma.todo.delete({where: {id}})
  //   revalidatePath("/simple_db")
  // }

  // async function toggleTask(id: string, done: boolean) {
  //   "use server"
  //   console.log("Toggle task")
  //   await prisma.todo.update({
  //     where: { id },
  //     data: { done }
  //   })
  //   revalidatePath("/simple_db")
  // }

  console.log("First record:", todos)

  return (
    <div>
      Hello world!
      Simple DB
      find first : {JSON.stringify(todo)}
      <hr />
      <br />
      find many : { JSON.stringify(todos) }
      <hr />
      <br />
      find with condition todoX: { JSON.stringify(todoX) }
      <hr />
      <br />s
      find third in todo: { JSON.stringify(todoThird) }
      {/* <ul>
        {todos.map((todo, index) => (
          <TodoItem 
          key={todo.id}
          id={todo.id}
          index={index}
          title={todo.title}
          done={todo.done}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          />
        ))}
      </ul>

        <div>
          <h2>Add task</h2>
          <form action={addTask}>
            <input className={`${STYLE}`} type="text" name="title" placeholder="Title" />
            <input className={`${STYLE}`} type="checkbox" name="done" />
            <button className={`${STYLE}`} type="submit">Add</button>
          </form>

        </div> */}

    </div>
  )
}
