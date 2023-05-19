import { useState } from "react";
import "./Items.css";
import SigleItem from "../SingleItem/SigleItem";

function Items() {
  const [products] = useState([
    {
      id: 1,
      img: "https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp",
      title: "Whitefish Estate",
      hint: "Whitefish, Montana, United States",
      rate: 6,
      price: 1500,
    },
    {
      id: 2,
      img: "https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp",
      title: "ATELIER ArtVillas Costa Rica",
      hint: "Uvita, Osa, Puntaneras, Costa Rica",
      rate: 5,
      price: 1300,
    },
    {
      id: 3,
      img: "https://framerusercontent.com/images/wTSsHOfD0gXYkODZBWWWOfdkw.webp",
      title: "Magnolia's Hillcrest Cottage",
      hint: "  Waco, Texas, United States",
      rate: 3,
      price: 1700,
    },
  ]);
  return (
    <div className="container ItemsContainer">
      <div className="row">
        {products.map((Item) => {
          return (
            <div className="col-6 my-4" key={Item.id}>
              <SigleItem Item={Item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
