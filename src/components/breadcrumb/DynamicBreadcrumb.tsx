import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

export const DynamicBreadcrumb = () => {
 const location = useLocation();
 const pathSegments = location.pathname.split("/").filter(Boolean);

 const breadcrumbs = pathSegments.map((segment, index) => {
  const href = "/" + pathSegments.slice(0, index + 1).join("/");
  const isLast = index === pathSegments.length - 1;
  const label = decodeURIComponent(segment);

  return (
   <BreadcrumbItem key={href} className="">
    {index > 0 && <BreadcrumbSeparator />}
    {isLast ? (
     <span className="capitalize text-gray-900 dark:text-gray-200 font-medium">{label}</span>
    ) : (
     <BreadcrumbLink asChild>
      <Link to={href} className="capitalize text-blue-600 hover:underline">
       {label}
      </Link>
     </BreadcrumbLink>
    )}
   </BreadcrumbItem>
  );
 });

 return (
  <Breadcrumb className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
   <BreadcrumbItem>
    <BreadcrumbLink asChild>
     <Link to="/" className="text-blue-600 hover:underline">
      Home
     </Link>
    </BreadcrumbLink>
   </BreadcrumbItem>
   {breadcrumbs.length > 0 && <BreadcrumbSeparator />}
   {breadcrumbs}
  </Breadcrumb>
 );
};
