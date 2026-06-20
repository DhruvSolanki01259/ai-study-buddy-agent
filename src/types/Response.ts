export interface ExampleTopic {
  topic: string;
  explaination: string;
  examples: string[];
  summary: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface StudyResponse {
  title: string;
  explaination: string;
  examples: ExampleTopic[];
  summary: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}
