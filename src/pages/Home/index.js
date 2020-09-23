import React from "react";
import Login from "../Login"
import { auth, logout } from "../../services"
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="App">
      <div class="navegacao">
        <img
          src={"./assets/images/imagem1.png"}
          alt="Microsoft."
          width="137px"
          height="100%"
        />
        <img
          src={"./assets/images/imagem2.png"}
          alt="Xbox."
          width="137px"
          height="100%"
        />
        <ul>
          <li>
            <a class="active" href="#gamepass">
              Game Pass
            </a>
          </li>
          <li>
            <a href="#jogos">Jogos</a>
          </li>
          <li>
            <a href="#dispositivos">Dispositivos</a>
          </li>
          <li>
            <a href="#mais">Comunidade</a>
          </li>
          <li>
            <a href="#toda">Para Todos</a>
          </li>
          <li>
            <a class="active" href="#gamepass">
              Toda a Microsoft
            </a>
          </li>
          <li>
            <a class="active" href="#gamepass">
              Buscar
            </a>
          </li>
        </ul>
        {!auth() ? <Login /> : <button onClick={() => logout()}>Sair</button>}
      </div>
      <div id="xbox">
      <p className="positive positive-font">{props.msg}</p>
        {props.children ? (
          props.children
        ) : (
            <div>
              <h1 class="cabecalho">Analise de sentimento de texto</h1>
              <p class="sub-cabecalho">Logar para fazer analise</p>
              <Link to="/registro">
                <p class="console">REGISTRAR</p>
              </Link>
            </div>
          )}
      </div>
      <section class="container">
        <div id="jogos">
          <div class="item flex-item-1">
            <img
              width="100%"
              height="200px"
              src="./assets/images/jogos1.jpg"
              alt="Colagem de jogos do Xbox 360"
            />
            <h2 class="titulo">
              Experimente os jogos do Xbox 360 no Xbox One{" "}
            </h2>
            <p class="paragrafo">
              Experimente as duas gerações de jogos no Xbox One, incluindo
              títulos digitais e baseados em disco.
            </p>
            <p class="busque">SAIBA MAIS</p>
          </div>
          <div class="item flex-item-1">
            <img
              width="100%"
              height="200px"
              src="./assets/images/jogos2.jpg"
              alt="Quatro jogos do Xbox One alinhados diagonalmente um atrás do outro"
            />
            <h2 class="titulo">Biblioteca crescente de jogos do Xbox One</h2>
            <p class="paragrafo">
              Jogue mais de 1.300 jogos, incluindo mais de 200 exclusivos do
              console.
            </p>
            <p class="busque">BUSCAR JOGOS DO XBOX ONE</p>
          </div>
          <div class="item flex-item-1">
            <img
              width="100%"
              height="200px"
              src="./assets/images/jogos3.jpg"
              alt="Controle do Xbox que desbota em cores de preto para azul"
            />
            <h2 class="titulo">Controle sem fio aprimorado</h2>
            <p class="paragrafo">
              Aproveite o mapeamento de botões personalizados, conecte qualquer
              headset compatível com o conector e jogue em consoles do Xbox One
              e em computadores Windows 10 com a tecnologia Bluetooth®.
            </p>
            <p class="busque">BUSCAR ACESSÓRIOS DO XBOX ONE</p>
          </div>
        </div>
      </section>
      <div class="container">
        <h2 class="cabecalho2">Procurando por jogos do Xbox 360?</h2>
        <p class="compre">COMPRE NO MARKETPLACE DO XBOX 360</p>
        <div id="joguinhos"></div>
      </div>
      <section class="contra_1">
        <div class="contra_2 flex-item-1">
          <h2 class="cabecalho3">
            Jogue com outros com a assinatura Xbox Live Gold
          </h2>
          <p class="paragrafo3">
            Jogue com os amigos na rede multijogador mais avançada, obtenha
            jogos gratuitos e receba descontos exclusivos.
          </p>
          <p class="busque">ASSOCIE-SE HOJE</p>
        </div>
        <img
          class="flex-item-1"
          src="./assets/images/jogando.jpg"
          alt="Duas pessoas no sofá jogando Forza Horizon 4 no Xbox Live"
        />
      </section>
      <footer id="baixo">
        <section class="pezinho">
          <ul class="pe">
            <h4>Xbox</h4>
            <li>
              <a>Suporte</a>
            </li>
            <li>
              <a>Funções</a>
            </li>
            <li>
              <a>Aviso de Ataque Fotosensitivo</a>
            </li>
            <li>
              <a>Classificação de Jogos</a>
            </li>
            <li>
              <a>Código de boa Conduta</a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
