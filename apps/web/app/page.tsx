import { prismaClient } from "db/client"


export default async function Home(){

  const users=await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple Next.js application.</p>
    </div>
  )
}



export const dynamic = 'force-dynamic'