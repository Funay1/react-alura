import React from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Menu from "./components/Menu/Menu";
import BannerMain from "./components/BannerMain/BannerMain";
import Carousel from './components/Carousel/Carousel'

const category = {
  titulo: 'Catálogo',
  link_extra: 'Teste',
  cor: 'var(--primary)',
  videos: [{titulo: 'titulo teste', url: 'https://www.youtube.com/watch?v=tbLziJchz48'}, {titulo: 'titulo teste', url: 'https://www.youtube.com/watch?v=tbLziJchz48'}, {titulo: 'titulo teste', url: 'https://www.youtube.com/watch?v=tbLziJchz48'}, {titulo: 'titulo teste', url: 'https://www.youtube.com/watch?v=tbLziJchz48'}, {titulo: 'titulo teste', url: 'https://www.youtube.com/watch?v=tbLziJchz48'}],
}
function App() {
  return (
    <div className="App">
      <Menu>
      </Menu>
      <Carousel category={category}></Carousel>

      <BannerMain videoTitle="Titulo do video" videoDescription="Descrição do video" url="https://www.youtube.com/watch?v=tbLziJchz48"></BannerMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
