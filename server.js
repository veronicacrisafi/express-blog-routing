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

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Questo è il server dei miei posts");
  console.log(req);
});

const post = [
  {
    id: 1,
    titolo: "Il ciambellone",
    contenuto:
      "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come la crostata di marmellata, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
    immagine: "imgs/ciambellone.jpeg",
    tags: ["blog", "ciambellone", "uova", "zucchero", "farina"],
  },
  {
    id: 2,
    titolo: "Cracker alla barbabietola",
    contenuto:
      "I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola!",
    immagine: "imgs/cracker_barbabietola.jpeg",
    tags: ["blog", "cracker", "barbabietola", "originale"],
  },
  {
    id: 3,
    titolo: "Pane fritto dolce",
    contenuto:
      "Il pane fritto dolce è la versione più antica dell’odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero",
    immagine: "imgs/pane_fritto_dolce.jpeg",
    tags: ["blog", "pane", "dolce", "antispreco"],
  },
  {
    id: 4,
    titolo: "Pasta alla barbabietola",
    contenuto:
      "Si tratta di un impasto a base di farina e barbabietole precotte, con aggiunta dell'uovo per dare più corpo ed elasticità: perfetta per ravioli burro e salvia, sfoglie per lasagne, maltagliati oppure gustose e primaverili tagliatelle alla barbabietola con asparagi. La barbabietola, con il suo vivace color amaranto, è una gustosa tintura al naturale, perfetta per ravvivare i vostri impasti!",
    immagine: "imgs/pasta_barbabietola.jpeg",
    tags: ["blog", "pasta", "barbabietola", "ravvivare"],
  },
  {
    id: 5,
    titolo: "Torta paesana",
    contenuto:
      "La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E’ un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E’ infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l’uvetta o chi i pinoli ad esempio. Perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!",
    immagine: "imgs/torta_paesana.jpeg",
    tags: ["blog", "torta", "pane", "latte"],
  },
];

//index (R) recupera la lista di tutti i post
app.get("/api/post", (req, res) => {
  res.json(post);
});

//show (R) recupera un singolo post tramite il suo id
app.get("/api/post/:id", (req, res) => {
  const { id } = req.params;
  const ricercaDelPost = post.find((postEl) => postEl.id === parseInt(id));
  if (!ricercaDelPost) {
    return res.status(404).json({
      error: "not found",
      message: "resource not found",
    });
  }
  res.json(ricercaDelPost);
});

//Create (C) creazione di un nuovo post
app.post("/api/post", (req, res) => {
  res.send("Crea il nuovo post");
});

//update (U) Aggiorna completamente il singolo post esistente
app.put("/api/post/:id", (req, res) => {
  res.send("Aggiorna il post con id:" + req.params.id);
});

// modify (U) modifica parziale del post
app.patch("/api/post/:id", (req, res) => {
  res.send("Modifica parzialmente il post con id:" + req.params.id);
});
