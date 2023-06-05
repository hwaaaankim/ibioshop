import { useState } from 'react'
import { motion } from 'framer-motion'

function ImageCarousel() {
  const images = [
    { id: 1, path: 'image/catalog/slideshow/home1/slider-1.jpg' },
    { id: 2, path: 'image/catalog/slideshow/home1/slider-2.jpg' },
    { id: 3, path: 'image/catalog/slideshow/home1/slider-3.jpg' },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const handleClick = (index) => {
    setDirection(activeIndex < index ? 1 : -1)
    setActiveIndex(index)
  }

  return (
    <div className="cursor-pointer w-full h-full relative overflow-x-hidden">
      {images.map(
        (image, index) =>
          activeIndex === index && (
            <motion.img
              initial={{ opacity: 0, x: direction > 0 ? 2000 : -2000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'tween', duration: 0.5 }}
              src={image.path}
              className="w-full h-full"
              key={image.key}
            />
          )
      )}
      <div className="absolute bottom-0 right-0 left-0 flex space-x-2 items-center justify-center py-4 cursor-default">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={
              'w-[30px] h-[6px] ' +
              (index === activeIndex ? 'bg-primary' : 'bg-white') +
              ' hover:bg-primary rounded cursor-pointer'
            }
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
function Home() {
  return (
    <div className="grid grid-cols-4 gap-8 w-[95%] mx-auto py-8">
      <div className="col-span-3 flex space-x-8">
        <div className="w-[237px]"></div>
        <div className="flex-auto bg-gray-50 h-[300px]">
          <ImageCarousel />
        </div>
      </div>
      <div className="bg-gray-50">best selling</div>
    </div>
  )
}

export default Home
