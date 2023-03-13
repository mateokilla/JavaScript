//n darab szam tablazatba irasa, az n erteket bekerjuk az input mezoben

kuldesGomb = document.querySelector("#kuldesGomb");
tablazat = document.querySelector("#tablazat");
primE = document.querySelector("#primE");

kuldesGomb.addEventListener(
  "click",
  (tablazatLetrehozo = (e) => {
    e.preventDefault();
    let sorokSzama = document.querySelector("#beviteliMezo").value;

    tablazat.innerHTML = `<th>Sorok száma: ${sorokSzama}</th>`;

    for (i = 1; i <= sorokSzama; i++) {
      let row = document.createElement("tr");

      row.innerHTML = `<td>${i}</td>`;

      tablazat.appendChild(row);
    }

    function primSzamEASorokSzama(vizsgaltSzam) {
      let osztokSzama = 0;
      for (i = 0; i < vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
          osztokSzama++;
        }
      }
      if (osztokSzama > 2) {
        primE.innerHTML = `A(z) ${vizsgaltSzam} szám nem prim!`
      }
      else {
        primE.innerHTML = `A(z) ${vizsgaltSzam} szám prim!`
      }
    }

    primSzamEASorokSzama(sorokSzama)

  })
);
