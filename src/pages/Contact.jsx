import Icon from '../components/icon/Icon'

function Contact() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-xs text-gray-2 font-body leading-6 box-border">
      {/* Breadcrumb */}
      <ul className="flex mt-6 mb-11 leading-normal text-gray-3 space-x-3 ">
        <li>
          <a href="#">
            <i className="fa fa-home ml-2  hover:text-blue-3"></i>
          </a>
        </li>
        <li>
          <Icon className="mt-2" id="chevronRight" size="8"></Icon>
        </li>
        <li className=" hover:text-primary">
          <a href="#">Page</a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="9"></Icon>
        </li>
        <li className="text-primary text-sm">
          <a href="/contact_us">Contact Us</a>
        </li>
      </ul>
      <div className="">
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8442639328655!2d-71.10008329902021!3d42.34584359264178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63dc43ccb%3A0xa15d5aa87d0f0c12!2s4+Yawkey+Way%2C+Boston%2C+MA+02215!5e0!3m2!1sen!2s!4v1475081210943"
          width="100%"
          height="350"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
export default Contact
