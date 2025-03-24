import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export function RecentComments() {
  const comments = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      content: "This is a great post! I really enjoyed reading it and learned a lot.",
      post: "10 Tips for Better Productivity",
      time: "2 hours ago",
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      content: "I have a question about the third point. Could you elaborate more on that?",
      post: "Understanding Modern Web Development",
      time: "5 hours ago",
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
      content: "Thanks for sharing this information. It's exactly what I was looking for!",
      post: "Getting Started with React",
      time: "1 day ago",
    },
    {
      id: 4,
      author: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
      content: "I disagree with some points here. I think there are better approaches to this problem.",
      post: "Best Practices for Code Organization",
      time: "2 days ago",
    },
    {
      id: 5,
      author: "Lisa Wang",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LW",
      content: "Great article! I've shared it with my team.",
      post: "Team Collaboration Strategies",
      time: "3 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start space-x-4 rounded-lg border p-4">
          <Avatar>
            <AvatarImage src={comment.avatar} alt={comment.author} />
            <AvatarFallback>{comment.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{comment.author}</p>
              <span className="text-xs text-muted-foreground">{comment.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              On: <span className="font-medium text-foreground">{comment.post}</span>
            </p>
            <p className="text-sm">{comment.content}</p>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500">
              <CheckCircle className="h-4 w-4" />
              <span className="sr-only">Approve</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
              <XCircle className="h-4 w-4" />
              <span className="sr-only">Reject</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

