import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DifficultyBadge from "./DifficultyBadge";

interface Topic {
  topic: string;
  explanation?: string;
  explaination?: string;
  summary: string;
  difficulty: string;
  examples?: string[];
}

interface Props {
  topic: Topic;
}

export default function TopicCard({
  topic,
}: Props) {
  const explanation =
    topic.explanation ||
    topic.explaination ||
    "No explanation available";

  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start gap-3">
          <CardTitle>
            {topic.topic}
          </CardTitle>

          <DifficultyBadge
            difficulty={
              topic.difficulty
            }
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">
              Explanation
            </h3>

            <p>
              {explanation}
            </p>
          </div>

          {topic.examples &&
            topic.examples
              .length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">
                  Examples
                </h3>

                <div className="space-y-3">
                  {topic.examples.map(
                    (
                      example,
                      index
                    ) => (
                      <div
                        key={index}
                        className="bg-slate-100 rounded-lg p-3 font-mono text-sm overflow-x-auto"
                      >
                        {example}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          <div>
            <h3 className="font-semibold mb-2">
              Summary
            </h3>

            <p>
              {topic.summary}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}