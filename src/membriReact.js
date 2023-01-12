"use strict";

class Membri extends React.Component {
  constructor(props) {
    super(props);
    this.membri = [
      {
        nume: "Nicola Colopelnic",
        poza: "poze/membri/nicoColo1.JPG",
        departament: "Marketing",
        instagram: "#",
      },
      {
        nume: "Diana Dolca",
        poza: "poze/membri/diaDolca.JPG",
        departament: "Programare",
        instagram: "#",
      },
      {
        nume: "Larisa Pașca",
        poza: "poze/membri/larisa.JPG",
        departament: "Marketing",
        instagram: "#",
      },
      {
        nume: "Patricia Furtos",
        poza: "poze/membri/patricia.JPG",
        departament: "Programare",
        instagram: "#",
      },

      {
        nume: "Luca Ilieș",
        poza: "poze/membri/lucaIlies.JPG",
        departament: "Programare",
        instagram: "#",
      },

      {
        nume: "Boller Eduard",
        poza: "poze/membri/eduard.JPG",
        departament: "Construcție",
        instagram: "#",
      },
      {
        nume: "Paul Plopișan",
        poza: "poze/membri/paulPlopisan.JPG",
        departament: "Construcție",
        instagram: "#",
      },
      {
        nume: "Ionuț Drăguș",
        poza: "poze/membri/ionut.png",
        departament: "Construcție",
        instagram: "#",
      },
      {
        nume: "Silviu Pontoș",
        poza: "poze/membri/silviuPontos.JPG",
        departament: "Lider Echipă",
        instagram: "https://www.instagram.com/_sipandrei_/",
        facebook: "https://www.facebook.com/silviu.pontos/",
        github: "https://github.com/sipandrei",
      },
      {
        nume: "Mihaela Trifoi",
        poza: "poze/membri/miha.JPG",
        departament: "Marketing",
        instagram: "#",
      },
      {
        nume: "Antonio Ivașcu",
        poza: "poze/membri/antonio.JPG",
        departament: "Construcție/Programare",
        instagram: "https://www.instagram.com/antonioivascu_/",
      },
      {
        nume: "Lihet Denisa",
        poza: "poze/membri/denisa.JPG",
        departament: "Marketing",
        instagram: "#",
      },
      {
        nume: "Ardelean Raluca",
        poza: "poze/membri/raluca.JPG",
        departament: "Marketing",
        instagram: "#",
      },
    ];
  }

  renderMembru(membru) {
    return <Membru membru={membru} />;
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "shhh.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="sliderMembri">
        {this.membri.map((membru) => this.renderMembru(membru))}
      </div>
    );
  }
}

function Membru(props) {
  const hasFacebook = props.membru.facebook;
  const hasInstagram = props.membru.instagram;
  const hasGithub = props.membru.github;
  return (
    <div class="slide membru" key={props.membru.nume}>
      <img
        src={props.membru.poza}
        alt={props.membru.nume}
        height="250vh"
        width="auto"
      />
      <h3>{props.membru.nume}</h3>
      <h4 class="desc-membru">{props.membru.departament}</h4>
      <div class="contact-membru">
        {hasFacebook ? (
          <a href={props.membru.facebook}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-6 0 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon__icon"
            >
              <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path>
            </svg>
          </a>
        ) : (
          <span></span>
        )}
        {hasInstagram ? (
          <a href={props.membru.instagram}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox=" 0 -2 25 25"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon__icon"
            >
              <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
              <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
              <circle cx="15.156" cy="4.858" r="1.237"></circle>
            </svg>
          </a>
        ) : (
          <span></span>
        )}
        {hasGithub ? (
          <a href={props.membru.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="-2 0 26 26"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

const domContainer = document.querySelector("#membriReact_container");
const root = ReactDOM.createRoot(domContainer);
root.render(<Membri />);
