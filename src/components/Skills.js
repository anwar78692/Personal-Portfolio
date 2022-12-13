import { FaJs, FaReact, FaHtml5, FaCss3, FaPython, FaJava } from "react-icons/fa";

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "Java",
            "icon" : FaJava
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;