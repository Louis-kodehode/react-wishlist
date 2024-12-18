import containerstyles from "./Styledcss";
import wishlist from "./App";
import Sparkles from "react-sparkle";

const Sparkle = () => (
  <Sparkles color={"lightyellow"} count={10} overflowPx={10} />
);

function Wishlistcard({ data: { name, age, wishlist, naughty } }) {
  const behaviour = naughty ? "Naughty" : "Good kid";
  const list = wishlist.join(" ");

  return (
    <>
      <containerstyles.Cards naughty={naughty}>
        {behaviour === "Good kid" && <Sparkle />}
        <h2>
          {name} {age} år
        </h2>

        <ul>
          {wishlist.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
        <p>{naughty}</p>
      </containerstyles.Cards>
    </>
  );
}

export default Wishlistcard;
