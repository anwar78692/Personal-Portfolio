import IMG from '../assests/Login.png';

const About = () => {
    return(
        <div id = "about" className = "about">
        <h1 className = "about-heading">About Me</h1>
        <div className = "about-info">
        <p className = "about-desc">Hello everyone,
My name is Anwar Ahmad.
I'm from Fatehpur (Uttar Pradesh) city.
I did my academic from RV Inter college .
And I got in class 12th in 83% in the 2015 year.
I did my BTECH from Government Engineering College Ajmer.
And I Choose CSE branch in BTECH, because it is a highly valuable degree
I got 8.79 CGPA in BTECH. Passout in 2022.
My hobbies are playing cricket, Kabbadi, listening to music, reading books and also travelling.
My strengths, I'm a creative person with a positive mindset.
My goal is to get a job in a reputed company where I can improve my skills and experience.
My short-term goal is to get a job in a reputed company and my long-term goal is to get a higher position in an organization and want to build my career.</p>
        <div className = "about-img">
        <div className = "about-img-wrapper">
        <img src = {IMG} alt = "detective "/>

        </div>
    </div>
        </div>
        </div>
    );
}

export default About;