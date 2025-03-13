import { Link } from "react-router-dom";

type ListLinkItemProps = {
 title: string;
 link: string;
};

export const ListLinkItem = ({ title, link }: ListLinkItemProps) => {
 return (
  <li>
   <Link to={link} className="hover:text-gray-900">
    {title}
   </Link>
  </li>
 );
};
