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
const dora = document.getElementById('dora');

function oraKiir() {
  datum = new Date();

  ora = datum.getHours();
  perc = datum.getMinutes();
  mp = datum.getSeconds();

  dora.innerHTML = ora + ':' + perc + ':' + mp
}
setInterval('oraKiir()', 1000)
oraKiir()