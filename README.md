# Harmonic × Bullhorn — recruiter assessment interface

A responsive React demonstration of how a technical-evidence brief could appear inside a recruiter’s applicant-tracking workflow. It places a candidate summary, skill evidence, risk flags and suggested interview questions alongside familiar ATS navigation and actions.

The repository belongs to [Donovan Smith](https://github.com/Donovan417). The interface uses a Bullhorn-style setting to demonstrate the Harmonic assessment concept; it does not connect to a live Bullhorn account or submit candidates.

## What the demo shows

- A candidate assessment header with verdict, confidence, requirements coverage and repository-count metadata.
- An executive summary and skill cards with supporting GitHub links.
- Risk flags and interview-question cards to support a human review.
- Recruiter workflow actions arranged in the surrounding ATS interface.
- A responsive sidebar that switches to an overlay on smaller screens.

## Scope of the demonstration

The assessment content is defined in the source files. The displayed candidate, scores, counts and conclusions are demonstration content; this frontend does not calculate a fresh assessment when it loads.

Buttons for submission, moving stages, adding notes, sharing, exporting and attaching an assessment are interface demonstrations, not connected ATS operations. The live GitHub links can be opened separately. Use the demo to evaluate information hierarchy, responsive layout and evidence presentation.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui / Radix UI · React Router · Lucide icons

The project originated from a Lovable scaffold. Its build and local preview run directly from this repository; a Lovable subscription is not required.

## Run locally

You need Node.js and npm. No API key or external database is required for the current static assessment screen.

```sh
git clone https://github.com/Donovan417/onward-harmonic-bullhorn-demo.git
cd onward-harmonic-bullhorn-demo
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080), the development port configured in [vite.config.ts](vite.config.ts).

```sh
npm run build
npm run preview
```

Use the preview address printed by Vite to inspect the production bundle.

## Code map

| Area | Source |
| --- | --- |
| Page composition and skill evidence | [src/pages/Index.tsx](src/pages/Index.tsx) |
| Candidate assessment header | [src/components/ats/HarmonicAssessmentPanel.tsx](src/components/ats/HarmonicAssessmentPanel.tsx) |
| ATS navigation | [src/components/ats/LeftSidebar.tsx](src/components/ats/LeftSidebar.tsx), [TopNav.tsx](src/components/ats/TopNav.tsx) |
| Workflow action layout | [src/components/ats/WorkflowActions.tsx](src/components/ats/WorkflowActions.tsx) |
| Summary, skill, risk and interview cards | [src/components/harmonic](src/components/harmonic) |
| Theme and responsive styles | [src/index.css](src/index.css), [tailwind.config.ts](tailwind.config.ts) |

## Development checks

`package.json` includes `npm run lint` and `npm test`, with Vitest and browser-test tooling configured in the repository. Review the tests and browser configuration for the checks currently implemented.

## Portfolio context

This project is useful for reviewing a developer/designer’s approach to dense information, reusable React components, mobile navigation and the relationship between conclusions and evidence. Live ATS integration, fresh assessment generation and production behavior would require additional implementation.
