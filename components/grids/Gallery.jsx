import React from "react";

function Gallery() {
  return (
    <div className="columns-2 gap-2 px-2 md:columns-4 md:gap-8 md:px-40">
      <img
        class="w-full aspect-[1/1] mb-6"
        src="https://picsum.photos/500/300?random=1"
      />
      <img
        class="w-full aspect-square mb-6"
        src="https://picsum.photos/500/300?random=2"
      />
      <img
        class="w-full aspect-square mb-6"
        src="https://picsum.photos/500/300?random=3"
      />
      <img
        class="w-full aspect-square mb-6"
        src="https://picsum.photos/500/300?random=4"
      />
      <img
        class="w-full aspect-video mb-6"
        src="https://picsum.photos/500/300?random=5"
      />
      <img
        class="w-full aspect-video mb-6"
        src="https://picsum.photos/500/300?random=6"
      />
      <img
        class="w-full aspect-square mb-6"
        src="https://picsum.photos/500/300?random=7"
      />
      <img
        class="w-full aspect-video mb-6"
        src="https://picsum.photos/500/300?random=8"
      />
    </div>
  );
}

export default Gallery;
