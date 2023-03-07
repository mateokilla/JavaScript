//hatvany tabla 1-10-ig
document.write("<hr>");

document.write("<table>");
document.write(
  "<tr><th>n<sup>1</sup></th><th>n<sup>2</sup></th><th>n<sup>3</sup></th><th>n<sup>4</sup></th><th>n<sup>5</sup></th></tr>"
);
for (let i = 1; i <= 10; i++) {
  document.write(
    `<tr><td>${Math.pow([i], 1)}</td><td>${Math.pow([i], 2)}</td><td>${Math.pow(
      [i],
      3
    )}</td><td>${Math.pow([i], 4)}</td><td>${Math.pow([i], 5)}</td></tr>`
  );
}
document.write("</table>");

document.write("<hr>");

//szorzo tabla 1-20-ig
document.write("<table>");
for (let i = 1; i <= 20; i++) {
  document.write("<tr>");

  for (let j = 1; j <= 20; j++) {
    document.write(`<td>${[i] * [j]}</td>`);
  }

  document.write("</tr>");
}
document.write("</table>");

document.write("<hr>");

//2 hatvanyai talba
document.write("<table>");
document.write("<th>hatvany</th><th>ertek</th>");
for (let i = 0; i <= 30; i++) {
  document.write(
    `<tr><td>2<sup>${[i]}</sup></td><td>${Math.pow(2, [i])}</td></tr>`
  );
}

document.write("</table>");

document.write("<hr>");

//digiatlis ora
const dora = document.getElementById("dora");

function oraKiir() {
  datum = new Date();

  ora = datum.getHours();
  perc = datum.getMinutes();
  mp = datum.getSeconds();

  dora.innerHTML = ora + ":" + perc + ":" + mp;
}
setInterval("oraKiir()", 1000);
oraKiir();

//egy 10 elemű random tömb generálás

function randomTombGenerator(felsoHatar, alsoHatar, tombElemSzam) {
  let randomSzamokHalmaza = [];

  for (let i = 0; i < tombElemSzam; i++) {
    randomSzamokHalmaza[i] =
      Math.floor(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
  }
  return randomSzamokHalmaza;
}

let mintaTomb = randomTombGenerator(10, 1, 5);

//1.Mennyi a mintaTomb összege és átlaga?
function atlagSzamito(tomb) {
  let osszeg = 0;
  let atlag = 0;

  for (let i = 0; i < tomb.length; i++) {
    osszeg += tomb[i];
  }
  atlag = parseInt(osszeg / tomb.length);

  return atlag;
}

document.write(atlagSzamito(mintaTomb));

document.write("<hr>");

//2.Kiválogatás: Hány darab páros szám van a tömbben?
function parosSzamlalo(tomb) {
  let parosSzamokSzama = 0;

  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 == 0) {
      parosSzamokSzama++;
    }
  }
  return parosSzamokSzama;
}
document.write("A mintaTomb elemei a következőek: " + mintaTomb);
document.write("<br>");
document.write(
  "A páros számok száma a mintaTomb-ben: " + parosSzamlalo(mintaTomb)
);

//3.Melyik a legnagyobb elem a tömbben?

function maximumErtek(tomb) {
  let maxIndex = 0;

  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] > maxIndex) {
      maxIndex = tomb[i];
    }
  }

  return maxIndex;
}
document.write("<br>");
document.write("A mintaTomb legynagyobb eleme: " + maximumErtek(mintaTomb));
