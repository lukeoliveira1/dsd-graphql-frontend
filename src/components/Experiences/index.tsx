import "./style.css";

interface ExperienceProps {
  title: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
}

export function Experience({
  title,
  startDate,
  endDate,
  technologies,
}: ExperienceProps) {
  return (
    <article className="experience">
      <h3>{title}</h3>
      <p>Data de início: {startDate}</p>
      <p>{endDate ? `Data de encerramento: ${startDate}` : `Até atualmente`}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul>
          {technologies?.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
