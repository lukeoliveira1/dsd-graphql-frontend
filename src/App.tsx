import { useQuery } from "@apollo/client";
import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { GET_PROJECTS, GET_EXPERIENCES, GET_SKILLS } from "./queries/queries";
import { Experience } from "./components/Experiences";
import { Skill } from "./components/Skill";

function App() {
  const {
    loading: loadingProjects,
    error: errorProjects,
    data: dataProjects,
  } = useQuery(GET_PROJECTS);

  const {
    loading: loadingExperiences,
    error: errorExperiences,
    data: dataExperiences,
  } = useQuery(GET_EXPERIENCES);

  const {
    loading: loadingSkills,
    error: errorSkills,
    data: dataSkills,
  } = useQuery(GET_SKILLS);

  if (loadingProjects || loadingExperiences || loadingSkills)
    return <p>Loading...</p>;
  if (errorProjects || errorExperiences || errorSkills)
    return (
      <p>
        Error:{" "}
        {errorProjects?.message ||
          errorExperiences?.message ||
          errorSkills?.message}
      </p>
    );

  return (
    <main>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Sobre mim</h2>
        <About
          name="lukeoliveira1"
          description="Desenvolvedor de software com 2 anos de experiência, especializado em construção de aplicações web e mobile de alta complexidade. Apaixonado por novas tecnologias, tenho um forte background em linguagens modernas como JavaScript, Python e frameworks como React, Django e Node.js. Focado em entregar soluções robustas, escaláveis e de fácil manutenção, com ênfase na qualidade de código e boas práticas de desenvolvimento."
        />
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Habilidades</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          {dataSkills.allSkills.map((skill: any) => (
            <Skill key={skill.id} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Projetos</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          {dataProjects.allProjects.map((project: any) => (
            <Project key={project.id} name={project.name} link={project.link} />
          ))}
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
        }}
      >
        <h2>Experiências</h2>
        <div>
          {dataExperiences.allExperiences.map((experience: any) => (
            <Experience
              key={experience.id}
              title={experience.title}
              startDate={experience.startDate}
              endDate={experience.endDate}
              technologies={experience.technologies || []}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
