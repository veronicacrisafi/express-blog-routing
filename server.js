// Esercizio
// Creare  le rotte necessario per l'entità post all'interno di server.js e creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
// Ad esempio:
// Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
// Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
// e via dicendo…
// Nota:
// Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
// Ci servirà per i prossimi step.
// Per oggi vi può servire in caso vogliate provare i bonus.

// Bonus
// Provare a restituire la lista dei post dalla rotta index, in formato json
// Provare a restituire un singolo post dalla rotta show, sempre in formato json

const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/post");

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Questo è il server dei miei posts");
  console.log(req);
});

//opreazioni crud per l'entità post
app.use("/api/post", postRouter);
