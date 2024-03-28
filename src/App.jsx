import iconSedans from "./assets/icon-sedans.svg"
import iconsuvs from "./assets/icon-suvs.svg"
import iconslux from "./assets/icon-luxury.svg"


export default function App() {
  return(
    <main>
      <section>
        <div className="bg-orange1">
          <img src={iconSedans} alt="icone ccarro amarelo" />
          <h2 className="font-shoulders">SEDANS</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconsuvs} alt="icon suvs" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark">
          <img src={iconslux} alt="icon lux" />
          <h2 className="font-shoulders">Luxury</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros/estoque/bmw/i7?estadocidade=estoque&marca1=BMW&modelo1=i7&autocomplete=i7&autocompleteTerm=BMW%20i7&lkid=1705&idcmpint=t1:c17:m07:webmotors:modelo::bmw%20i7" target="_blank">Ver mais</a>
        </div>

      </section>
    </main>
  )
}