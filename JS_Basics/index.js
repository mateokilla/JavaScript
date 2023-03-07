//hatvany tabla 1-10-ig
document.write("<table border=1>");
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

//szorzo tabla 1-20-ig
