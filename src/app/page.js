import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(data) {

  'use server'

  const newUser = await prisma.user.create({
    data: {
      name: data.get('name') ,
      email: data.get('email'),
      password:data.get('pass'),
      token:"test",
      verified:false,
    },
  });

  console.log("data is ",data);


}

export default function Home() {
  //createUser();

  return (
    <div className="flex items-center text-black max-w-xl mx-auto h-screen border-black border-2">
      <div className="flex flex-col mx-auto gap-8 ">
        <div className="text-center ">Signup to Zingnow!</div>
        <form action={createUser} className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2">
            <input
              type="string"
              placeholder="Enter your name"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email id"
              name="email"
            />
            <input type="password" placeholder="Enter password" name="pass" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white max-w-xs rounded-sm p-1 text-xs"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
