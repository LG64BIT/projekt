import { useEffect, useState } from "react";
import IgraService from "../services/IgraService";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../constants";

export default function IgrePregled() {
  const [igre, setIgre] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function dohvatiIgre() {
    const odgovor = await IgraService.get();
    setIgre(odgovor);
  }

  function obrisiIgru(sifra) {
    const odgovor = IgraService.obrisi(sifra);
    if (odgovor.greska) {
      alert("Greška kod brisanja igre");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    //dohvatiIgre();
    //setIgre(igre.filter((igra) => igra.sifra !== sifra)); //Only for mock data
  }

  //hooks (kuka) se izvodi prilikom dolaska na stranicu igre
  useEffect(() => {
    //dohvatiIgre();
    const mockIgre = [
      {
        naslov: "Igra 1",
        hltb: "10",
        platforme: "PC, PS5",
        kategorija: "Akcija",
        datumIzdavanja: "2022-01-01",
        sifra: 1,
      },
      {
        naslov: "Igra 2",
        hltb: "20",
        platforme: "Xbox, PC",
        kategorija: "Avantura",
        datumIzdavanja: "2021-05-15",
        sifra: 2,
      },
      {
        naslov: "Igra 3",
        hltb: "15",
        platforme: "Switch",
        kategorija: "RPG",
        datumIzdavanja: "2020-11-20",
        sifra: 3,
      },
    ];
    setIgre(mockIgre);
  }, []);

  return (
    <>
      <Link
        to={RouteNames.DODAJ}
        className="btn btn-success"
        style={{ marginTop: "20px", marginBottom: "20px", width: "100%" }}
      >
        Dodaj novu igru
      </Link>
      <Table striped bordered hover responsive className="ruka">
        <thead>
          <tr>
            <th>Naziv</th>
            <th>HLTB</th>
            <th>Platforme</th>
            <th>Kategorija</th>
            <th>Datum izdavanja</th>
            <th style={{ width: "120px", textAlign: "center" }}>Opcije</th>
          </tr>
        </thead>
        <tbody>
          {igre &&
            igre.map((igra, index) => (
              <tr key={index}>
                <td onClick={() => navigate(`/igre/${igra.sifra}`)}>
                  {igra.naslov}
                </td>
                <td onClick={() => navigate(`/igre/${igra.sifra}`)}>
                  {igra.hltb}
                </td>
                <td onClick={() => navigate(`/igre/${igra.sifra}`)}>
                  {igra.platforme}
                </td>
                <td onClick={() => navigate(`/igre/${igra.sifra}`)}>
                  {igra.kategorija}
                </td>
                <td onClick={() => navigate(`/igre/${igra.sifra}`)}>
                  {igra.datumIzdavanja}
                </td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <Button
                    style={{ backgroundColor: "#4CAF50", color: "white" }}
                    onClick={() => navigate(`/igre/update/${igra.sifra}`)}
                  >
                    Ažuriranje
                  </Button>

                  <Button
                    style={{ backgroundColor: "#f44336", color: "white" }}
                    onClick={() => {
                      setIsLoading(true);
                      obrisiIgru(igra.sifra);
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Brisanje"
                    )}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
