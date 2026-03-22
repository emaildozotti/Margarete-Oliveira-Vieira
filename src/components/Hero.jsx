// DECISÃO CRIATIVA: Hero sem imagem de fundo — tipografia como elemento principal de impacto.
// O ornamento blur no canto superior direito cria atmosfera de profundidade espiritual
// sem decoração explícita. A cascata de delays (0/150/300/450ms) entrega cada elemento
// como uma revelação progressiva — reforça o conceito de "descoberta" da identidade.

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-neutral-50 overflow-hidden px-6 py-20 md:px-16 lg:px-24"
    >
      {/* Ornamento blur — atmosfera primary */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-[0.07] blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4"
      />
      {/* Ornamento blur secundário — canto inferior esquerdo */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-accent opacity-[0.06] blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4"
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Hero photo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/hero.jpg"
            alt="Margarete Oliveira Vieira"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Call Out */}
        <p
          className="font-ui text-xs md:text-sm uppercase tracking-widest text-accent font-medium mb-6"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          RECONSTRUÇÃO DE IDENTIDADE
        </p>

        {/* H1 */}
        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Nasceu livre.{' '}
          <span className="text-primary">Está vivendo o roteiro dos outros.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="font-body text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Terapia que encontra a causa raiz e devolve o governo da sua vida.
        </p>

        {/* CTA scroll */}
        <div data-aos="fade-up" data-aos-delay="450">
          <a
            href="#metodo"
            className="inline-flex items-center gap-3 font-ui text-sm font-semibold uppercase tracking-wider text-neutral-50 bg-primary px-10 py-4 rounded-full shadow-cta hover:shadow-cta hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-0.5"
          >
            Quero minha primeira conversa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
