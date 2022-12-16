import React from "react";
import StarRatings from "react-star-ratings";

function ReviewForm({ ratingComp, text }) {
  return (
    <div className="w-full h-16 ">
      <StarRatings
        rating={4}
        starRatedColor="black"
        changeRating={3}
        numberOfStars={5}
        name="rating"
        starDimension="10px"
      />

      <p className="text-red">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
        architecto ab rerum eius error, laborum possimus soluta similique
        obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
        voluptas!
      </p>
    </div>
  );
}

export default ReviewForm;
