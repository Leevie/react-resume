import React from "react";

export default function MainLeft(){
    return(
        <article className="main-right">
            <section className="contact-sec">
                <h2 className="contact-title">CONTACT</h2>
                <p>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:leeviemartin@gmail.com" target="_blank" rel="noreferrer">leevie.martin@gmail.com</a>
                </p>
                <p>
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <a href="http://github.com/Leevie" target="_blank" rel="noreferrer">Leevie's GitHub Repository</a>
                </p>
                <p>
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="http://linkedin.com/in/leevie" target="_blank" rel="noreferrer">Leevie Martin on LinkedIn</a>
                </p>
            </section>
            <section className="skills-sec">
                <h2>SKILLS</h2>
                <b>Operating Systems</b>
                <ul>
                    <li>Microsoft Windows, Active Directory, Android, Mac OS, Apple Open Directory, iOS</li>
                </ul>
                <b>Software Applications</b>
                <ul>
                    <li>Configuration Manager, Microsoft Office 365, ServiceNow, Visual Studio Code, Git, Bash, VMWare</li>
                </ul>
                <b>Languages/Other Skills</b>
                <ul>
                    <li>JavaScript, React.js, NodeJS, Express, APIs, MySQL, MongoDB , HTML, CSS, PowerShell</li>
                </ul>
            </section>
            <section className="edu-sec">
            <h2>EDUCATION</h2>
            <div data-iframe-width="300" data-iframe-height="270" data-share-badge-id="616e1bae-5e39-4858-a151-0cbdfedd0a57" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>
            <p><a href="https://www.credly.com/badges/616e1bae-5e39-4858-a151-0cbdfedd0a57/public_url">Credly Badge</a></p>
            <b>Full Stack Web Development</b>
            <p>
                University of Minnesota, College of Continuing Education
            </p>
            <sup>Saint Paul, MN | 2019</sup>
            </section>
        <section id="edu-sec">
            <h2>PORTFOLIO</h2>
            <div className="card portfolio-card">
                <div className="card-body">
                  <h5 className="card-title">World-Music Web App</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Bootcamp Class Project</h6>
                  <p className="card-text">First group project created in Web Development Bootcamp.</p>
                  <a href="https://github.com/Leevie/World-Music/" className="btn btn-primary" target="_blank" rel="noreferrer">Open World-Music</a>
                </div>
              </div>
              <p/>
              <div className="card portfolio-card">
                <div className="card-body">
                  <h5 className="card-title">Realtime-Calculator</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Personal Project</h6>
                  <p className="card-text">Personal project showcasing some simple JavaScript.  Built with jQuery, Bootstrap and Firebase backend for the data. </p>
                  <a href="https://leevie.github.io/Realtime-Calculator/" className="btn btn-primary" target="_blank" rel="noreferrer">Open Realtime-Calculator</a>
                </div>
              </div>
        </section>
    </article>
    )
}
