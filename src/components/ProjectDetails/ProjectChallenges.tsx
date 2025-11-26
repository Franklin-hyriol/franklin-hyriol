interface ProjectChallengesProps {
    challenges: string[];
}

function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  return (
    <div className="w-full lg:w-[80%] mx-auto">
       <h2 className="text-center text-4xl font-semibold mb-10">Challenges & Points forts</h2>
      <ul className="list-disc list-inside space-y-1">
        {challenges.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectChallenges;
