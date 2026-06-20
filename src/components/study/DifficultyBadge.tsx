import { Badge } from "@/components/ui/badge";

export default function DifficultyBadge(
  { difficulty }: { difficulty: string }) {
  return (
    <Badge>
      {difficulty}
    </Badge>
  )
}