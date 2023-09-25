import { useDispatch, useSelector } from 'react-redux'
import e3 from '../assets/images/e3.jpg'
import { setPath, toggleVisibility } from '../store/slices/breadcrumbSlice'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'

function ProductComparison() {
  const initial = useSelector((state) => state.compare)
  //productsToCompare
  const [products, setProducts] = useState(initial.map((item) => ({ ...item })))
  const availabilities = [
    'In Stock',
    'Out of Stock',
    'Coming Soon',
    'Unavailable',
  ]
  console.log({ products })

  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({ path: [{ title: 'Product Comparison', path: '/compare' }] })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  return (
    <div className="pb-10 lgp8:max-w-[1650px] w-[95%] mx-auto overflow-x-auto">
      <h1 className="text-lg ">Product Comparison</h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead className="py-2 comparison-thead">
            <tr className="border">
              <td className="pl-3 text-xs font-normal py-3">
                <strong className="py-1 font-bold">Product Details</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Product</td>

              {products.map((item, index) => (
                <td
                  key={index}
                  className="border pl-3 text-xs font-normal py-3"
                >
                  <a href="product.html">{item.name}</a>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Image</td>

              {products.map((item, index) => (
                <td key={index} className="text-center border py-3">
                  <img
                    className="mx-auto rounded p-1 border border-gray-100 bg-white"
                    title="Aspire Ultrabook Laptop"
                    alt="Aspire Ultrabook Laptop"
                    width="100px"
                    src={
                      item.media && item.media.length > 0
                        ? BASE_URL + '/images/' + item.media[0].title
                        : e3
                    }
                  ></img>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Price</td>

              {products.map((item, index) => (
                <td
                  key={index}
                  className="border pl-3 text-xs font-normal py-3"
                >
                  <div>
                    <span className="text-base -mt-1 pr-1.5 text-blue-800 font-semibold">
                      ${item.basePrice}
                    </span>{' '}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Model</td>
              <td className="border pl-3 text-xs font-normal py-3">Pt 001</td>
              <td className="border pl-3 text-xs font-normal py-3">Pt 002</td>
              <td className="border pl-3 text-xs font-normal py-3">Pt 003</td>
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Brand</td>
              <td className="border pl-3 text-xs font-normal py-3">Apple</td>
              <td className="border pl-3 text-xs font-normal py-3">Apple</td>
              <td className="border pl-3 text-xs font-normal py-3">Apple</td>
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">
                Availability
              </td>
              {products.map((item, index) => (
                <td
                  key={index}
                  className="border pl-3 text-xs font-normal py-3"
                >
                  {availabilities[item?.status || 0]}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Rating</td>
              <td className="border pl-3 text-xs font-normal py-3">
                <div className="text-yellow-500">
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                </div>
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                <div className="text-yellow-500">
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star fa-stack-1x"></i>
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                </div>
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                <div className="">
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Summary</td>
              {products.map((item, index) => (
                <td
                  key={index}
                  className="border pl-3 text-xs font-normal py-3"
                >
                  {item.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">Weight</td>
              <td className="border pl-3 text-xs font-normal py-3">1.50kg</td>
              <td className="border pl-3 text-xs font-normal py-3">1.80kg</td>
              <td className="border pl-3 text-xs font-normal py-3">2.00kg</td>
            </tr>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">
                Dimensions (L x W x H)
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                0.00mm x 0.00mm x 0.00mm
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                0.00mm x 0.00mm x 0.00mm
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                0.00cm x 0.00cm x 0.00cm
              </td>
            </tr>
          </tbody>
          <thead className="comparison-thead w-screen">
            <tr className="table-row ">
              <td className="border pl-3 text-xs font-normal py-3">
                <strong>Processor</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">
                Clockspeed
              </td>
              <td className="border pl-3 text-xs font-normal py-3">100mhz</td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
            </tr>
          </tbody>
          <thead className="comparison-thead">
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">
                <strong>Memory</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border pl-3 text-xs font-normal py-3">test 1</td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
              <td className="border pl-3 text-xs font-normal py-3">
                Hammered metal outer - Semi-precious stone embellishments
              </td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
            </tr>

            <tr>
              <td className="border pl-3 text-xs font-normal py-3">test 2</td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
              <td className="border pl-3 text-xs font-normal py-3">
                H: 11cm/4" W: 12cm/5" D: 5cm/2"
              </td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
            </tr>

            <tr>
              <td className="border pl-3 text-xs font-normal py-3">test 3</td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
              <td className="border pl-3 text-xs font-normal py-3">
                Green - Black - Brown
              </td>
              <td className="border pl-3 text-xs font-normal py-3"></td>
            </tr>

            <tr>
              <td className="border pl-3 text-xs font-normal py-3"></td>
              <td className="border pl-3 text-xs font-normal py-3">
                <input
                  type="button"
                  onclick=""
                  className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3"
                  value="Add to Cart"
                ></input>
                <a
                  className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3"
                  href="#"
                >
                  Remove
                </a>
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                <input
                  type="button"
                  onclick=""
                  className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3"
                  value="Add to Cart"
                ></input>
                <a
                  className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3"
                  href="#"
                >
                  Remove
                </a>
              </td>
              <td className="border pl-3 text-xs font-normal py-3">
                <input
                  type="button"
                  onclick=""
                  className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3"
                  value="Add to Cart"
                ></input>
                <a
                  className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3"
                  href="#"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductComparison
