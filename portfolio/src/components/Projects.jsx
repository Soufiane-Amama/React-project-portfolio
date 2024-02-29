
import PROJECTS from "../data/projects"

const Projects = () => { 
  return (
    <div>
        <h2> مشاريعي</h2>
        <div>
            {
              PROJECTS.map(pro => (
                <div className="card" key={pro.id} >
                <img src={pro.image} alt={pro.title} className="imgPro" />
                <h3 className="title" >{pro.title}</h3>
                <p className="text">{pro.description}</p>
                <button onClick={()=> window.location.href = pro.link }>Enroll</button>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Projects