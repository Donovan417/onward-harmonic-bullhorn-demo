import { MessageSquare } from "lucide-react";

const questions = [
  "Describe the most complex Vertex AI pipeline you built. What were the custom components and data flow?",
  "Walk through how you have deployed an ML model to production, including monitoring and drift handling.",
  "Tell me about a model you optimized with TensorRT for Triton Inference Server and the latency tradeoffs you made.",
  "Describe a language model you fine-tuned or operationalized beyond API consumption, including scaling and versioning.",
];

const InterviewQuestionsCard = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-6 md:p-8 mb-6">
      <div className="flex items-center gap-2 mb-5">
        <MessageSquare className="w-5 h-5 text-muted-foreground" />
        <h3 className="text-lg font-bold text-foreground">Suggested Interview Questions</h3>
      </div>
      <ol className="space-y-4">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
              {i + 1}
            </span>
            <p className="font-serif text-[15px] leading-relaxed text-foreground/85">{q}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InterviewQuestionsCard;
