
import TodoItem from "@/components/TodoItem";
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";
import STYLE from "@/constants/style";
import { title } from "process";
import ProductCard from "@/components/store_ui/ProductCard";
import StoreHeader from "@/components/store_ui/StoreHeader";
import { getSession } from "@/utils/loginUser";
import { Session } from "inspector/promises";


export default async function Store() {

  // const result = await prisma.product.create({
  //   data:{
  //     title: "Laptop Acer 2022",
  //     price: 2000,
  //     stock: 0,
  //     sale: 0,
  //     likes: 200,
  //     image: "../../public/p6/6.jpg",
  //   }
  // })
  // console.log(result)
  
  // const todo = await (await prisma.todo.findFirst())
  // const todos = await (await prisma.todo.findMany())
  // const todoX = await (await prisma.todo.findMany({where: {title: "xxx"}}))
  // const todoThird = todos[2];
  
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
      <StoreHeader />
      <p className="flex text-2xl lg:text-3xl  font-semibold mx-5 my-5">Store Page</p>
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
    </div>
  )
}
