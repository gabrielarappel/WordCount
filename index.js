import fs from "fs";

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function wordCount() {
  try {
    const data = await readFile("texto.txt");
    const words = data.split(/[\s-+]/).filter(Boolean);
    console.log(`O arquivo possui ${words.length} palavras.`);
    //console.log("Palavras lidas:", words);
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
  }
}

wordCount();

//sem async/await - usando callback
fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const words = data.split(/[\s-+]/).filter(Boolean);

  console.log(`O arquivo possui ${words.length} palavras.`);
  //console.log("Palavras lidas:", words);
});
