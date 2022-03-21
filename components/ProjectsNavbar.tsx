import { FunctionComponent } from "react"
import { Category } from "../utils/types"

type handleFilter = {
  value: Category | 'all',
  handlerFilterCategory: Function,
  active: String,
}

export const NavItem:FunctionComponent<handleFilter> = ({value, handlerFilterCategory, active}) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>{value}</li>
  )
}

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function,
  active: string
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="vue" {...props} />
      <NavItem value="tailwind" {...props} />
      <NavItem value="mongo" {...props} />
    </div>
  )
}

export default ProjectsNavbar
