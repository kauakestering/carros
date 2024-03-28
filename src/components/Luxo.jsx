import iconslux from "../assets/icon-luxury.svg"
export default function Luxo(){

return(
    <div className="bg-dark p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img className="mb-7" src={iconslux} alt="icon lux" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Luxury</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-dark border-2 border-offwhitebg hover:bg-dark hover:text-offwhitebg" href="https://www.webmotors.com.br/carros/estoque/bmw/i7?estadocidade=estoque&marca1=BMW&modelo1=i7&autocomplete=i7&autocompleteTerm=BMW%20i7&lkid=1705&idcmpint=t1:c17:m07:webmotors:modelo::bmw%20i7" target="_blank">Ver mais</a>
        </div>
)

}
