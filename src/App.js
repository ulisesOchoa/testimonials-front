import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./scss/app.scss";

function App() {
  const url = "http://127.0.0.1:8000/api/testimonials";

  const [testimonios, setTestimonios] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.statusText);
    const responJson = await response.json();
    setTestimonios(responJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // return (
  //
  // )

  return (
    <div className="container">
      {!testimonios
        ? "cargando..."
        : testimonios.map((testimonios, index) => {
            return (
              <Card
                info={{
                  cardColor: testimonios.txColorTestimonials,
                  baner: testimonios.txBanerTestimonials,
                  name: testimonios.txNombreUsuario,
                  image: testimonios.txImgUsuario,
                  title: testimonios.txTituloTestimonials,
                  text: testimonios.txContenidoTestimonials,
                  state: testimonios.txEstadoUsuario,
                  index: "card" + index,
                }}
              />
            );
          })}
    </div>
  );
}

export default App;
