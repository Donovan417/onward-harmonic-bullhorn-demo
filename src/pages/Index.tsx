import { useState } from "react";
import Header from "@/components/harmonic/Header";
import CandidateTable from "@/components/harmonic/CandidateTable";
import CandidateHero from "@/components/harmonic/CandidateHero";
import SkillCard from "@/components/harmonic/SkillCard";
import RiskFlagsCard from "@/components/harmonic/RiskFlagsCard";
import ExecutiveSummaryCard from "@/components/harmonic/ExecutiveSummaryCard";
import InterviewQuestionsCard from "@/components/harmonic/InterviewQuestionsCard";
import Footer from "@/components/harmonic/Footer";

const skillCards = [
  {
    title: "Python Engineering",
    level: "moderate" as const,
    levelLabel: "Moderate",
    summary:
      "Moderate Python fundamentals across 33 repositories. Good documentation conventions appear in pockets of the portfolio, but production systems design, testing rigor, and scalable architecture evidence remain limited.",
    evidenceNote: "Evidence: 33 repos reviewed",
    links: [
      {
        label: "Google-style docstrings in handler.py",
        url: "https://github.com/jigyasa-grover/Div-In-E/blob/6763526d741d55dba098b42e066ac12acfd5fb2b/divine/handler.py#L6-L10",
      },
      {
        label: "argparse usage in neural_style.py",
        url: "https://github.com/jigyasa-grover/Imitating-Artistic-Style-on-Automatically-Curated-and-Shaded-Sketches/blob/e709d12ccaf11fac5b98341dc96b10602ddb7780/neural_style.py#L4-L8",
      },
    ],
  },
  {
    title: "Docker & Containers",
    level: "moderate" as const,
    levelLabel: "Moderate",
    summary:
      "Shows Docker concepts like multi-stage builds, slim runtime images, and non-root execution. The strongest signals, however, come from template files in a forked repo, limiting confidence that the candidate authored the most compelling containerization patterns.",
    evidenceNote: "Evidence: Forked/template-heavy evidence",
    links: [
      {
        label: "Multi-stage Docker build",
        url: "https://github.com/jigyasa-grover/Div-In-E/blob/6763526d741d55dba098b42e066ac12acfd5fb2b/template/java8/Dockerfile#L1-L5",
      },
      {
        label: "Non-root USER hardening",
        url: "https://github.com/jigyasa-grover/Div-In-E/blob/6763526d741d55dba098b42e066ac12acfd5fb2b/template/java8/Dockerfile#L38-L42",
      },
    ],
  },
  {
    title: "NLP & LLMs",
    level: "weak" as const,
    levelLabel: "Weak",
    summary:
      "The portfolio demonstrates LLM API usage and agent-style tool calling, but almost entirely through notebooks and demo projects. There is no convincing evidence of production NLP systems, custom training, fine-tuning, or scaled deployment.",
    evidenceNote: "Evidence: Notebook/demo-heavy evidence",
    links: [
      {
        label: "Gemini Pro Vision notebook usage",
        url: "https://github.com/jigyasa-grover/Hyper-Personalized-Ad-Campaigns-using-Generative-AI-Quick-Demo-using-Gemini-Pro-Vision/blob/8c15f611ae352c5707c9114d0fbd856d73db45a4/Hyper_Personalized_Ad_Campaigns_using_Generative_AI_Gemini_Pro_Vision.ipynb#L36-L40",
      },
      {
        label: "Function-calling pattern in critics_cut notebook",
        url: "https://github.com/jigyasa-grover/critics-cut/blob/9d9a1e4049a95b6ee803d8861b7f923e3b0ffc30/critics_cut.ipynb#L181-L185",
      },
    ],
  },
];

const Index = () => {
  const [activeSort, setActiveSort] = useState("Verdict");
  const [briefExpanded, setBriefExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-brief mx-auto px-4 sm:px-6 py-10">
        <Header activeSort={activeSort} onSortChange={setActiveSort} />
        <CandidateTable
          briefExpanded={briefExpanded}
          onToggleBrief={() => setBriefExpanded(!briefExpanded)}
        />

        {briefExpanded && (
          <>
            <CandidateHero />
            {skillCards.map((card) => (
              <SkillCard key={card.title} {...card} />
            ))}
            <RiskFlagsCard />
            <ExecutiveSummaryCard />
            <InterviewQuestionsCard />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Index;
