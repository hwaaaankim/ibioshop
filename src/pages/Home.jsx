import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { openModal } from '../store/slices/modalSlice'
import { http } from '../services/http/http'
import { addToCart } from '../store/slices/cartSlice'
import { useSnackbar } from 'notistack'
import { BASE_URL, CDN_URL } from '../config/config'

function Carousel({
  items,
  Child,
  index = 0,
  hideBtns = false,
  showChevrons = false,
  showChevronsConditionally = true,
  chevronY = 0,
  chevronlX = 0,
  chevronrX = 0,
  pageSize = 1,
  draggable = false,
}) {
  const [mouseIn, setMouseIn] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(index)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const targetEl = useRef()
  const widthRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      setHeight(targetEl.current.clientHeight)
    }, 1000)
    setWidth(widthRef.current.clientWidth)
  }, [])
  useEffect(() => setCurrentIndex(index), [index])
  const totalPages = items.length
  const makeChevronVisible =
    showChevrons &&
    (!showChevronsConditionally || (showChevronsConditionally && mouseIn))

  const handlePageChange = (drxn) => {
    if (drxn < 0)
      setCurrentIndex((prevIndex) =>
        prevIndex + pageSize == totalPages ? prevIndex : prevIndex + 1
      )
    else if (drxn > 0)
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
      )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <div ref={widthRef} className="right-0 left-0 top-0 bottom-0"></div>
      <div className={'overflow-x-hidden relative'} style={{ height }}>
        <div className={'relative h-full'}>
          {items.map((item, index) => (
            <motion.div
              animate={{
                x:
                  (index - currentIndex) *
                  (width / pageSize + (pageSize === 1 ? 0 : 30 / pageSize)),
              }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className={'absolute left-0'}
              style={{
                width:
                  width / pageSize -
                  (pageSize === 1 ? 0 : 30) +
                  (pageSize === 1 ? 0 : 30 / pageSize),
                marginRight: pageSize === 1 ? 0 : 30,
              }}
              key={index}
            >
              <div ref={index === 0 ? targetEl : null} className="w-full">
                <Child
                  item={item}
                  changePage={draggable ? handlePageChange : null}
                />
              </div>
            </motion.div>
          ))}
        </div>
        {!hideBtns && (
          <div className="absolute bottom-0 right-0 left-0 pb-4 flex space-x-2 items-center justify-center">
            {items.map((item, index) => (
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
        )}
      </div>

      {makeChevronVisible && (
        <>
          <div className="absolute bottom-0 top-0 -left-[20px] z-20 flex items-center">
            <motion.div
              initial={{ x: chevronlX, y: chevronY, scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white cursor-pointer shadow-lg border text-gray-400 hover:bg-primary hover:text-white w-[40px] h-[40px] flex items-center justify-center rounded-full"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
                )
              }
            >
              <i className="fa fa-angle-left" style={{ fontSize: 24 }}></i>
            </motion.div>
          </div>
          <div className="absolute bottom-0 top-0 -right-[20px] z-20 flex items-center">
            <motion.div
              initial={{ x: chevronrX, y: chevronY, scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white cursor-pointer shadow-lg border text-gray-400 hover:bg-primary hover:text-white w-[40px] h-[40px] flex items-center justify-center rounded-full"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex + pageSize == totalPages ? prevIndex : prevIndex + 1
                )
              }
            >
              <i className="fa fa-angle-right" style={{ fontSize: 24 }}></i>
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}

function ImageCarouse({ height }) {
  const images = [
    { id: 1, path: CDN_URL + 'image/catalog/slideshow/home1/slider-1.jpg' },
    { id: 2, path: CDN_URL + 'image/catalog/slideshow/home1/slider-2.jpg' },
    { id: 3, path: CDN_URL + 'image/catalog/slideshow/home1/slider-3.jpg' },
  ]

  const child = ({ item, changePage }) => {
    const handleDragend = (event, info) => {
      console.log('end: ', info)
      changePage(info.offset.x)
    }

    return (
      <motion.img
        drag="x"
        dragConstraints={{ left: 50, right: 50 }}
        dragSnapToOrigin={true}
        onDragEnd={handleDragend}
        src={item.path}
        className="w-full"
        style={{ height }}
      />
    )
  }
  return <Carousel Child={child} draggable={true} items={images} />
}

function BestSelling() {
  const [currentPage, setPage] = useState(0)
  const navigate = useNavigate()
  const bestSellingItems = [
    {
      id: 1,
      picture: CDN_URL + 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
    {
      id: 2,
      picture: CDN_URL + 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 67,
      discounted: true,
      discount: 20,
    },
  ]

  const child = ({ item }) => (
    <div className="w-full grid grid-cols-1 xs:grid-cols-2 mdp5:grid-cols-4 lgp8:grid-cols-1 gap-[10px]">
      {[1, 2, 3, 4].map((pitem, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <img src={item.picture} className="w-[60px] h-[60px]" />
          <div className="flex-auto -space-y-1">
            <div
              className="text-[13px] cursor-pointer hover:text-primary"
              onClick={() => navigate('/product')}
            >
              {item.name}
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
              {item.discounted && (
                <div className="text-primary font-semibold">
                  ${item.discount}.00
                </div>
              )}
              <div
                className={
                  item.discounted
                    ? 'line-through text-[14px] text-gray-500'
                    : 'text-primary font-semibold'
                }
              >
                ${item.price}.00
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <div className="col-span-4 lgp8:col-span-1 rounded border border-gray-200 space-y-1 pb-4">
      <div className="flex space-x-2 justify-between items-center bg-[#e9ecf1] rounded-t py-[8px] px-[20px]">
        <div className="flex-auto uppercase text-black font-semibold">
          best selling
        </div>
        <div className="flex space-x-2 items-center">
          {[0, 1].map((page) => (
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

      <Carousel
        Child={child}
        items={bestSellingItems}
        index={currentPage}
        hideBtns={true}
      />
    </div>
  )
}

function LatestProducts() {
  const [currentPage, setPage] = useState(1)
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      picture: CDN_URL + 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
    {
      id: 2,
      picture: CDN_URL + 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
  ]
  const child = ({ item }) => (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((pitem, index) => (
        <div key={index} className="flex space-x-4 items-center">
          <img src={item.picture} className="w-[80px] h-[80px]" />
          <div className="flex-auto space-y-1">
            <div
              className="text-[13px] pt-2 cursor-pointer hover:text-primary"
              onClick={() => navigate('/product')}
            >
              {item.name}
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
              {item.discounted && (
                <div className="text-primary font-semibold">
                  ${item.discount}.00
                </div>
              )}
              <div
                className={
                  item.discounted
                    ? 'line-through text-[14px] text-gray-500'
                    : 'text-primary font-semibold'
                }
              >
                ${item.price}.00
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-3">
      <div>
        <div className="uppercase font-semibold py-2">latest products</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <Carousel
        Child={child}
        items={products}
        index={currentPage}
        hideBtns={true}
      />

      <div className="flex space-x-2 items-center ml-[80px] pl-4 py-6">
        {[0, 1].map((page) => (
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
        src={CDN_URL + 'image/catalog/banners/call-us.jpg'}
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
  const [currentPage, setPage] = useState(0)
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      picture: CDN_URL + 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
    },
    {
      id: 2,
      picture: CDN_URL + 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 89,
    },
    {
      id: 3,
      picture: CDN_URL + 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee3',
      rate: 4,
      price: 89,
    },
  ]

  const child = ({ item }) => (
    <div className="space-y-2 items-center">
      <div
        className="cursor-pointer hover:opacity-80"
        onClick={() => navigate('/product')}
      >
        <img src={item.picture} className="w-full h-[246px]" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-1 items-center justify-center">
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
        </div>
        <div className="text-[13px] font-semibold">{item.name}</div>
        <div className="text-primary font-semibold">${item.price}.00</div>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div>
        <div className="uppercase font-semibold py-2">recommended</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <Carousel
        Child={child}
        items={products}
        index={currentPage}
        hideBtns={true}
      />

      <div className="flex space-x-2 items-center ml-[80px]">
        {[0, 1, 2].map((page) => (
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
  )
}

function LatestPosts() {
  const navigate = useNavigate()
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
            src={CDN_URL + 'image/catalog/blog/1.jpg'}
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
              <div
                className="text-[13px] font-[600] cursor-pointer hover:text-primary"
                onClick={() => navigate('/blog-detail')}
              >
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

  const [testimonials, setTestimonials] = useState([])
  const getTestimonials = async () => {
    const response = await http.request({ url: 'testimonials' })
    if (!response.isError) {
      setTestimonials(response.testimonials)
    }
  }

  useEffect(() => {
    getTestimonials()
  }, [])

  const child = ({ item }) => (
    <div className="space-y-4 flex flex-col items-center">
      <div className="w-[86px] h-[86px] border-[3px] border-primary rounded-full cursor-pointer">
        <img
          src={CDN_URL + 'image/catalog/demo/client/user-1.jpg'}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="text-sm font-medium">{item.fullName}</div>
      <div className="px-2 space-x-2">
        <i
          className="fa fa-quote-left text-gray-300"
          style={{ fontSize: 22 }}
        ></i>
        <span className="text-xs text-gray-500 text-center">
          “{item.description}”
        </span>
        <i
          className="fa fa-quote-right text-gray-300"
          style={{ fontSize: 22 }}
        ></i>
      </div>
    </div>
  )

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
        <Carousel
          Child={child}
          items={testimonials}
          index={currentPage}
          hideBtns={true}
        />

        <div className="flex space-x-2 items-center ml-[80px]">
          {[0, 1, 2].map((page) => (
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
    </div>
  )
}

function MiniBanners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mdp5:grid-cols-5 gap-[30px]">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="h-auto cursor-pointer relative group">
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-40 bg-gray-500 transition delay-100"></div>
          <img
            src={CDN_URL + '/image/catalog/banners/cat1.jpg'}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  )
}

function Product({ product, showProgress = false }) {
  const [mouseOver, setMouseOver] = useState(false)
  const navigate = useNavigate()
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

  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const openQuickView = (event) => {
    event.stopPropagation()
    dispatch(openModal({ id: 2, props: { productId: product.id } }))
  }
  const add2Cart = () => {
    dispatch(addToCart({ product: { ...product, size: 'xl' }, quantity: 1 }))
    enqueueSnackbar('Added to cart successfully!', {
      variant: 'success',
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    })
  }

  const [wlLoading, setWloading] = useState(false)
  const add2Wishlist = async () => {
    setWloading(true)
    const response = await http.request({
      method: 'post',
      url: 'wishlists',
      data: { productId: product.id, quantity: 1 },
    })
    if (!response.isError)
      enqueueSnackbar('Added to wishlist successfully!', {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      })
    else
      enqueueSnackbar("Couldn't add to wishlist, try again later!", {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      })

    setWloading(false)
  }

  const pictureRef = useRef()
  const [pictureHeight, setPictureHeight] = useState(180)
  const productNameRef = useRef()
  const [CTAsHeight, setCTAsHeight] = useState(0)
  useEffect(() => {
    setPictureHeight(pictureRef.current.clientWidth)
    setCTAsHeight(productNameRef.current.clientHeight)
  })

  return (
    <div
      className="space-y-2 w-full"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div
        className="cursor-pointer group relative"
        style={{ height: pictureHeight }}
        onClick={() => navigate('/products/' + product.id)}
      >
        <img
          src={
            product.media && product.media.length > 0
              ? BASE_URL + '/images/' + product.media[0].title
              : CDN_URL + 'image/catalog/demo/product/270/h1.jpg'
          }
          className="w-full h-full opacity-80 group-hover:opacity-100"
          ref={pictureRef}
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
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-primary hover:bg-red-500 text-white"
                onClick={openQuickView}
              >
                <i className="fa fa-eye"></i>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-full">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                exit={{ y: -30, opacity: 0, transition: { duration: 0.1 } }}
                className={
                  'absolute top-0 left-0 right-0 flex items-center z-10 h-[' +
                  CTAsHeight +
                  'px]'
                }
              >
                <div className="flex-auto flex space-x-1 items-center justify-between">
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary py-2 font-semibold px-3 text-white cursor-pointer capitalize rounded-full text-xs"
                    onClick={add2Cart}
                  >
                    add to cart
                  </motion.div>

                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={
                      'flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary ' +
                      (wlLoading ? 'cursor-not-allowed' : 'cursor-pointer')
                    }
                    onClick={!wlLoading ? add2Wishlist : () => null}
                  >
                    <i className="fa fa-heart-o"></i>
                  </motion.div>
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer"
                  >
                    <i className="fa fa-retweet"></i>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col items-center space-y-2 ">
            <div
              ref={productNameRef}
              className={
                'flex flex-col items-center space-y-2 ' +
                (mouseOver ? 'opacity-0' : 'opacity-100')
              }
            >
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
                  ({product.totalRatings || 0})
                </div>
              </div>
              <div className="text-[13px] text-[#333] font-medium">
                {product.name}
              </div>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              <div className="text-primary font-semibold">
                ${product.discounted ? product.discountedPrice : product.price}
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

        {showProgress && (
          <div className="w-full space-y-2">
            <ProgressBar progress={product?.totalSold?.percentage || 30} />
            <div className="flex items-center justify-center">
              <div className="text-[#333] text-xs">Sold:&nbsp;</div>
              <div className="text-primary text-[13px] font-semibold">
                {product?.totalSold?.total || 55}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function FlashSale({ currentWidth }) {
  const flashSaleRef = useRef()
  const [width, setWidht] = useState(0)
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
    setWidht(flashSaleRef.current.clientWidth)
  }, [])

  const getProducts = async () => {
    const response = await http.request({ url: 'products' })
    if (!response.isError) setProducts(response.products)
  }

  const child = ({ item }) => <Product product={item} showProgress={true} />

  return (
    <div className="space-y-4">
      <div className="block xs:flex space-y-1 xs:space-y-0 xs:space-x-4 items-center">
        <div ref={flashSaleRef} className="py-1 uppercase text-xl font-bold">
          flash sale
        </div>

        <div className="xs:flex-auto xs:flex xs:space-x-2 items-center justify-between">
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
          <div className="hidden xs:flex space-x-2 items-center text-[13px] cursor-pointer hover:text-primary">
            <div>View All</div>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="hidden xs:flex">
        <div className="border-b-2 border-primary" style={{ width }}></div>
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>
      {products && products.length > 0 && (
        <Carousel
          Child={child}
          items={products}
          hideBtns={true}
          showChevrons={true}
          chevronY={-80}
          index={0}
          pageSize={
            currentWidth >= 1200
              ? 5
              : currentWidth >= 992
              ? 3
              : currentWidth >= 480
              ? 2
              : 1
          }
          showChevronsConditionally={false}
        />
      )}
    </div>
  )
}

function CatalogBanners() {
  const Banner = ({ picture, moreClasses = '' }) => {
    const [mouseIn, setMouseIn] = useState(false) // mouse moves in to the left card
    const [pictureZ, setPictureZ] = useState(0)

    useEffect(() => {
      if (mouseIn) setTimeout(() => setPictureZ(30), 280)
      else {
        setPictureZ(0)
      }
    }, [mouseIn])

    return (
      <div
        className={
          'h-[225px] hidden md:block cursor-pointer relative ' + moreClasses
        }
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        <AnimatePresence>
          {mouseIn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.25 } }}
              transition={{ duration: 0 }}
              className="absolute top-0 right-0 bottom-0 left-0 bg-[#ababab] flex items-center justify-center z-10 overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white opacity-75 rounded-full z-20"
                style={{ width: 255, height: 255 }}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="absolute top-0 right-0 bottom-0 left-0"
          style={{ zIndex: pictureZ }}
        >
          <img src={picture} className="w-full h-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      <Banner picture={CDN_URL + 'image/catalog/banners/banner3.jpg'} />
      <Banner
        moreClasses="col-span-4 md:col-span-2"
        picture={CDN_URL + 'image/catalog/banners/banner4.jpg'}
      />
      <Banner picture={CDN_URL + 'image/catalog/banners/banner5.jpg'} />
    </div>
  )
}

function ProductBanners() {
  const Banner = ({ picture }) => {
    const [mouseIn, setMouseIn] = useState(false) // mouse moves in to the left card
    const [pictureZ, setPictureZ] = useState(0)

    useEffect(() => {
      if (mouseIn) setTimeout(() => setPictureZ(30), 280)
      else {
        setPictureZ(0)
      }
    }, [mouseIn])

    return (
      <div
        className={'h-[138px] hidden md:block cursor-pointer relative '}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        <AnimatePresence>
          {mouseIn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.28 } }}
              transition={{ duration: 0 }}
              className="absolute top-0 right-0 bottom-0 left-0 bg-[#ababab] flex items-center justify-center z-10 overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.28 }}
                className="bg-white opacity-75 rounded-full z-20"
                style={{ width: 255, height: 255 }}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="absolute top-0 right-0 bottom-0 left-0"
          style={{ zIndex: pictureZ }}
        >
          <img src={picture} className="w-full h-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
      {[1, 2].map((index) => (
        <Banner
          key={index}
          picture={CDN_URL + 'image/catalog/banners/bn1.jpg'}
        />
      ))}
    </div>
  )
}

function ProductCategories({
  currentWidth,
  category,
  subCategories,
  hasLeftBannner = false,
  hasRightBanner = false,
}) {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await http.request({ url: 'products' })
    if (!response.isError) setProducts(response.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const child = ({ item }) => <Product product={item} />

  return (
    <div className="space-y-4">
      <div className="block mdp5:flex items-stretch justify-between space-y-2 mdp5:space-y-0">
        <div className="bg-primary inline-block text-white border-b-2 border-primary uppercase font-semibold py-2 px-4">
          {category}
        </div>
        <div className="flex-auto border-b-2 border-gray-200 flex space-x-4 items-center mdp5:justify-end overflow-x-auto">
          {subCategories.map((scategory, index) => (
            <div
              key={index}
              className="py-1 px-2 cursor-pointer text-gray-800 hover:text-primary text-[12px] flex-shrink-0"
            >
              {scategory.name}
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
        {hasLeftBannner && (
          <div className="md:w-[200px] h-[275px] cursor-pointer relative group">
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-40 bg-gray-500 transition delay-100"></div>
            <img
              src={CDN_URL + 'image/catalog/demo/category/tab1.jpg'}
              className="w-full h-full"
            />
          </div>
        )}

        <div className="md:flex-auto">
          <Carousel
            Child={child}
            items={products}
            hideBtns={true}
            showChevrons={true}
            chevronY={-50}
            index={0}
            pageSize={
              currentWidth >= 1200
                ? 4
                : currentWidth >= 992
                ? 2
                : currentWidth >= 768
                ? 1
                : currentWidth >= 480
                ? 2
                : 1
            }
          />
        </div>

        {hasRightBanner && (
          <div className="md:w-[200px] h-[275px] cursor-pointer relative group">
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-40 bg-gray-500 transition delay-100"></div>
            <img
              src={CDN_URL + 'image/catalog/demo/category/tab1.jpg'}
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

function ProductsByCategory({ currentWidth }) {
  const [categories, setCategories] = useState([])
  const getCategries = async () => {
    const response = await http.request({ url: 'product_categories' })
    if (!response.isError) {
      const parentCategories = response.filter(
        (item) => item.children && item.children.length > 0
      )
      console.log({ len: parentCategories.length, items: parentCategories })
      setCategories(parentCategories)
    }
  }

  useEffect(() => {
    getCategries()
  }, [])
  return (
    <>
      {categories.map((parent, index) => (
        <ProductCategories
          key={parent.id}
          category={parent.name}
          subCategories={parent.children}
          hasLeftBannner={index % 2 === 0}
          hasRightBanner={index % 2 !== 0}
          currentWidth={currentWidth}
        />
      ))}
    </>
  )
}

function NewArrivals({ currentWidth }) {
  const products = [
    {
      name: 'Pastrami bacon',
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
    {
      name: 'Pastrami bacon',
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
      picture: CDN_URL + 'image/catalog/demo/product/270/h1.jpg',
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
  ].map((product, index) => ({ id: index, ...product }))

  const [activeTab, setActiveTab] = useState(0)
  const [showTabsdd, setShowTabsdd] = useState(false)

  const child = ({ item }) => <Product product={item} />
  const tabs = ['best seller', 'new arrivals', 'most rating']
  const [hoverIndex, setHoverIndex] = useState(undefined)

  return (
    <div className="space-y-4">
      <div className="hidden mdp5:flex items-stretch">
        {tabs.map((title, index) => (
          <div
            key={index}
            className={
              'py-1 pr-12 uppercase text-lg font-semibold cursor-pointer hover:text-primary border-b-2 relative border-gray-300'
            }
            onClick={() => setActiveTab(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(undefined)}
          >
            <div
              className={index === activeTab ? 'text-primary' : 'text-gray-900'}
            >
              {title}
            </div>
            <AnimatePresence>
              {activeTab === index && (
                <motion.div
                  exit={{ scaleX: 0, originX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-[100px] h-[2px] bottom-0 bg-primary -mb-[2px]"
                ></motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hoverIndex === index && activeTab !== index && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1, originX: 0 }}
                  exit={{ scaleX: 0, originX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-[100px] h-[2px] bottom-0 bg-primary -mb-[2px]"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>

      <div className="flex mdp5:hidden">
        <div className="relative">
          <div
            className="border border-gray-1 flex items-stretch leading-[30px] cursor-pointer"
            onClick={() => setShowTabsdd((prev) => !prev)}
          >
            <div className="w-[167px] indent-5 capitalize text-sm flex items-center">
              {tabs[activeTab]}
            </div>
            <div className="px-2 bg-gray-1 text-gray-600 flex items-center text-sm py-1">
              ▼
            </div>
          </div>

          {showTabsdd && (
            <div className="absolute z-50 left-0 right-0 bg-white shadow space-y-1">
              {tabs.map((title, index) => (
                <div
                  className={
                    'capitalize cursor-pointer indent-5 py-1' +
                    (index === activeTab ? ' text-primary' : '')
                  }
                  key={index}
                  onClick={() => {
                    setActiveTab(index)
                    setShowTabsdd(false)
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Carousel
        Child={child}
        items={products}
        hideBtns={true}
        showChevrons={true}
        chevronY={-50}
        index={0}
        pageSize={
          currentWidth >= 1200
            ? 5
            : currentWidth >= 992
            ? 3
            : currentWidth >= 768
            ? 2
            : 1
        }
      />
    </div>
  )
}

function BrandsCarousel() {
  const child = () => (
    <div className="h-[71px]  hover:opacity-60 cursor-pointer -mx-3">
      <img
        src={CDN_URL + '/image/catalog/brands/b1.png'}
        className="w-full h-full"
      />
    </div>
  )
  return (
    <div className="p-[30px] border border-gray-200 rounded">
      <Carousel
        Child={child}
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        hideBtns={true}
        showChevrons={true}
        chevronlX={-18}
        chevronrX={18}
        showChevronsConditionally={false}
        pageSize={7}
      />
    </div>
  )
}

export default function Home() {
  const [currentWidth, setCurrentWidth] = useState()
  const handleResize = function () {
    setCurrentWidth(document.body.clientWidth)
  }

  useEffect(() => {
    setCurrentWidth(document.body.clientWidth)
    window.addEventListener('resize', handleResize)
  }, [])

  const header = useSelector((state) => state.header)
  const cmWidth = header.cmWidth

  const imgRef = useRef()
  const [height, setHeight] = useState(300)
  useEffect(() => {
    if (imgRef.current) setHeight(imgRef.current.clientWidth * (45 / 109))
  }, [imgRef])

  return (
    <div className="px-[15px] md:px-0 w-full md:w-[750px] mdp5:w-[95%] lgp8:max-w-[1650px] mx-auto py-[30px] space-y-7">
      <div className="flex">
        <div
          className="hidden lgp8:block px-[15px] ml-[15px]"
          style={{ width: cmWidth }}
        ></div>
        <div className="flex-auto lgp8:flex px-[15px] lgp8:space-x-[30px]">
          <div
            ref={imgRef}
            className="w-full lgp8:w-[78%] raysMax:w-[80%] bg-[#cfcbcb]"
            style={{ height }}
          >
            <ImageCarouse height={height} />
          </div>
          <div className="w-full lgp8:w-[23%] raysMax:w-[20%]">
            <BestSelling />
          </div>
        </div>
      </div>

      <div className="col-span-4 md:flex md:space-x-8 space-y-4 md:space-y-0">
        <div className="space-y-8 md:w-[237px] shrink-0">
          <div className="h-[390px] cursor-pointer">
            <img
              src={CDN_URL + 'image/catalog/banners/banner1.jpg'}
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
              src={CDN_URL + 'image/catalog/banners/banner2.jpg'}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="md:flex-auto space-y-8">
          <MiniBanners />
          <FlashSale currentWidth={currentWidth} />
          <CatalogBanners />
          <ProductsByCategory currentWidth={currentWidth} />
          <ProductBanners />
          <NewArrivals currentWidth={currentWidth} />
          <BrandsCarousel />
        </div>
      </div>
    </div>
  )
}
