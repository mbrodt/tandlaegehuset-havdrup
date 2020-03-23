import React from "react";

function Overlay({ setShowOverlay }) {
  return (
    <div
      onClick={() => setShowOverlay(false)}
      class="fixed h-screen w-screen bg-white z-10 opacity-90 top-0 left-0 flex flex-col justify-center items-center py-6 "
    >
      <div class="max-w-xl px-6 overflow-auto">
        <h1 class="text-2xl">
          Vi holder åbent for dig, der skal have kritisk tandbehandling
        </h1>
        <div>
          <p class="mt-4">
            Klinikken kan i den kommende tid kun modtage og behandle patienter
            på klinikken, der har et kritisk behandlingsbehov - og udelukkende
            efter forudgående telefonisk aftale.
          </p>
          <p class="mt-4">
            Baggrunden er nogle nye retningslinjer fra Sundhedsstyrelsen, som
            beskriver, hvordan tandlæger skal håndtere COVID-19.
          </p>
          <p class="mt-4">
            Sundhedsstyrelsen har bestemt, hvilke former for tandbehandling det
            indbefatter. Det gælder fx behandling af skader i tænder og mund,
            infektioner, rodbetændelse og svære tilfælde af caries og
            parodontitis. Det gælder også skader på implantater, broer og
            fyldninger samt igangværende bøjlebehandling.
          </p>
          <p class="mt-4">
            Sundhedsstyrelsens retningslinjer gælder fra den 17. marts 2020 og
            til og med juni 2020, medmindre Sundhedsstyrelsen melder andet ud.
          </p>
          <p class="mt-4">
            <b>Vi kontakter dig</b>
            <br></br>
            Hvis du har en tid hos os i den kommende periode, vil vi kontakte
            dig. Du er selvfølgelig også velkommen til at kontakte os.
          </p>
          <p class="mt-4">
            <b>Hvis du har tid til kritisk tandbehandling</b>
            <br></br>
            Du skal ikke møde op i klinikken, selvom du har tid til kritisk
            tandbehandling, hvis:
            <ul class="mt-2">
              <li class="mt-2">
                Du har symptomer, også bare lette, som fx snue, ondt i halsen
                og/eller hoste
              </li>
              <li class="mt-2">
                Du har været i direkte kontakt med en bekræftet coronasmittet
                person indenfor de sidste 14 dage.
              </li>
              <li class="mt-2">
                Du er kommet hjem fra en rejse indenfor de sidste 14 dage.
              </li>
            </ul>
            <br></br>
            Så skal du i stedet ringe til din læge, som kan henvise dig videre i
            sundhedssystemet.
          </p>
          <p class="mt-4">
            <b>Er du i tvivl?</b> <br></br>
            Ring til klinikken.
          </p>
          <p class="mt-4">Klik hvor som helst for at komme ind på websitet</p>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
