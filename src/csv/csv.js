import fs from "node:fs";
import { parse } from "csv-parse";

const csvFilePath = new URL("./data.csv", import.meta.url);
fs.createReadStream(csvFilePath)
  .pipe(
    parse({
      columns: true,
      delimiter: ",",
    })
  )
  .on("data", async (row) => {
    try {
      const response = await fetch("http://localhost:3335/tasks", {
        method: "POST",
        body: JSON.stringify(row),
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      console.log("Resposta da API:", responseData);
    } catch (error) {
      console.error("Erro ao enviar tarefa:", error);
    }
  })
  .on("error", (err) => {
    console.error("Erro ao processar o arquivo CSV:", err);
  });
