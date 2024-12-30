import { useState } from "react";
import kidsWishlist from "./wishlist";
import Wishlistcard from "./Wishlistcard";
import React from "react";
import "./App.css";
import containerstyles from "./Styledcss";

function wishlist() {
  return (
    <>
      <containerstyles.Christmastree>
        <h1 className="title">Christmas wishlist!🎅</h1>
        <containerstyles.Container>
          {kidsWishlist.map((kid) => (
            <Wishlistcard data={kid} />
          ))}
        </containerstyles.Container>
      </containerstyles.Christmastree>
    </>
  );
}

export default wishlist;
