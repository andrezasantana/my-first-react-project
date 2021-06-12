import Title from "./componentes/Title";
import Fruit from "./componentes/Fruit";

import fruits from "./fruits";

function App() {
  return (
    <div>
      <Title text="Meu Primeiro Projeto React do Zero" />
      {
        fruits.map(fruit => {
          return (
            <Fruit name={fruit.name} id={fruit.id} description={fruit.description} image={fruit.image}></Fruit>
          );
        })
      }
    </div>
  );
}

export default App;
