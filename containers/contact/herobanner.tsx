export const HerobannerContact = () => {
  return (
    <section className="relative w-full h-screen">
      {" "}
      <div
        className="w-full h-full bg-cover bg-center absolute top-0 left-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/contact/herobanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-32 text-white mt-0 lg:mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 uppercase md:max-w-[55%]">
            UN PROJET NÉCESSITANT DE LA DORURE ? ÉCHANGEONS ENSEMBLE.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:max-w-[50%]">
            Que ce soit pour une restauration de boiseries anciennes, du neuf ou
            simplement une question. Notre équipe est à votre écoute !
          </p>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:max-w-[50%]">
            {" "}
            RÉPONSE SOUS 48H
          </p>
        </div>
      </div>
    </section>
  );
};
