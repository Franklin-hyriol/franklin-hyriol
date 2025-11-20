interface ProjectChallengesProps {
    features: string[];
}

function ProjectFeatures({ features }: ProjectChallengesProps) {
  return (
    <div className="w-[80%] mx-auto">
       <h2 className="text-center text-4xl font-semibold mb-10">Fonctionnalités principales</h2>
      <ul className="list-disc list-inside space-y-1">
        {features.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectFeatures;
