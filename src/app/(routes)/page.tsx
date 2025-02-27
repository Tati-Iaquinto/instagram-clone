import { signIn, auth, signOut } from "@/auth";


export default async function Home() {
  const session = await auth() //o await pede para colocar async antes da função Home

  return (
   <>
   <div className="">

    {/*Caso o login já tenha sido feito, o botão que aparece é o de logout*/}
   {session && (
      <form action={async () => {
        // Login com conta do Google - usar OAuth e criar um cliente no Google Cloud
        'use server'
        await signOut()
      }}>
        <button type="submit" className="border px-4 py-2 bg-ig-red text-white rounded-lg">Logout</button>
      </form>
   )}
   
   {/*Caso o login já tenha sido feito, o botão fica invisível */}
   {!session && (
      <form action={async () => {
        // Login com conta do Google - usar OAuth e criar um cliente no Google Cloud
        'use server'
        await signIn('google')
      }}>
        <button type="submit" className="border px-4 py-2 bg-ig-red text-white rounded-lg">Login with Google</button>
      </form>
   )}
   </div>
   </>
  );
}
