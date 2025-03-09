import { HttpService } from "./HttpService";

async function get() {
  return await HttpService.get("/igre")
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {});
}

async function getBySifra(sifra) {
  return await HttpService.get("/igre/" + sifra)
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {});
}

async function dodaj(igre) {
  return HttpService.post("/igre", igre)
    .then(() => {
      return { greska: false, poruka: "Dodano" };
    })
    .catch(() => {
      return { greska: true, poruka: "Problem kod dodavanja" };
    });
}

async function promjeni(sifra, igre) {
  return HttpService.post("/igre/update/" + sifra, igre)
    .then(() => {
      return { greska: false, poruka: "Dodano" };
    })
    .catch(() => {
      return { greska: true, poruka: "Problem kod dodavanja" };
    });
}

async function obrisi(sifra, igre) {
  return HttpService.delete("/igre/" + sifra, igre)
    .then(() => {
      return { greska: false, poruka: "Obrisano" };
    })
    .catch(() => {
      return {
        greska: true,
        poruka: "Problem kod brisanja",
      };
    });
}

export default {
  get,
  getBySifra,
  promjeni,
  dodaj,
  obrisi,
};
