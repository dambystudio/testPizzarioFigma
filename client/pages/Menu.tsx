import { ArrowLeft, ChevronUp, Download, Phone, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { menuCategories } from "../data/menu";
import { Seo } from "../components/Seo";

const phoneNumber = "+393880993921";

export default function Menu() {
  return (
    <div className="min-h-screen bg-pizzario-beige text-pizzario-brown">
      <Seo
        title="Menu PizzaRio: pizze, panini e prezzi | San Giovanni Rotondo"
        description="Consulta il menu PizzaRio con pizze, panini, panzerotti, bevande e prezzi. Pizzeria italo-brasiliana a San Giovanni Rotondo: chiama e prenota."
        canonical="/menu/"
      />
      <a className="skip-link" href="#contenuto-menu">Vai al contenuto del menu</a>

      <header className="sticky top-0 z-30 border-b border-pizzario-green/20 bg-pizzario-beige/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 rounded-full px-2 font-montserrat text-sm font-bold text-pizzario-brown transition hover:text-pizzario-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizzario-red">
            <ArrowLeft className="size-5" aria-hidden="true" />
            <span className="hidden sm:inline">Torna al sito</span>
          </Link>
          <img src="/src/assets/icons/pizzariologo 1_9.webp" alt="PizzaRio" className="h-9 w-auto sm:h-11" width="600" height="140" />
          <a href={`tel:${phoneNumber}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-pizzario-green px-4 font-montserrat text-sm font-bold text-white shadow-sm transition hover:bg-pizzario-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizzario-red">
            <Phone className="size-4" aria-hidden="true" /> <span className="hidden sm:inline">Prenota</span>
          </a>
        </div>
      </header>

      <main id="contenuto-menu">
        <nav aria-label="Breadcrumb" className="border-b border-pizzario-green/10 bg-pizzario-beige">
          <ol className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3 font-montserrat text-xs text-pizzario-brown/70 sm:px-6">
            <li><Link to="/" className="font-semibold hover:text-pizzario-red">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold text-pizzario-brown">Menu</li>
          </ol>
        </nav>
        <section className="border-b border-pizzario-green/20 bg-pizzario-beige">
          <div className="mx-auto grid max-w-5xl gap-5 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1fr_13rem] md:items-center">
            <div>
              <p className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-pizzario-green">PizzaRio</p>
              <h1 className="mt-2 font-margarine text-4xl leading-none text-pizzario-brown sm:text-5xl">Il nostro menu</h1>
              <p className="mt-3 max-w-xl font-montserrat text-sm leading-relaxed text-pizzario-brown/80 sm:text-base">Scegli una categoria qui sotto. Per prenotazioni, disponibilità e allergeni chiamaci al <a className="font-bold text-pizzario-red underline decoration-pizzario-red/40 underline-offset-4" href={`tel:${phoneNumber}`}>388 099 3921</a>.</p>
            </div>
            <img src="/src/assets/icons/pizza1-optimized.webp" alt="Pizza PizzaRio" className="hidden aspect-square w-48 justify-self-end rounded-full border-4 border-pizzario-green/25 object-cover shadow-lg md:block" width="500" height="411" loading="eager" />
          </div>
        </section>

        <nav aria-label="Vai a una categoria del menu" className="sticky top-[68px] z-20 border-b border-pizzario-green/20 bg-white/95 py-3 shadow-sm backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="mb-2 font-montserrat text-xs font-bold uppercase tracking-[0.15em] text-pizzario-brown/60">Scegli una categoria</p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {menuCategories.map((category) => (
                <a key={category.id} href={`#${category.id}`} className="shrink-0 rounded-full border border-pizzario-green/30 px-4 py-2 font-montserrat text-sm font-bold text-pizzario-brown transition hover:border-pizzario-green hover:bg-pizzario-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizzario-red">{category.title}</a>
              ))}
            </div>
          </div>
        </nav>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="space-y-14 sm:space-y-20">
            {menuCategories.map((category, categoryIndex) => (
              <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-36">
                <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-pizzario-green/25 pb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-montserrat text-xs font-bold text-pizzario-red">0{categoryIndex + 1}</span>
                    <div>
                      <h2 id={`${category.id}-title`} className="font-margarine text-3xl leading-none text-pizzario-brown sm:text-4xl">{category.title}</h2>
                      {category.subtitle && <p className="mt-1 font-montserrat text-sm font-semibold text-pizzario-green">{category.subtitle}</p>}
                    </div>
                  </div>
                  <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-pizzario-brown/60">Prezzi</span>
                </div>

                <ul className="max-w-3xl divide-y divide-pizzario-brown/10">
                  {category.items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 sm:py-5">
                      <div>
                        <h3 className="font-margarine text-xl leading-tight text-pizzario-red sm:text-2xl">{item.name}</h3>
                        {item.description && <p className="mt-1 max-w-prose font-montserrat text-sm leading-relaxed text-pizzario-brown/80">{item.description}</p>}
                      </div>
                      <dl className="grid content-start gap-1 text-right font-montserrat font-bold tabular-nums text-pizzario-brown">
                        {item.prices.map((price, priceIndex) => (
                          <div key={priceIndex} className="flex flex-col">
                            {price.label && <dt className="text-[11px] font-semibold uppercase tracking-wide text-pizzario-brown/60">{price.label}</dt>}
                            <dd className="whitespace-nowrap">{price.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <section className="qr-print-area bg-pizzario-green px-4 py-12 text-white sm:px-6">
          <div className="mx-auto grid max-w-3xl gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.16em] text-white/80"><QrCode className="size-4" aria-hidden="true" /> Sempre con te</div>
              <h2 className="mt-3 font-margarine text-3xl sm:text-4xl">Inquadra e apri il menu</h2>
              <p className="mt-3 max-w-prose font-montserrat leading-relaxed text-white/90">Il QR porta direttamente a pizzariosgr.it/menu/. Puoi stamparlo e metterlo sui tavoli o vicino alla cassa.</p>
              <a href="/menu-pizzario.svg" download="qr-menu-pizzario.svg" className="no-print mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 font-montserrat text-sm font-bold text-pizzario-green transition hover:-translate-y-0.5 hover:bg-pizzario-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Download className="size-4" aria-hidden="true" /> Scarica il QR</a>
            </div>
            <figure className="justify-self-center rounded-3xl bg-white p-4 text-center text-pizzario-brown shadow-xl">
              <img src="/menu-pizzario.svg" alt="QR code per aprire il menu digitale PizzaRio" className="mx-auto size-48" width="192" height="192" />
              <figcaption className="mt-2 font-montserrat text-xs font-bold">pizzariosgr.it/menu/</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <a href="#contenuto-menu" className="fixed bottom-5 right-5 inline-flex size-11 items-center justify-center rounded-full bg-pizzario-red text-white shadow-lg transition hover:bg-pizzario-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizzario-red" aria-label="Torna all'inizio del menu"><ChevronUp className="size-5" aria-hidden="true" /></a>
    </div>
  );
}
