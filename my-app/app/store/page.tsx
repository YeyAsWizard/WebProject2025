
import TodoItem from "@/components/TodoItem";
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";
import STYLE from "@/constants/style";
import { title } from "process";
import ProductCard from "@/components/store_ui/ProductCard";
import StoreHeader from "@/components/store_ui/StoreHeader";
import { getSession } from "@/utils/loginUser";
import { Session } from "inspector/promises";
import { useState } from "react";

const producty = [
  {title: "Laptop Acer 2017", price: 1000, stock: 10, sale: 20, image: "/p1/1.jpg"},
  {title: "Laptop Acer 2018", price: 1200, stock: 8, sale: 15, image: "/p2/2jpg"},
  {title: "Laptop Acer 2019", price: 1400, stock: 6, sale: 10, image: "/p3/3.jpg"},
  {title: "Laptop Acer 2020", price: 1600, stock: 4, sale: 5, image: "/p4/4.jpg"},
  {title: "Laptop Acer 2021", price: 1800, stock: 2, sale: 1, image: "/p5/5.jpg"},
  {title: "Laptop Acer 2022", price: 2000, stock: 0, sale: 0, image: "/p6/6.jpg"},
]
export default async function Store() {
  const [message, setMessage] = useState("")
  // const result = await prisma.product.create({
    // data:{
    //   title: "Laptop Acer 2022",
    //   price: 2000,
    //   stock: 0,
    //   sale: 0,
    //   likes: 200,
    //   image: "../../public/p6/6.jpg",
    // }
  // })
  // console.log(result)
  
  // const todo = await (await prisma.todo.findFirst())
  // const todos = await (await prisma.todo.findMany())
  // const todoX = await (await prisma.todo.findMany({where: {title: "xxx"}}))
  // const todoThird = todos[2];
  
  // function addBaseModels(){
  //   for(let i = 0; i>producty.length; )
  // }
  async function addProduct(formData: FormData){
    "use server"
    const title = formData.get("title") as string;
    const done = formData.get("done") === "on";
    console.log("title: ", title, "done: ", done? "true" : "false")
    await prisma.todo.create({  
      data: {
        title,
        done,
      }
    })
    revalidatePath("/simple_db")
  }
  function activate(){
    console.log("products in seed: ", producty.length)
    setMessage(producty.length.toString())
  }
  let session;
  try{
    session = await getSession()
    console.log(session)
  } catch(e){
    console.log("Error: ", e)
    session = null
  }
  const products = await (await prisma.product.findMany())

  console.log("First record:", products)

  return (
    <div>
      {JSON.stringify(session)}
      {/* Hello world!
      Simple DB
      find first : {JSON.stringify(products[0])}
      <hr />
      <br />
      find many : { JSON.stringify(products) }
      <hr />
      <br />
      find with condition todoX: { JSON.stringify(products) }
      <hr />
      <br />
      find third in todo: { JSON.stringify(products[2]) } */}
      <p className="flex text-2xl lg:text-3xl font-semibold mx-5 my-5">Store Page</p>
      <hr className="border-2 mb-5" />
      <ul className="grid mx-5 grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard 
          key={product.id}
          id={product.id}
          index={index}
          title={product.title}
          price={product.price}
          stock={product.stock}
          sale={product.sale}
          image={product.image}
          />
        ))}
      </ul>
      <div className="flex">
        <button className={`${STYLE} mr-5`} onClick={activate}>CLICK ME</button>
        ACTIVATION MESSAGE: {message}
      </div>
      {/* <div>
          <h2>Add task</h2>
          <form action={activate}>
            <input className={`${STYLE}`} type="text" name="title" placeholder="Title" />
            <input className={`${STYLE}`} type="checkbox" name="done" />
            <button className={`${STYLE}`} type="submit">Add</button>
          </form>

        </div> */}
    </div>
  )
}



