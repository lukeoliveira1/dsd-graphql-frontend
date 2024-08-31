import "./style.css";

interface AboutProps {
  name: string;
  description: string;
}

export function About({ name, description }: AboutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "justify",
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>{" "}
    </div>
  );
}
