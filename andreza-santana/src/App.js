import Title from "./component/Title";
import Fruit from "./component/Fruit";

import fruits from "./fruits";

function App() {
  return (
    <div>
      <Title text="Meu Primeiro Projeto React do Zero" />
      {
        fruits.map(fruit => {
          return (
            <Fruit id={fruit.id} name={fruit.name} description={fruit.description} image={fruit.image}></Fruit>
          );
        })
      }
    </div>
  );
}

export default App;
