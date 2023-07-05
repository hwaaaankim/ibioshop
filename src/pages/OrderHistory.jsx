import AccountSiteMap from '../components/my_account/AccountSiteMap'
import image from '../assets/images/1.jpg'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

function OrderHistory() {
  const orderHistories = [
    {
      image: image,
      productName: 'Aspire Ultrabook Laptop',
      orderId: '#214521',
      dateAdded: '21/06/2016',
      quantity: 1,
      status: 'Shipped',
      total: '$228.00',
    },
    {
      image: image,
      productName: 'Xitefun Causal Wear Fancy Shoes',
      orderId: '#1565245',
      dateAdded: '20/06/2016',
      quantity: 1,
      status: 'Shipped',
      total: '$133.20',
    },
  ]
  //Start Breadcrumb
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [{ title: 'Order History', path: '/order_history' }],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])
  // End Breadcrumb
  return (
    <div className="lgp8:max-w-[1650px] w-[95%] mx-auto text-xs text-gray-2 leading-6">
      <div className="flex">
        <div className="w-full sm:w-3/4 pr-7">
          <h2 className="text-xl font-medium mt-8 mb-3">Order History</h2>
          <div className="overflow-x-auto min-h-[.01%]">
            <table className="w-full max-w-full">
              <thead>
                <tr className="bg-gray-4 font-bold">
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 px-1">
                    Image
                  </td>
                  <td className="text-left whitespace-nowrap border  border-solid border-collapse border-spacing-0 p-1">
                    Product Name
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1">
                    Order Id
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1 ">
                    Qty
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1">
                    Status
                  </td>
                  <td className="text-center  border border-solid border-collapse border-spacing-0 p-1">
                    Date Added
                  </td>
                  <td className="text-right whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1 ">
                    Total
                  </td>
                  <td className="text-right whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1"></td>
                </tr>
              </thead>
              <tbody>
                {orderHistories.map((order, index) => (
                  <tr key={index}>
                    <td className="text-center border border-solid border-collapse  p-2">
                      <a href="/product">
                        <img
                          src={order.image}
                          alt="img-thumbnail"
                          title={order.productName}
                          className="w-20 transition-all rounded text-center p-1 border  border-solid border-spacing-0 border-separate h-auto mx-auto"
                        />
                      </a>
                    </td>
                    <td className="text-left align-top border border-solid border-collapse p-2">
                      <a href="/product"> {order.productName}</a>
                    </td>
                    <td className="text-center align-top border border-solid border-collapse p-2">
                      {order.orderId}
                    </td>
                    <td className=" text-center align-top border border-solid border-collapse p-2">
                      {order.quantity}
                    </td>
                    <td className=" text-center align-top border border-solid border-collapse  p-2">
                      {order.status}
                    </td>
                    <td className="text-center align-top border border-solid border-collapse p-2">
                      {order.dateAdded}
                    </td>
                    <td className="text-right align-top border border-solid border-collapse p-2">
                      {order.total}
                    </td>
                    <td class="text-center align-top pt-3 border border-solid border-collapse ">
                      <a
                        className="bg-[#5bc0de] px-2.5 py-2.5 text-white border-[#5bc0de] "
                        title="view"
                        href="/order_info"
                      >
                        <i class="fa fa-eye"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          {/* Site Map */}
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
export default OrderHistory
