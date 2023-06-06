import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function ImageCarousel() {
  const main = useRef()
  const [mainWidth, setWidth] = useState(0)
  const images = [
    { id: 1, path: 'image/catalog/slideshow/home1/slider-1.jpg' },
    { id: 2, path: 'image/catalog/slideshow/home1/slider-2.jpg' },
    { id: 3, path: 'image/catalog/slideshow/home1/slider-3.jpg' },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    setWidth(main.current.clientWidth)
  }, [])

  return (
    <div className="cursor-pointer w-full h-full relative overflow-x-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        {images.map((image, index) => (
          <motion.img
            animate={{ x: (index - activeIndex) * mainWidth }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            src={image.path}
            className="h-full absolute top-0 bottom-0 left-0 right-0"
            key={image.id}
          ></motion.img>
        ))}
      </div>
      <div
        ref={main}
        className="absolute bottom-0 right-0 left-0 flex space-x-2 items-center justify-center py-4 cursor-default"
      >
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

function BestSelling() {
  const [currentPage, setPage] = useState(1)
  const bestSellingItem = {
    id: 1,
    picture: 'image/catalog/demo/product/80/1.jpg',
    name: 'Sausage Cowbee',
    rate: 4,
    price: 89,
    discounted: true,
    discount: 80,
  }

  return (
    <div className="rounded border border-gray-50">
      <div className="flex space-x-2 justify-between items-center bg-[#e9ecf1] rounded-t py-[6px] px-[20px]">
        <div className="flex-auto uppercase font-semibold">best selling</div>
        <div className="flex space-x-2 items-center">
          {[1, 2].map((page) => (
            <div
              key={page}
              className={
                'h-[8px] cursor-pointer rounded-full bg-' +
                (page === currentPage ? 'primary' : 'black')
              }
              style={{ width: page == currentPage ? 30 : 8 }}
              onClick={() => setPage(page)}
            ></div>
          ))}
        </div>
      </div>

      <div>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="flex space-x-2 items-center">
            <img src={bestSellingItem.picture} className="w-[60px] h-[60px]" />
            <div className="flex-auto -space-y-1">
              <div className="text-[13px] pt-2 cursor-pointer hover:text-primary">
                {bestSellingItem.name}
              </div>
              <div className="space-x-1">
                <i
                  className="fa fa-star text-[#fec42d]"
                  style={{ fontSize: 12 }}
                ></i>
                <i
                  className="fa fa-star text-[#fec42d]"
                  style={{ fontSize: 12 }}
                ></i>
                <i
                  className="fa fa-star text-[#fec42d]"
                  style={{ fontSize: 12 }}
                ></i>
                <i
                  className="fa fa-star text-[#fec42d]"
                  style={{ fontSize: 12 }}
                ></i>
                <i
                  className="fa fa-star text-[#fec42d]"
                  style={{ fontSize: 12 }}
                ></i>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {bestSellingItem.discounted && (
                  <div className="text-primary font-semibold">
                    ${bestSellingItem.discount}.00
                  </div>
                )}
                <div
                  className={
                    bestSellingItem.discounted
                      ? 'line-through text-[14px] text-gray-500'
                      : 'text-primary font-semibold'
                  }
                >
                  ${bestSellingItem.price}.00
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Home() {
  return (
    <div className="grid grid-cols-4 gap-8 w-[95%] mx-auto py-8">
      <div className="col-span-3 flex space-x-8">
        <div className="" style={{ width: 237 }}></div>
        <div className="flex-auto bg-gray-50 h-[300px]">
          <ImageCarousel />
        </div>
      </div>
      <BestSelling />
    </div>
  )
}

export default Home
