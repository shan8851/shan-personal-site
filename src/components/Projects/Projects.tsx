import s from "./Projects.module.scss";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <div id="projects" className={s.wrapper}>
      <div className={s.container}>
        <h6 className={s.heading}>Latest Work</h6>
        <div className={s.projectList}>
          {projects.map((p) => (
            <div key={p.id} className={s.projectItem}>
              <img className={s.image} src={p.image} alt={p.title} />
              <div className={s.projectContent}>
                <h6 className={s.projTitle}>{p.title}</h6>
                <p className={s.projText}>{p.description}</p>
                <a
                  className={s.projLink}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
