import iconSedans from "./assets/icon-sedans.svg"
import iconsuvs from "./assets/icon-suvs.svg"
import iconslux from "./assets/icon-luxury.svg"


export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange1 p-12 rounded-t-lg">
          <img className="mb-7" src={iconSedans} alt="icone ccarro amarelo " />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white ">SEDANS</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img className="mb-7" src={iconsuvs} alt="icon suvs" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark p-12 rounded-b-lg">
          <img className="mb-7" src={iconslux} alt="icon lux" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Luxury</h2>
          <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-dark" href="https://www.webmotors.com.br/carros/estoque/bmw/i7?estadocidade=estoque&marca1=BMW&modelo1=i7&autocomplete=i7&autocompleteTerm=BMW%20i7&lkid=1705&idcmpint=t1:c17:m07:webmotors:modelo::bmw%20i7" target="_blank">Ver mais</a>
        </div>

      </section>
    </main>
  )
}