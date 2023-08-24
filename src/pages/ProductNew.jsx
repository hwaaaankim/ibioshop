import { React, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'

import ProductPreview from '../components/product/ProductPreview'
import RelatedProducts from '../components/product/RelatedProducts'
import Categories from '../components/product/Categories'
import LatestProducts from '../components/product/LatestProducts'
import BannerSidebar from '../components/product/BannerSidebar'
import { useParams } from 'react-router-dom'
import { http } from '../services/http/http'
import BaseInput from '../components/controlled/BaseInput'
import BaseTextArea from '../components/controlled/BaseTextArea'

export default function ProductNew() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const dispatch = useDispatch()
  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }

  const getProduct = async () => {
    const response = await http.request({ url: 'products/' + id })
    if (!response.isError) {
      setProduct(response)
      showBreadCrumb({ id: response.categoryId }, response.name)
    }
  }

  const showBreadCrumb = (category, productName) => {
    dispatch(
      setPath({
        path: [
          { title: 'Smartphone & Tablets', path: '/category/' + category.id },
          { title: productName, path: '#' },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    return hideBreadcrumb
  }, [])

  useEffect(() => {
    getProduct()
  }, [id])
  return (
    <div className="w-full md:px-8 px-3 2xl:px-0 2xl:max-w-[1650px] 2xl:w-[95%] 2xl:flex 2xl:m-auto">
      <div className="w-full md:flex md:flex-row flex-col">
        <div className="xl:w-[21%] sm:w-[33%] flex flex-col lg:pr-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>

        {product && (
          <div className="xl:w-[79%] sm:w-[500px] w-full flex flex-col space-y-10">
            <ProductPreview product={product} />
            <ProductTab product={product} />
            <RelatedProducts />
          </div>
        )}
      </div>
    </div>
  )
}

function Description() {
  return (
    <div className="space-y-4">
      <div className="text-[13px]">
        The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
        pixel resolution. Designed specifically for the creative professional,
        this display provides more space for easier access to all the tools and
        palettes needed to edit, format and composite your work. Combine this
        display with a Mac Pro, MacBook Pro, or PowerMac G5 and there's no limit
        to what you can achieve.
      </div>
      <div className="text-[13px]">
        The Cinema HD features an active-matrix liquid crystal display that
        produces flicker-free images that deliver twice the brightness, twice
        the sharpness and twice the contrast ratio of a typical CRT display.
        Unlike other flat panels, it's designed with a pure digital interface to
        deliver distortion-free images that never need adjusting. With over 4
        million digital pixels, the display is uniquely suited for scientific
        and technical applications such as visualizing molecular structures or
        analyzing geological data.
      </div>
      <div className="text-[13px]">
        Offering accurate, brilliant color performance, the Cinema HD delivers
        up to 16.7 million colors across a wide gamut allowing you to see subtle
        nuances between colors from soft pastels to rich jewel tones. A wide
        viewing angle ensures uniform color from edge to edge. Apple's ColorSync
        technology allows you to create custom profiles to maintain consistent
        color onscreen and in print. The result: You can confidently use this
        display in all your color-critical applications.
      </div>
      <div className="text-[13px]">
        Housed in a new aluminum design, the display has a very thin bezel that
        enhances visual accuracy. Each display features two FireWire 400 ports
        and two USB 2.0 ports, making attachment of desktop peripherals, such as
        iSight, iPod, digital and still cameras, hard drives, printers and
        scanners, even more accessible and convenient. Taking advantage of the
        much thinner and lighter footprint of an LCD, the new displays support
        the VESA (Video Electronics Standards Association) mounting interface
        standard. Customers with the optional Cinema Display VESA Mount Adapter
        kit gain the flexibility to mount their display in locations most
        appropriate for their work environment.
      </div>
      <div className="text-[13px]">
        The Cinema HD features a single cable design with elegant breakout for
        the USB 2.0, FireWire 400 and a pure digital connection using the
        industry standard Digital Video Interface (DVI) interface. The DVI
        connection allows for a direct pure-digital connection.
      </div>

      <div className="space-y-3">
        <div className="font-semibold">Features:</div>

        <div className="text-[13px]">Unrivaled display performance</div>

        <div className="space-y-1">
          <div className="text-[13px]">
            30-inch (viewable) active-matrix liquid crystal display provides
            breathtaking image quality and vivid, richly saturated color.
          </div>
          <div className="text-[13px]">
            Support for 2560-by-1600 pixel resolution for display of high
            definition still and video imagery.
          </div>
          <div className="text-[13px]">
            Wide-format design for simultaneous display of two full pages of
            text and graphics.
          </div>
          <div className="text-[13px]">
            Industry standard DVI connector for direct attachment to Mac- and
            Windows-based desktops and notebooks
          </div>
          <div className="text-[13px]">
            Incredibly wide (170 degree) horizontal and vertical viewing angle
            for maximum visibility and color performance.
          </div>
          <div className="text-[13px]">
            Lightning-fast pixel response for full-motion digital video
            playback.
          </div>
          <div className="text-[13px]">
            Support for 16.7 million saturated colors, for use in all
            graphics-intensive applications.
          </div>
          <div className="text-[13px]">Simple setup and operation</div>
        </div>
        <div className="space-y-1">
          <div className="text-[13px]">
            Single cable with elegant breakout for connection to DVI, USB and
            FireWire ports
          </div>
          <div className="text-[13px]">
            Built-in two-port USB 2.0 hub for easy connection of desktop
            peripheral devices.
          </div>
          <div className="text-[13px]">
            Two FireWire 400 ports to support iSight and other desktop
            peripherals
          </div>
          <div className="text-[13px]">Sleek, elegant design</div>
        </div>
        <div className="space-y-1">
          <div className="text-[13px]">
            Huge virtual workspace, very small footprint.
          </div>
          <div className="text-[13px]">
            Narrow Bezel design to minimize visual impact of using dual displays
          </div>
          <div className="text-[13px]">
            Unique hinge design for effortless adjustment
          </div>
          <div className="text-[13px]">
            Support for VESA mounting solutions (Apple Cinema Display VESA Mount
            Adapter sold separately)
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewForm() {
  return (
    <>
      <div className="space-y-2">
        <div className="text-lg font-medium">Write a review</div>
        <BaseInput placeholder="Your Name" />
        <BaseTextArea placeholder="Your Review" rows={2} />
      </div>

      <div className="space-y-2">
        <div className="flex space-x-2 items-center text-[11px]">
          <div className="bg-[#a94442] text-white rounded p-[5px]">Note:</div>
          <div>HTML is not translated!</div>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="text-sm font-medium">Rating</div>
        <div className="flex space-x-2 items-center">
          <div className="text-sm">Bad</div>
          <input name="rate" type="radio" />
          <input name="rate" type="radio" />
          <input name="rate" type="radio" />
          <input name="rate" type="radio" />
          <input name="rate" type="radio" />
          <div className="text-sm">Good</div>
        </div>
      </div>

      <div className="flex">
        <div className="py-[6px] px-3 text-white text-sm flex space-x-2 items-center bg-[gray] hover:bg-primary cursor-pointer">
          Continue
        </div>
      </div>
    </>
  )
}

function Reviews() {
  return (
    <div className="space-y-4">
      <div className="border">
        <div className="grid grid-cols-2 gap-0 border-b bg-gray-100 px-2 items-center">
          <div className="py-1 text-[13px] font-medium border-r">
            Super Administrator
          </div>
          <div className="py-1 text-[13px] text-right">29/07/2015</div>
        </div>
        <div className="space-y-2 p-2">
          <div className="text-xs">Best this product opencart</div>
          <div className="flex space-x-1 items-center">
            <i
              className="fa fa-star text-amber-500"
              style={{ fontSize: 13 }}
            ></i>
            <i
              className="fa fa-star text-amber-500"
              style={{ fontSize: 13 }}
            ></i>
            <i
              className="fa fa-star text-amber-500"
              style={{ fontSize: 13 }}
            ></i>
            <i
              className="fa fa-star text-amber-500"
              style={{ fontSize: 13 }}
            ></i>
            <i className="fa fa-star" style={{ fontSize: 13 }}></i>
          </div>
        </div>
      </div>

      <ReviewForm />
    </div>
  )
}

function Tags() {
  return <div className="text-[13px]">Monitor, Apple</div>
}

function CustomTab() {
  return (
    <div className="space-y-3">
      <div className="font-semibold">
        Take a trivial example which of us ever undertakes
      </div>

      <div className="text-[13px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </div>

      <div className="text-[13px]">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr.
      </div>

      <div className="space-y-1">
        <div className="text-[13px]">Nam liberempore</div>
        <div className="text-[13px]">Cumsoluta nobisest</div>
        <div className="text-[13px]">Eligendptio cumque</div>
        <div className="text-[13px]">Nam liberempore</div>
        <div className="text-[13px]">Cumsoluta nobisest</div>
        <div className="text-[13px]">Eligendptio cumque</div>
        <div className="text-[13px]">
          Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  )
}

function ProductTab({ product }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="border grid grid-cols-6 gap-0">
      <div className="border-r">
        {['description', 'reviews (1)', 'tags', 'custom tab'].map(
          (title, index) => (
            <motion.div
              key={index}
              className={
                'px-3 py-2 cursor-pointer uppercase font-semibold border-l-4 border-b ' +
                (index !== activeTab
                  ? 'border-l-transparent'
                  : 'border-l-primary text-primary')
              }
              onClick={() => setActiveTab(index)}
            >
              {title}
            </motion.div>
          )
        )}
      </div>
      <div className="col-span-5 p-3">
        {[Description, Reviews, Tags, CustomTab][activeTab]()}
      </div>
    </div>
  )
}
