import iconSedans from "../assets/icon-sedans.svg"
export default function Sedans(){

return(
        <section className="bg-orange1 p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
            <img className="mb-7" src={iconSedans} alt="icone ccarro amarelo " />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white ">SEDANS</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
            <a className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg " href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
            </section>
)

}
