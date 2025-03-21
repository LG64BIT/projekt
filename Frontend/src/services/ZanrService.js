import { HttpService } from "./HttpService";

async function get() {
  return await HttpService.get("/zanr/DohvatiSveZanrove")
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {});
}

async function getBySifra(sifra) {
    return {
      "id": 1,
      "imeZanra": "Akcijska"
    };
  // return await HttpService.get(`/zanr/dohvatZanr?IdZanra=${sifra}`) //TODO: ovo kad fixas backend odkomentiraj
  //   .then((odgovor) => {
  //     return odgovor.data;
  //   })
  //   .catch((e) => {});
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
  dodaj,
  obrisi,
};
