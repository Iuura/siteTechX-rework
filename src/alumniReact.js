"use strict";

class Alumni extends React.Component {
  constructor(props) {
    super(props);
    this.alumni = [
      {
        nume: "Darius Giurgi - Mentor alumni",
        poza: "poze/mentori/darius.jpg",
        facultate: "Facultatea de Inginerie Industrială și Robotică, UPB",
        instagram: "https://www.instagram.com/darius_giurgi/",
        facebook: "https://www.facebook.com/profile.php?id=100089605624877",
      },
      {
        nume: "Silviu Pontoș - Mentor alumni",
        poza: "poze/membri/silviuPontos.JPG",
        facultate: "Facultatea de Inginerie Industrială și Robotică , UPB",
        instagram: "https://www.instagram.com/_sipandrei_/",
        facebook: "https://www.facebook.com/silviu.pontos/",
        github: "https://github.com/sipandrei",
      },
      {
        nume: "Alin Fonta - Mentor alumni",
        poza: "poze/alumni/alin.jpeg",
        facultate: "Facultatea de Inginerie Industrială și Robotică, UPB",
        instagram: "https://www.instagram.com/alinfonta/",
        facebook: "https://www.facebook.com/profile.php?id=100007190566659",
      },
      {
        nume: "Nicola Colopelnic",
        poza: "poze/membri/nicoColo1.JPG",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/col._.nicola/",
        facebook: "https://www.facebook.com/profile.php?id=100006945691248",
      },
      {
        nume: "Diana Dolca",
        poza: "poze/alumni/diadolca.jpg",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/alinaaaa3007/",
        facebook: "https://www.facebook.com/dianaalina.dolca.9",
      },
      {
        nume: "Larisa Pașca",
        poza: "poze/alumni/larisa.JPG",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/larisa.pasca.29/",
        facebook: "https://www.facebook.com/larisa.pasca.1",
      },
      {
        nume: "Vlad Hasciar",
        poza: "poze/alumni/hasciar.jpg",
        facultate: "Calculatoare și tehnologia informației, UPB",
        instagram: "https://www.instagram.com/vlasciar/",
        facebook: "https://www.facebook.com/vlad.hasciar",
      },
      {
        nume: "David Holociuc",
        poza: "poze/alumni/holociuc.jpg",
        facultate: "Facultatea de Inginerie Industrială și Robotică, UPB",
        instagram: "https://www.instagram.com/davidholociuc/",
        facebook: "https://www.facebook.com/david.holociuc",
      },
      {
        nume: "Ovidiu Gherman",
        poza: "poze/alumni/ovi.png",
        facultate: "Facultatea de Electronică, Telecomunicații și Tehnologia informației, UTCN",
        instagram: "https://www.instagram.com/gherman_ovidiu/",
        facebook: "https://www.facebook.com/profile.php?id=100006239205368",
      },
  
      {
        nume: "Mihaela Trifoi",
        poza: "poze/alumni/miha.jpg",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/miha._.trifoi/?img_index=1",
      },
      {
        nume: "Bogdan Giurgi",
        poza: "poze/membr.png",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/vosi8783/",
      },
      {
        nume: "Bogdan Mircea",
        poza: "poze/alumni/mircea.jpg",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/imbogdanm/",
      },
      {
        nume: "Andrei Mintău",
        poza: "poze/alumni/mintau.jpg",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/andreicatalinmintau/",
      },
      {
        nume: "Andrei Rodilă",
        poza: "poze/alumni/rodila.jpg",
        facultate: "Automatică și calculatoare, UTCN",
        instagram: "https://www.instagram.com/andrei_rodila21/",
      },
      {
        nume: "Florentina Dunca",
        poza: "poze/alumni/tina.jpeg",
        facultate: "Facultatea de Inginerie Industrială și Robotică , UPB",
        instagram: "https://www.instagram.com/d.ttina/",
        facebook: "https://www.facebook.com/d.ttinaa",
      },
      {
        nume: "Cosmin Mihai",
        poza: "poze/alumni/coco.jpeg",
        facultate: "Facultatea de Mecatronică și Robotică, UPT",
        instagram: "https://www.instagram.com/cosminclaudiumihai/",
        facebook: "https://www.facebook.com/profile.php?id=100029654430047",
      },
      
      {
        nume: "Cosmin Sabadâș",
        poza: "poze/alumni/cosmins.jpg",
        facultate: "Facultatea de Automatică și Calculatoare, UTCN",
        instagram: "https://www.instagram.com/sabadascosmin/",
        facebook: "https://www.facebook.com/sabadas.cosmin",
      }
    ];
  }

  renderAl(al) {
    return <Al al={al} />;
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "shhh.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="sliderAlumni">
        {this.alumni.map((al) => this.renderAl(al))}
      </div>
    );
  }
}

function Al(props) {
  const hasFacebook = props.al.facebook;
  const hasInstagram = props.al.instagram;
  const hasGithub = props.al.github;
  return (
    <div class="slide al" key={props.al.nume}>
      <img
        src={props.al.poza}
        alt={props.al.nume}
        height="250vh"
        width="auto"
      />
      <h3>{props.al.nume}</h3>
      <h4 class="desc-al">{props.al.facultate}</h4>
      <div class="contact-al">
        {hasFacebook ? (
          <a href={props.al.facebook}>
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
          <a href={props.al.instagram}>
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
          <a href={props.al.github}>
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

const domContainer = document.querySelector("#alumniReact_container");
const root = ReactDOM.createRoot(domContainer);
root.render(<Alumni />);
