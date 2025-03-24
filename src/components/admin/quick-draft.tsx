import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function QuickDraft() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input placeholder="Title" />
      </div>
      <div className="space-y-2">
        <Textarea placeholder="What's on your mind?" className="min-h-[120px]" />
      </div>
      <Button>Save Draft</Button>
    </div>
  )
}

