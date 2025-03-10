import { HttpService } from "./HttpService";

async function get() {
  return await HttpService.get("/igre/DohvatiSveIgre")
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {});
}

async function getBySifra(id) {
  return await HttpService.get(`/igre/DohvatiIgru?idIgre=${id}`)
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {});
}

async function dodaj(igre) {
  return HttpService.post("/igre/DodajIgru", igre)
    .then(() => {
      return { greska: false, poruka: "Dodano" };
    })
    .catch(() => {
      return { greska: true, poruka: "Problem kod dodavanja" };
    });
}

async function promjeni(id, igre) {
  return HttpService.post("/igre/updateIgru", igre)
    .then(() => {
      return { greska: false, poruka: "Dodano" };
    })
    .catch(() => {
      return { greska: true, poruka: "Problem kod dodavanja" };
    });
}

async function obrisi(id) {
  return HttpService.delete(`/igre/obrisiIgru?id=${id}`)
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
