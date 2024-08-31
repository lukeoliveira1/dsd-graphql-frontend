import "./style.css";

interface ProjectProps {
  name: string;
  link?: string;
}

export function Project({ name, link }: ProjectProps) {
  return (
    <article className="articleProject">
      <h3>
        {name}
        <br />
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Acessar
          </a>
        )}
      </h3>
    </article>
  );
}
