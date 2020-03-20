import React from "react";

function Overlay({ setShowOverlay }) {
  return (
    <div
      onClick={() => setShowOverlay(false)}
      class="fixed h-screen w-screen bg-white z-10 opacity-90 top-0 left-0 flex flex-col justify-center items-center py-6 "
    >
      <div class="max-w-xl px-6 overflow-auto">
        <h1 class="text-2xl">
          Vi har stadig åbent – hvis det gør ondt eller du har store gener med
          dine tænder
        </h1>
        <div>
          <p class="mt-4">Kære patient</p>
          <p class="mt-4">
            <b>
              Du kan fortsat få hjælp til tandpine og få færdiggjort kritiske
              tandbehandlinger
            </b>
            , men Sundhedsstyrelsen har dog besluttet, at alle tandeftersyn og
            tandrensninger udskydes. Du vil blive indkaldt til en ny tid til
            tandeftersyn.
          </p>
          <p class="mt-4">
            <b>
              Hvis du er syg, har mistanke om at du er syg eller er i den
              ”særlige risikogruppe” skal du ikke møde op på klinikken.
            </b>{" "}
            Det gælder fortsat, at hvis du er i kategorien ”særlig
            risikogruppe”, bør du udskyde din tandlægetid – uanset om det er en
            undersøgelse eller behandling. 
          </p>
          <p class="mt-4">
            <b>
              Lad os hjælpes af med at beskytte dig selv og andre i
              venteværelset.
            </b>{" "}
            Vi har i forvejen meget fokus på hygiejne, bruger værnemidler og
            følger de Nationale Infektionshygiejniske Retningslinjer for
            Tandklinikker (NIR) fra Statens Serum Institut. Herudover har vi
            taget følgende forholdsregler:
            <ul class="mt-2">
              <li class="mt-2">Vi følger Sundhedsstyrelsens retningslinjer </li>
              <li class="mt-2">
                Vi har sat ekstra håndsprit frem i venteværelset på klinikken,
                som du bedes benytte
              </li>
              <li class="mt-2">
                Vi har taget ekstra forholdsregler, så det er muligt at holde
                afstand til de øvrige patienter, selvom der i forvejen sjældent
                samles mere end 2-3 personer i vores venteværelse
              </li>
              <li class="mt-2">
                Vi har fjernet aviser og blade fra venteværelset
              </li>
            </ul>
          </p>
          <p class="mt-4">
            <b> Her kan du finde mere information</b>
            <br></br>
            Du kan læse mere om Corona-virus, hvordan du skal forholde dig, hvis
            du er udrejst fra et af de særlige risikoområder, samt finde ofte
            stillede spørgsmål på hjemmesiden 
            <a href="http://coronasmitte.dk" target="_blank">
              coronasmitte.dk.
            </a>
          </p>
          <p class="mt-4">Klik hvor som helst for at komme ind på websitet</p>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
