import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Breadcrumb() {
  const breadcrumb = useSelector((state) => state.breadcrumb)
  const navigate = useNavigate()

  return (
    <ul className="lgp8:max-w-[1650px] lgp8:w-[95%] mx-auto flex items-center list-none my-6 leading-normal bg-transparent p-0 space-x-3">
      <li className="relative py-0">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <i
            className="fa fa-home ml-2 text-gray-400 hover:text-primary"
            style={{ fontSize: 14 }}
          ></i>
        </div>
      </li>
      {breadcrumb.path.map((nav, index) => (
        <div key={index} className="flex items-center space-x-3">
          <li>
            <i
              className="fa fa-angle-right text-gray-400"
              style={{ fontSize: 13 }}
            ></i>
          </li>
          <li
            className={
              index + 1 == breadcrumb.path.length ? 'text-primary' : ''
            }
          >
            <div
              className="cursor-pointer hover:text-primary"
              style={{ fontSize: 14 }}
              onClick={() => navigate(nav.path)}
            >
              {nav.title}
            </div>
          </li>
        </div>
      ))}
    </ul>
  )
}
