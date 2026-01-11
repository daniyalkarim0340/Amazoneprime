import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NButton from "../button/index"

const sample = [
  {
    id: 1,
    title: 'The Grand Adventure',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c0f9a8c6d1d6d4a7b5a2b3c4d5e6f7a',
  },
  {
    id: 2,
    title: 'Mystery Manor',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a0b3c5d6e7f8a9b0c1d2e3f4a5b6c7d',
  },
  {
    id: 3,
    title: 'Action Packed',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e',
  },
  {
    id: 4,
    title: 'Comedy Nights',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f7e8d9c0b1a2c3d4e5f6a7b8c9d0e1f',
  },
  {
    id: 5,
    title: 'Sci-Fi World',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3b2a1c0d9e8f7a6b5c4d',
  },
  {
    id: 6,
    title: 'Drama Central',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
  },
  {
    id: 7,
    title: 'Thriller Time',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e',
  },
  {
    id: 8,
    title: 'Family Fun',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
  },
    {
    id: 5,
    title: 'Sci-Fi World',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3b2a1c0d9e8f7a6b5c4d',
  },
  {
    id: 6,
    title: 'Drama Central',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
  },
  {
    id: 7,
    title: 'Thriller Time',
    tag: 'Movie',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e',
  },
  {
    id: 8,
    title: 'Family Fun',
    tag: 'Series',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
  },
];

const Card = ({ item }) => (
  <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-64 mx-2">
    <div className="h-44 sm:h-52 lg:h-48 w-full overflow-hidden bg-slate-100">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
      <p className="text-xs text-indigo-600 mt-1">{item.tag}</p>
      <div className="mt-3 flex items-center justify-between">
        <button className="text-sm text-white bg-indigo-600 px-3 py-1 rounded-md">Play</button>
        <button className="text-sm text-indigo-600 underline">Add</button>
      </div>
    </div>
  </article>
);

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;
  const maxIndex = sample.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative">
      <NButton
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full disabled:opacity-50"
      >
        <FaChevronLeft />
      </NButton>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {sample.map((s) => (
            <Card key={s.id} item={s} />
          ))}
        </div>
      </div>
      <NButton
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full disabled:opacity-50"
      >
        <FaChevronRight />
      </NButton>
    </div>
  );
};

export default Cards;