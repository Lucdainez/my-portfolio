import projects from '../../../data/ListProjects';

export default function Projects() {
  return (
    <section className='flex'>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex justify-between my-5 mx-auto w-32 h-32 rounded-lg bg-sky-400/25 shadow"
        >
          <h2 className='m-auto'>{project.projectName}</h2>
        </div>
      ))}
    </section>
  );
}
