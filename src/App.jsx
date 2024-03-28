import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxo from "./components/Luxo"


export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 lg:flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans />

        <Suvs />

        <Luxo />
        

      </section>
    </main>
  )
}