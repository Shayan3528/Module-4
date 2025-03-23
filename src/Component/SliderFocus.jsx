import { useRef } from "react";
import Anna from "../assets/Anna_Frank.jpg";
import Flower from "../assets/flower.jpg";
import Hill from "../assets/hill.jpg";
import Image from "../assets/image-2.jpg";
import Nature from "../assets/nature.jpg";
import Panda from "../assets/panda.jpg";
import Photo from "../assets/photo.jpg";
import Scientist from "../assets/scientist.jpg";

export default function SliderFocus() {
  const scrollContainerRef = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    { src: Anna, alt: "Anna Frank" },
    { src: Photo, alt: "Photo" },
    { src: Nature, alt: "Nature" },
    { src: Hill, alt: "Hill" },
    { src: Flower, alt: "Flower" },
    { src: Image, alt: "Image" },
    { src: Panda, alt: "Panda" },
    { src: Scientist, alt: "Scientist" },
  ];

  // ✅ Scroll to Image
  const handleScroll = (index) => {
    imageRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Scrollable Image Container */}
      <div
        ref={scrollContainerRef}
        className="w-full max-w-5xl overflow-x-hidden whitespace-nowrap flex gap-5 py-5 px-4 scrollbar-hide"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            ref={(el) => (imageRefs.current[index] = el)}
            className="w-[300px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            onClick={() => handleScroll(index)}
          />
        ))}
      </div>

      {/* Buttons for Navigation */}
      <div className="flex gap-3 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition"
            onClick={() => handleScroll(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
