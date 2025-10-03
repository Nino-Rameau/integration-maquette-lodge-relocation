function Contact() {

  return (
    <>
      <div className="flex max-w-1070 m-auto w-full py-96 gap-64 relative">
        <div className="flex flex-col gap-32">
          <div>
          <p className="text-maj text-sec-600 font-semibold text-18">démarrez votre projet</p>
          <h1 className="font-bold text-pri-900">Formulaire de contact</h1>
          <div>
            <img src="../../../public/img/Pattern.svg" className="top-40 left--150 w-405 h-430 absolute z-index--1"/>
          </div>
          </div>
          <form className="flex flex-col gap-24">
            <div className="flex flex-row gap-16">
              <div className="flex flex-col gap-8">

                <div className="flex flex-col gap-8">
                  <label htmlFor="vous-etes" className="text-12">Vous êtes*</label>
                  <select id="vous-etes" name="vous-etes" className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" required defaultValue="">
                    <option value="" disabled>Vous êtes</option>
                    <option value="entreprise">Une entreprise</option>
                    <option value="particulier">Un particulier</option>
                    <option value="proprietaire">Un propriétaire</option>
                  </select>
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="prenom" className="text-12">Prénom*</label>
                  <input type="text" name="prenom" id="prenom" placeholder="Prénom" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" />
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="email" className="text-12">Email* </label>
                  <input type="email" name="email" id="email" placeholder="Email" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" />
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="num_entreprise" className="text-12">Numéro de l'entreprise* </label>
                  <input type="text" name="num_entreprise" id="num_entreprise" placeholder="Numéro de l'entreprise" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                  <label htmlFor="civilite" className="text-12">Civilité*</label>
                  <select id="civilite" name="civilite" className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" required defaultValue="">
                    <option value="" disabled>Civilité</option>
                    <option value="entreprise">Monsieur</option>
                    <option value="particulier">Madame</option>
                  </select>
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="nom" className="text-12">Nom*</label>
                  <input type="text" name="nom" id="nom" placeholder="Nom" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" />
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="tel" className="text-12">Numéro de téléphone*</label>
                  <input type="tel" pattern="[0-9]{10}" name="tel" id="tel" placeholder="Numéro de téléphone" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" />
                </div>

                <div className="flex flex-col gap-8">
                  <label htmlFor="bureau" className="text-12">Bureau*</label>
                  <select id="bureau" name="bureau" className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 min-w-300 bg-ess-050" required defaultValue="">
                    <option value="" disabled>Bureau</option>
                    <option value="entreprise">Bureau de Genève</option>
                    <option value="entreprise">Bureau de Lausanne</option>
                    <option value="entreprise">Bureau de Zong</option>
                    <option value="entreprise">Bureau de Zurich</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <label htmlFor="message" className="text-12">Votre demande* </label>
              <textarea name="message" id="message" placeholder="Votre demande" required className="border-pri-100 rounded-8 p-8-12 text-16 text-ess-300 bg-ess-050"/>
            </div>
            <div className="flex flex-col gap-8">
              <button type="submit" className="bg-sec-100-hover text-sec-000-hover rounded-100 p-12-32 font-semibold text-maj text-animate max-w-min-c text-nowrap font-2 text-center text-16 font-semibold border-none text-space-15">Envoyer la demande</button>
            <p className="text-ess-300 font-normal">Notre équipe répond sous 24h</p>
            </div>
          </form>
        </div>
        
        <section className="flex flex-col justify-between">
          <div className="flex flex-col gap-32">
            <div className="flex flex-row gap-16">
              <img src="../../../public/icon/star-v2.svg" className="w-h-32"/>
              <p className="text-18">Noté 4.9/5 par nos clients sur Google</p>
            </div>
            <div className="flex flex-row gap-16">
              <img src="../../../public/icon/plus-circle-v2.svg" className="w-h-32"/>
              <p className="text-18">+ 70 multinationales partenaires</p>
            </div>
            <div className="flex flex-row gap-16">
              <img src="../../../public/icon/plus-circle-v2.svg" className="w-h-32"/>
              <p className="text-18">+ 1000 services de relocation/an</p>
            </div>
          </div>
          <div>
            <p className="font-3 text-pri-800 text-70 font-normal">All you need is Lodge</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
