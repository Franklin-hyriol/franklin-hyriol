import type { ReactNode } from "react";

interface ProjetctechProps {
  text: ReactNode;
}

function Projetctech({ text }: ProjetctechProps) {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-center text-4xl font-semibold mb-10">Technologies</h2>

      <div className="text-center w-[80%]">{text}</div>
    </div>
  );
}

export default Projetctech;
