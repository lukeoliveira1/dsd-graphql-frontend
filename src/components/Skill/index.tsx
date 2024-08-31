import "./style.css";

interface SkillProps {
  name: string;
  level?: number;
}

export function Skill({ name, level }: SkillProps) {
  return (
    <article className="articleSkill">
      <h3>
        {name} <br /> Nível: {level}
      </h3>
    </article>
  );
}
