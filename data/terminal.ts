import type { Locale } from "@/lib/i18n";

export type TerminalLine = {
  command: string;
  output: string[];
};

export const terminalLines: Record<Locale, TerminalLine[]> = {
  en: [
    {
      command: "whoami",
      output: ["Malek Beji — Full-Stack & Mobile Developer"],
    },
    {
      command: "cat location.txt",
      output: ["Tunisia — remote, working with clients worldwide"],
    },
    {
      command: "cat skills.json",
      output: [
        '["Next.js", "React", "Flutter", "Node.js",',
        ' "Claude API", "OpenAI API", "LangChain"]',
      ],
    },
    {
      command: "ls ./projects",
      output: ["capricieuse  servihealth  tileo-dubai  ai-dragonfly  besimmo  ..."],
    },
    {
      command: "cat status.txt",
      output: ["Open to new opportunities ✓"],
    },
  ],
  fr: [
    {
      command: "whoami",
      output: ["Malek Beji — Développeur Full-Stack & Mobile"],
    },
    {
      command: "cat location.txt",
      output: ["Tunisie — remote, clients partout dans le monde"],
    },
    {
      command: "cat skills.json",
      output: [
        '["Next.js", "React", "Flutter", "Node.js",',
        ' "Claude API", "OpenAI API", "LangChain"]',
      ],
    },
    {
      command: "ls ./projects",
      output: ["capricieuse  servihealth  tileo-dubai  ai-dragonfly  besimmo  ..."],
    },
    {
      command: "cat status.txt",
      output: ["Ouvert aux nouvelles opportunités ✓"],
    },
  ],
};
