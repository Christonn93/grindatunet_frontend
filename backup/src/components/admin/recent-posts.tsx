import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function RecentPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      status: "Published",
      date: "Mar 15, 2024",
      views: 1245,
    },
    {
      id: 2,
      title: "10 Tips for Better Productivity",
      status: "Published",
      date: "Mar 10, 2024",
      views: 982,
    },
    {
      id: 3,
      title: "Understanding Modern Web Development",
      status: "Draft",
      date: "Mar 5, 2024",
      views: 0,
    },
    {
      id: 4,
      title: "Best Practices for Code Organization",
      status: "Published",
      date: "Feb 28, 2024",
      views: 756,
    },
    {
      id: 5,
      title: "Team Collaboration Strategies",
      status: "Draft",
      date: "Feb 20, 2024",
      views: 0,
    },
  ]

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="flex items-center justify-between rounded-lg border p-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{post.title}</h4>
              <Badge variant={post.status === "Published" ? "default" : "outline"}>{post.status}</Badge>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{post.date}</span>
              {post.views > 0 && (
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" /> {post.views}
                </span>
              )}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <Trash className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}

