export const questionBank = Array.from({ length: 25 }, (_, i) => {
  const questions = [
    {
      question: "What is the main goal of counter-insurgency operations?",
      options: {
        A: "To eliminate all military threats",
        B: "To provide medical assistance",
        C: "To win the support of the population",
        D: "To withdraw from conflict zones",
      },
      correctAnswer: "C",
    },
    {
      question:
        "Which of the following best defines 'cover' in intelligence operations?",
      options: {
        A: "A strategy to intercept enemy calls",
        B: "A false identity to conceal the agent's true role",
        C: "An air support mission",
        D: "A top-secret document",
      },
      correctAnswer: "B",
    },
    {
      question: "What is the main purpose of cybersecurity?",
      options: {
        A: "To train new agents",
        B: "To protect digital systems and data",
        C: "To replace physical security",
        D: "To spy on civilians",
      },
      correctAnswer: "B",
    },
    {
      question: "Which of these is a major cause of operational failure?",
      options: {
        A: "High intelligence budget",
        B: "Use of encryption",
        C: "Poor planning and coordination",
        D: "Strict security protocol",
      },
      correctAnswer: "C",
    },
    {
      question: "What is HUMINT in intelligence gathering?",
      options: {
        A: "Electronic surveillance",
        B: "Satellite imaging",
        C: "Human Intelligence",
        D: "Underwater detection",
      },
      correctAnswer: "C",
    },
    {
      question: "Which phase involves analyzing raw intelligence data?",
      options: {
        A: "Planning",
        B: "Collection",
        C: "Processing",
        D: "Dissemination",
      },
      correctAnswer: "C",
    },
    {
      question:
        "Which of the following is a non-kinetic threat in cyber warfare?",
      options: {
        A: "Tank attack",
        B: "Artillery strike",
        C: "Malware deployment",
        D: "Infantry invasion",
      },
      correctAnswer: "C",
    },
    {
      question: "Which agency in Nigeria handles cybercrime?",
      options: {
        A: "NDLEA",
        B: "NCDC",
        C: "EFCC",
        D: "FRSC",
      },
      correctAnswer: "C",
    },
    {
      question: "What is the most effective way to detect insider threats?",
      options: {
        A: "Use of CCTV",
        B: "Open-door policies",
        C: "Employee background checks and monitoring",
        D: "Distributing more passwords",
      },
      correctAnswer: "C",
    },
    {
      question: "Which method is used for covert communication?",
      options: {
        A: "Encrypted messaging",
        B: "Public radio broadcast",
        C: "Newspaper ad",
        D: "Video call",
      },
      correctAnswer: "A",
    },
    {
      question: "What does SIGINT stand for?",
      options: {
        A: "Signal Interference Group",
        B: "Signals Intelligence",
        C: "Security Intervention Guard",
        D: "Silent Intel Network Team",
      },
      correctAnswer: "B",
    },
    {
      question: "Which of the following describes 'dead drop'?",
      options: {
        A: "An agent falling from a mission",
        B: "A tactic used in arresting suspects",
        C: "A secret location to exchange items without contact",
        D: "An encrypted radio message",
      },
      correctAnswer: "C",
    },
    {
      question: "Operational security is mainly concerned with:",
      options: {
        A: "Public announcements",
        B: "Media relations",
        C: "Protecting sensitive information from leaks",
        D: "Personnel training",
      },
      correctAnswer: "C",
    },
    {
      question: "Which is a key principle of intelligence analysis?",
      options: {
        A: "Speed over accuracy",
        B: "Use only open-source data",
        C: "Objectivity and balance",
        D: "Ignore political consequences",
      },
      correctAnswer: "C",
    },
    {
      question: "Which of these is NOT a type of counterintelligence?",
      options: {
        A: "Offensive CI",
        B: "Defensive CI",
        C: "Passive CI",
        D: "Spontaneous CI",
      },
      correctAnswer: "D",
    },
    {
      question: "Who is primarily responsible for strategic intelligence?",
      options: {
        A: "Tactical unit commanders",
        B: "Local police",
        C: "National-level intelligence agencies",
        D: "Private security firms",
      },
      correctAnswer: "C",
    },
    {
      question: "Which of the following could be a cyber threat indicator?",
      options: {
        A: "Staff absenteeism",
        B: "Slow internet speed",
        C: "Unusual logins at odd hours",
        D: "New password policies",
      },
      correctAnswer: "C",
    },
    {
      question: "The primary role of DSS in Nigeria is:",
      options: {
        A: "Tax collection",
        B: "Road safety",
        C: "Internal security and intelligence",
        D: "Foreign diplomacy",
      },
      correctAnswer: "C",
    },
    {
      question: "Which of these best describes 'cover for action'?",
      options: {
        A: "An agent’s excuse for poor performance",
        B: "A legal document for arrest",
        C: "Justification for visible behavior during operations",
        D: "Authorization letter from headquarters",
      },
      correctAnswer: "C",
    },
    {
      question: "What is 'backstopping' in covert operations?",
      options: {
        A: "Retreat plan in combat",
        B: "Support system to validate an agent’s cover",
        C: "Early warning signal",
        D: "Withdrawal from a failed mission",
      },
      correctAnswer: "B",
    },
    {
      question:
        "Which Security Agency is saddled with the responsibilities of Internal Security in Nigeria?",
      options: {
        A: "EFCC",
        B: "Police",
        C: "DSS",
        D: "DIS",
      },
      correctAnswer: "C",
    },
    {
      question: "What is the capital of France?",
      options: {
        A: "London",
        B: "Berlin",
        C: "Paris",
        D: "Madrid",
      },
      correctAnswer: "C",
    },
    {
      question: "Which method is commonly used in cyber espionage?",
      options: {
        A: "Phone tapping",
        B: "Social engineering and phishing",
        C: "GPS jamming",
        D: "Armed patrol",
      },
      correctAnswer: "B",
    },
    {
      question: "The intelligence cycle starts with:",
      options: {
        A: "Dissemination",
        B: "Planning and direction",
        C: "Analysis",
        D: "Collection",
      },
      correctAnswer: "B",
    },
    
    {
      question: "Which of these is a tactical intelligence product?",
      options: {
        A: "Annual security report",
        B: "Daily situational briefing",
        C: "Five-year strategic forecast",
        D: "Historical data review",
      },
      correctAnswer: "B",
    },
  ];

  const q = questions[i];
  return {
    id: i + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
  };
});
