import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function GoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [height, setHeight] = useState(0)
  const targetEl = useRef()
  useEffect(() => setHeight(targetEl.current.clientHeight), [])
  const images = [
    { id: 1, path: 'image/catalog/slideshow/home1/slider-1.jpg' },
    { id: 2, path: 'image/catalog/slideshow/home1/slider-2.jpg' },
    { id: 3, path: 'image/catalog/slideshow/home1/slider-3.jpg' },
  ]
  return (
    <div className={'overflow-x-hidden relative h-[' + height + 'px]'}>
      <div className="relative h-full">
        {images.map((image, index) => (
          <motion.div
            animate={{ x: (index - currentIndex) * 100 + '%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="absolute right-0 left-0"
          >
            <img
              ref={index === 0 ? targetEl : null}
              key={image.id}
              src={image.path}
              className="w-full h-[300px]"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 left-0 pb-2 flex space-x-2 items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              'w-[30px] h-[6px] ' +
              (index === currentIndex ? 'bg-primary' : 'bg-white') +
              ' hover:bg-primary rounded cursor-pointer'
            }
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
