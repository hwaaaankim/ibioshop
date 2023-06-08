import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function ImageCarousel() {
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
      <div className="absolute bottom-0 right-0 left-0 pb-4 flex space-x-2 items-center justify-center">
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
            <motion.div
              key={page}
              className={
                'h-[8px] cursor-pointer rounded-full bg-' +
                (page === currentPage ? 'primary' : 'black')
              }
              animate={{ width: page == currentPage ? 30 : 8 }}
              onClick={() => setPage(page)}
            ></motion.div>
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

function LatestPosts() {
  const posts = [
    {
      title: 'Biten demons lector in henderit in vulp nemusa tumps',
      date: 'December 4th, 2017',
      comments: [],
    },
    {
      title: 'Commodo laoreet semper tincidun sit dolor spums',
      date: 'November 15th, 2017',
      comments: [],
    },
  ]

  return (
    <div className="space-y-2">
      <div>
        <div className="uppercase font-semibold py-2">latest posts</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-2 items-center py-2">
        <div className="cursor-pointer hover:opacity-80">
          <img
            src="image/catalog/blog/1.jpg"
            className="w-full h-[170px] rounded"
          />
        </div>

        <div className="space-y-4 py-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className={
                'space-y-2 pb-4' + (index + 1 < posts.length ? ' border-b' : '')
              }
            >
              <div className="text-[13px] font-[600] cursor-pointer hover:text-primary">
                {post.title}
              </div>
              <div className="flex space-x-2 items-center justify-between text-[#999] text-xs">
                <div className="flex space-x-1 items-center">
                  <i className="fa fa-calendar"></i>
                  <div>{post.date}</div>
                </div>
                <div className="flex space-x-1 items-center">
                  <i className="fa fa-comments"></i>
                  <div>{post.comments.length} Comment</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const [currentPage, setPage] = useState(1)
  const product = {
    id: 1,
    picture: 'image/catalog/demo/product/270/e10.jpg',
    name: 'Sausage Cowbee',
    rate: 4,
    price: 89,
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="uppercase font-semibold py-2">testimonials</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-4 px-2 py-6 border rounded-md">
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-[86px] h-[86px] border-[3px] border-primary rounded-full cursor-pointer">
            <img
              src="image/catalog/demo/client/user-1.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="text-sm font-medium">Johny Walker</div>
          <div className="px-2 space-x-2">
            <i
              className="fa fa-quote-left text-gray-300"
              style={{ fontSize: 22 }}
            ></i>
            <span className="text-xs text-gray-500 text-center">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore”
            </span>
            <i
              className="fa fa-quote-right text-gray-300"
              style={{ fontSize: 22 }}
            ></i>
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
    </div>
  )
}

function MiniBanners() {
  return (
    <div className="grid grid-cols-5 gap-[30px]">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="h-[180px] cursor-pointer hover:opacity-80">
          <img src="image/catalog/banners/cat1.jpg" className="w-full h-full" />
        </div>
      ))}
    </div>
  )
}

function FlashSale() {
  const flashSaleRef = useRef()
  const [width, setWidht] = useState(0)
  useEffect(() => setWidht(flashSaleRef.current.clientWidth), [])

  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 40,
        percentage: 40,
      },
    },
  ]
  const ProgressBar = ({ progress }) => (
    <div className="flex">
      <div
        className="h-[14px] bg-primary rounded-l-lg"
        style={{ width: progress + '%' }}
      ></div>
      <div
        className="h-[14px] bg-gray-200 rounded-r-lg"
        style={{ width: 100 - progress + '%' }}
      ></div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 items-center">
        <div ref={flashSaleRef} className="py-1 uppercase text-xl font-bold">
          flash sale
        </div>

        <div className="flex-auto flex space-x-2 items-center justify-between">
          <div className="flex space-x-2 items-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex space-x-2 items-center">
                <div className="bg-primary text-white text-lg px-[10px] rounded">
                  00
                </div>
                {index < 4 && <div className="text-lg font-bold">:</div>}
              </div>
            ))}
          </div>
          <div className="flex space-x-2 items-center text-[13px] cursor-pointer hover:text-primary">
            <div>View All</div>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="border-b-2 border-primary" style={{ width }}></div>
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>

      <div className="grid grid-cols-5 gap-[30px]">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="h-[180px] cursor-pointer group relative">
              <img
                src={product.picture}
                className="w-full h-full opacity-80 group-hover:opacity-100"
              />
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[5px] top-[5px]">
                <div className="text-xs font-semibold">11%</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-1 items-center">
                  {[1, 2, 3, 4, 5].map((sindex) => (
                    <i
                      key={sindex}
                      className="fa fa-star text-[#fec42d]"
                      style={{ fontSize: 12 }}
                    ></i>
                  ))}
                </div>
                <div className="text-[10px] text-[#333]">
                  ({product.totalRatings})
                </div>
              </div>
              <div className="text-[13px] text-[#333] font-medium">
                {product.name}
              </div>
              <div className="flex space-x-2 items-center justify-center">
                <div className="text-primary font-semibold">
                  $
                  {product.discounted ? product.discountedPrice : product.price}
                  .00
                </div>
                <div className="line-through text-gray-600 text-sm">
                  ${product.price}.00
                </div>
              </div>

              <div className="w-full space-y-2">
                <ProgressBar progress={product.totalSold.percentage} />
                <div className="flex items-center justify-center">
                  <div className="text-[#333] text-xs">Sold:&nbsp;</div>
                  <div className="text-primary text-[13px] font-semibold">
                    {product.totalSold.total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CatalogBanners() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="h-[225px] cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner3.jpg"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-2 h-[225px] cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner4.jpg"
          className="w-full h-full"
        />
      </div>
      <div className="h-[225px] cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner5.jpg"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

function ProductCategories({
  category,
  subCategories,
  hasLeftBannner = false,
  hasRightBanner = false,
}) {
  if (!category) category = 'Technology'
  if (!subCategories)
    subCategories = [
      'Smartphone',
      'Tablets',
      'Computer',
      'Accessories',
      'Hitech',
    ]
  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      isNew: true,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-stretch justify-between">
        <div className="bg-primary text-white border-b-2 border-primary uppercase font-semibold py-2 px-4">
          {category}
        </div>
        <div className="flex-auto border-b-2 border-gray-200 flex space-x-4 items-center justify-end">
          {subCategories.map((scategory, index) => (
            <div className="py-1 px-2 cursor-pointer text-gray-800 hover:text-primary">
              {scategory}
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        {hasLeftBannner && (
          <div className="w-[200px] h-[275px] cursor-pointer opacity-80 hover:opacity-100">
            <img
              src="image/catalog/demo/category/tab1.jpg"
              className="w-full h-full"
            />
          </div>
        )}

        <div className="flex-auto grid grid-cols-4 gap-[30px]">
          {products.map((product, index) => (
            <div key={index} className="space-y-2">
              <div className="h-[180px] cursor-pointer group relative">
                <img
                  src={product.picture}
                  className="w-full h-full opacity-80 group-hover:opacity-100"
                />
                {product.discounted && (
                  <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[5px] top-[5px]">
                    <div className="text-xs font-semibold">11%</div>
                  </div>
                )}
                {product.isNew && (
                  <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[5px] top-[5px]">
                    <div className="text-xs font-semibold">New</div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex space-x-2 items-center">
                  <div className="flex space-x-1 items-center">
                    {[1, 2, 3, 4, 5].map((sindex) => (
                      <i
                        key={sindex}
                        className="fa fa-star text-[#fec42d]"
                        style={{ fontSize: 12 }}
                      ></i>
                    ))}
                  </div>
                  <div className="text-[10px] text-[#333]">
                    ({product.totalRatings})
                  </div>
                </div>
                <div className="text-[13px] text-[#333] font-medium">
                  {product.name}
                </div>
                <div className="flex space-x-2 items-center justify-center">
                  <div className="text-primary font-semibold">
                    $
                    {product.discounted
                      ? product.discountedPrice
                      : product.price}
                    .00
                  </div>
                  {product.discounted && (
                    <div className="line-through text-gray-600 text-sm">
                      ${product.price}.00
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasRightBanner && (
          <div className="w-[200px] h-[275px] cursor-pointer opacity-80 hover:opacity-100">
            <img
              src="image/catalog/demo/category/tab1.jpg"
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Technology() {
  const scategories = [
    'Smartphone',
    'Tablets',
    'Computer',
    'Accessories',
    'Hitech',
  ]
  return (
    <ProductCategories
      category="Technology"
      subCategories={scategories}
      hasLeftBannner={true}
    />
  )
}

function FurnitureNdecor() {
  const scategories = [
    'Living room',
    'Bathroom',
    'Bedroom',
    'Accessories',
    'Decor',
  ]
  return (
    <ProductCategories
      category="Furniture & decor"
      subCategories={scategories}
      hasRightBanner={true}
    />
  )
}

function FashionNaccessories() {
  const scategories = [
    'Smartphone',
    'Tablets',
    'Computer',
    'Accessories',
    'Hitech',
  ]
  return (
    <ProductCategories
      category="Fashion & accessories"
      subCategories={scategories}
      hasLeftBannner={true}
    />
  )
}

function NewArrivals() {
  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 40,
        percentage: 40,
      },
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-4">
      <div className="flex items-stretch">
        {['best seller', 'new arrivals', 'most rating'].map((title, index) => (
          <div
            key={index}
            className={
              'py-1 pr-12 uppercase text-lg font-semibold cursor-pointer hover:text-primary border-b-2 ' +
              (activeTab !== index
                ? 'border-gray-300'
                : 'border-primary text-primary')
            }
            onClick={() => setActiveTab(index)}
          >
            {title}
          </div>
        ))}
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>

      <div className="grid grid-cols-5 gap-[30px]">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="h-[180px] cursor-pointer group relative">
              <img
                src={product.picture}
                className="w-full h-full opacity-80 group-hover:opacity-100"
              />
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[5px] top-[5px]">
                <div className="text-xs font-semibold">11%</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-1 items-center">
                  {[1, 2, 3, 4, 5].map((sindex) => (
                    <i
                      key={sindex}
                      className="fa fa-star text-[#fec42d]"
                      style={{ fontSize: 12 }}
                    ></i>
                  ))}
                </div>
                <div className="text-[10px] text-[#333]">
                  ({product.totalRatings})
                </div>
              </div>
              <div className="text-[13px] text-[#333] font-medium">
                {product.name}
              </div>
              <div className="flex space-x-2 items-center justify-center">
                <div className="text-primary font-semibold">
                  $
                  {product.discounted ? product.discountedPrice : product.price}
                  .00
                </div>
                <div className="line-through text-gray-600 text-sm">
                  ${product.price}.00
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandsCarousel() {
  return (
    <div className="p-[30px] border border-gray-200 rounded grid grid-cols-7 gap-0">
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div
          key={index}
          className="h-[71px] opacity-80 hover:opacity-100 cursor-pointer"
        >
          <img src="image/catalog/brands/b1.png" className="w-full h-full" />
        </div>
      ))}
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
      <div className="col-span-4 flex space-x-8">
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
          <LatestPosts />
          <Testimonials />

          <div className="h-[390px] cursor-pointer">
            <img
              src="image/catalog/banners/banner2.jpg"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex-auto space-y-8">
          <MiniBanners />
          <FlashSale />
          <CatalogBanners />
          <Technology />
          <FurnitureNdecor />
          <FashionNaccessories />
          <div className="grid grid-cols-2 gap-[30px]">
            {[1, 2].map((index) => (
              <div
                key={index}
                className="h-[140px] opacity-80 hover:opacity-100 cursor-pointer"
              >
                <img
                  src="image/catalog/banners/bn1.jpg"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          <NewArrivals />
          <BrandsCarousel />
        </div>
      </div>
    </div>
  )
}
