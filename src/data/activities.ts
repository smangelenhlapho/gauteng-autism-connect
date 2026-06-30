export interface Activity {
  title: string;
  description: string;
  durationMin: number;
  materials: string[];
}

export const activitiesByAge: Record<string, Activity[]> = {
  "Ages 2–5": [
    {
      title: "Colour Matching Trays",
      description:
        "Sort coloured pom-poms into matching cups to build visual discrimination and fine-motor control.",
      durationMin: 15,
      materials: ["Pom-poms", "Coloured cups", "Tongs"],
    },
    {
      title: "Shape Sorting Play",
      description:
        "Use a posting box of basic shapes — start with three shapes, then add more.",
      durationMin: 10,
      materials: ["Shape sorter", "Soft mat"],
    },
    {
      title: "Sensory Rice Bin",
      description:
        "A shallow tray of dyed rice with hidden small objects. Calming and tactile.",
      durationMin: 20,
      materials: ["Rice", "Food colour", "Tray", "Small toys"],
    },
    {
      title: "Alphabet Picture Cards",
      description:
        "Match capital letters to picture cards to build early literacy.",
      durationMin: 10,
      materials: ["Letter cards", "Picture cards"],
    },
    {
      title: "Threading Pasta",
      description:
        "Thread large pasta tubes onto string. Builds bilateral coordination.",
      durationMin: 15,
      materials: ["Pasta tubes", "String"],
    },
  ],
  "Ages 6–10": [
    {
      title: "Sight-Word Bingo",
      description:
        "A calm version of bingo using the first 100 sight words. Take turns reading.",
      durationMin: 20,
      materials: ["Word cards", "Bingo boards", "Counters"],
    },
    {
      title: "Number-Line Hop",
      description:
        "Tape a number line on the floor and practice addition by hopping.",
      durationMin: 15,
      materials: ["Masking tape"],
    },
    {
      title: "Memory Pairs Game",
      description:
        "A classic pairs game with topic cards (animals, household objects).",
      durationMin: 15,
      materials: ["Picture cards"],
    },
    {
      title: "Conversation Cube",
      description:
        "A printable cube with prompts. Roll and answer to practice turn-taking.",
      durationMin: 10,
      materials: ["Printed cube template"],
    },
    {
      title: "Sequencing Stories",
      description:
        "Use 4 picture cards to retell a short event in order.",
      durationMin: 15,
      materials: ["Picture cards"],
    },
  ],
  "Ages 11–18": [
    {
      title: "Cook a Simple Meal",
      description:
        "Follow a 5-step visual recipe. Build sequencing and life skills.",
      durationMin: 45,
      materials: ["Visual recipe card", "Ingredients"],
    },
    {
      title: "Budgeting with Receipts",
      description:
        "Use real grocery receipts to practice addition and budget planning.",
      durationMin: 30,
      materials: ["Receipts", "Calculator"],
    },
    {
      title: "Social Stories Journal",
      description:
        "Write a short social story about a real situation from the week.",
      durationMin: 20,
      materials: ["Notebook"],
    },
    {
      title: "Computer Skills: Email",
      description:
        "Practice sending a clear, polite email with a subject line and signature.",
      durationMin: 30,
      materials: ["Computer / tablet"],
    },
    {
      title: "Container Gardening",
      description:
        "Plant herbs in a recycled container and create a watering schedule.",
      durationMin: 40,
      materials: ["Pot", "Soil", "Seeds"],
    },
  ],
};
