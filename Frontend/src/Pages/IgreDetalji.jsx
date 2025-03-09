import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function IgreDetalji() {
  const { sifra } = useParams();

  // Mock data for demonstration purposes
  const gameDetails = [
    {
      sifra: 1,
      naslov: "Igra 1",
      opis: "Opis igre 1",
      hltb: "10h",
      platforme: "PC, PS5",
      zanr: "Akcija",
      datumIzdavanja: "2022-01-01",
      url: "https://placehold.co/600x400?text=No+Image+Yet",
      trailer: "https://www.youtube.com/watch?v=lANt7oJhFvU",
    },
    {
      sifra: 2,
      naslov: "Igra 2",
      opis: "Opis igre 2",
      hltb: "20h",
      platforme: "Xbox, PC",
      zanr: "Avantura",
      datumIzdavanja: "2021-05-15",
      url: "https://placehold.co/600x400?text=No+Image+Yet",
      trailer: "https://www.youtube.com/watch?v=lANt7oJhFvU",
    },
    {
      sifra: 3,
      naslov: "Igra 3",
      opis: "Opis igre 3",
      hltb: "15h",
      platforme: "Switch",
      zanr: "RPG",
      datumIzdavanja: "2020-11-20",
      url: "https://placehold.co/600x400?text=No+Image+Yet",
      trailer: "https://www.youtube.com/watch?v=lANt7oJhFvU",
    },
  ];

  const game = gameDetails[sifra];

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <Container className="details-container">
      <h1>{game.naslov}</h1>
      <img src={game.url} alt="image" />
      <p> Opis: {game.opis}</p>
      <p>HLTB: {game.hltb}</p>
      <p>Platforme: {game.platforme}</p>
      <p>Zanr: {game.zanr}</p>
      <p>Datum izdavanja: {game.datumIzdavanja}</p>
      <h3>Trailer:</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lANt7oJhFvU?si=9WqJgWG6ASZ2qHCQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
