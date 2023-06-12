import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

export default function BlogDetail() {
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({ path: ['Blog', 'Duis autem vel eum irure sed diam nonumy'] })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  const article = {
    id: 1,
    picture: 'image/catalog/blog/4.jpg',
    title: 'Duis autem vel eum irure sed diam nonumy',
    author: 'Wash upito',
    publishedAt: {
      day: '04',
      month: 'Dec',
    },
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore...',
    comments: [],
  }
  return <div className="px-[2.5%]">here we go with the blog details page</div>
}
