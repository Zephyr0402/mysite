import React from "react";

class Section_aboutme extends React.Component {
  render() {
    return (
      <section id="aboutme">
        <header className="major">
          <h2>
            <em>
              “Technology is capable of doing great things. But it doesn’t want
              to do great things. It doesn’t want anything. That part takes all
              of us.”
            </em>
            <br />
            <span
              style={{
                float: "right"
              }}
            >
              <em>- Tim Cook</em>
            </span>
          </h2>
        </header>
        <h2>About Me</h2>
        <p>
          I am a MENG student in the Department of Electrical and Computer
          Engineering at The University of British Columbia (UBC) in Vancouver,
          Canada. Before that, I studied at the Beijing University of
          Technology, majoring in Computer Science and Technology.
        </p>
        <p>
          My research interest is broadly in the system area. In my senior year
          as an undergrad, I worked on virtualization technology and cloud in
          the Libvirt QE group at Red Hat Inc, Beijing R&D branch.
        </p>
        <p>
          In my spare time, I love gaming. Recently I have been playing Zelda:
          Breath of the Wild on the Switch console and looking forward to the
          formal release of Subnautica: Below Zero.
        </p>
        <p>
          Not single, got a lovely{" "}
          <a href="https://junjieyang.org/">boyfriend</a> who is studying at
          McGill University. :)
        </p>
        <p>
          P.S. I am actively looking for an internship opportunity. If you are a
          recruiter, feel free to contact me via email.
        </p>
        {}
      </section>
    );
  }
}

export default Section_aboutme;
