import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { selectLikes } from "../../redux/slices/basketSlice";

function Likes() {
  const likes = useSelector(selectLikes);
  return (
    <div>
      <Header />
      <div className="text-4xl text-greenPrimary grid grid-cols-10">
        Likes : {likes.length}
      </div>
    </div>
  );
}

export default Likes;
