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

function LatestProducts() {
  const [currentPage, setPage] = useState(1)
  const product = {
    id: 1,
    picture: 'image/catalog/demo/product/80/1.jpg',
    name: 'Sausage Cowbee',
    rate: 4,
    price: 89,
    discounted: true,
    discount: 80,
  }

  return (
    <div className="space-y-3">
      <div>
        <div className="uppercase font-semibold py-2">latest products</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-3">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <img src={product.picture} className="w-[80px] h-[80px]" />
            <div className="flex-auto space-y-1">
              <div className="text-[13px] pt-2 cursor-pointer hover:text-primary">
                {product.name}
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
                {product.discounted && (
                  <div className="text-primary font-semibold">
                    ${product.discount}.00
                  </div>
                )}
                <div
                  className={
                    product.discounted
                      ? 'line-through text-[14px] text-gray-500'
                      : 'text-primary font-semibold'
                  }
                >
                  ${product.price}.00
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 items-center ml-[80px] pl-4 py-6">
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
  )
}

function Features() {
  const items = [
    {
      id: 1,
      icon: 'fa fa-file-text-o',
      title: 'free delivery',
      description: 'on order over $49.86',
    },
    {
      id: 2,
      icon: 'fa fa-shield',
      title: 'order protection',
      description: 'secured information',
    },
    {
      id: 3,
      icon: 'fa fa-gift',
      title: 'promotion gift',
      description: 'special offers!',
    },
    {
      id: 4,
      icon: 'fa fa-money',
      title: 'money back',
      description: 'return over 30 days',
    },
  ]
  return (
    <div className="border">
      <img
        src="image/catalog/banners/call-us.jpg"
        className="w-full h-[124px] cursor-pointer"
      />
      <div className="">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={
              'flex space-x-4 items-center px-4 py-6 cursor-pointer group' +
              (index + 1 < items.length ? ' border-b' : '')
            }
          >
            <i
              className={item.icon + ' text-primary'}
              style={{ fontSize: 36 }}
            ></i>
            <div className="text-[13px]">
              <div className="uppercase font-semibold text-gray-700 group-hover:text-primary group-hover:text-[13.5px]">
                {item.title}
              </div>
              <div className="capitalize text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Recommended() {
  const [currentPage, setPage] = useState(1)
  const product = {
    id: 1,
    picture: 'image/catalog/demo/product/270/e10.jpg',
    name: 'Sausage Cowbee',
    rate: 4,
    price: 89,
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="uppercase font-semibold py-2">recommended</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-2 items-center">
        <div className="cursor-pointer hover:opacity-80">
          <img src={product.picture} className="w-full h-[246px]" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-1 items-center justify-center">
            <i
              className="fa fa-star text-[#fec42d]"
              style={{ fontSize: 11 }}
            ></i>
            <i
              className="fa fa-star text-[#fec42d]"
              style={{ fontSize: 11 }}
            ></i>
            <i
              className="fa fa-star text-[#fec42d]"
              style={{ fontSize: 11 }}
            ></i>
            <i
              className="fa fa-star text-[#fec42d]"
              style={{ fontSize: 11 }}
            ></i>
            <i
              className="fa fa-star text-[#fec42d]"
              style={{ fontSize: 11 }}
            ></i>
          </div>
          <div className="text-[13px] font-semibold">{product.name}</div>
          <div className="text-primary font-semibold">${product.price}.00</div>
        </div>
      </div>

      <div className="flex space-x-2 items-center ml-[80px]">
        {[1, 2, 3].map((page) => (
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
  )
}

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-8 w-[95%] mx-auto py-8">
      <div className="col-span-3 flex space-x-8">
        <div className="" style={{ width: 237 }}></div>
        <div className="flex-auto bg-gray-50 h-[300px]">
          <ImageCarousel />
        </div>
      </div>
      <BestSelling />
      <div className="col-span-3 flex space-x-8">
        <div className="space-y-8" style={{ width: 237 }}>
          <div className="h-[390px] cursor-pointer">
            <img
              src="image/catalog/banners/banner1.jpg"
              className="w-full h-full"
            />
          </div>
          <LatestProducts />
          <Features />
          <Recommended />
        </div>
        <div className="flex-auto">main section</div>
      </div>
    </div>
  )
}
