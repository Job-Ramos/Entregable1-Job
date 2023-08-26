import PersonalInfo from "./components/PersonalInfo";
import "./styles/main.css";

const App = () => {
  const me = {
    name: 'Benjamin',
    age: 15,
    favoriteMovie: 'Titanic',
    favoriteMusic: 'Bachata'
  }

  const person = {
    name: 'Pepito',
    age: 25,
    favoriteMovie: 'Forest Gump',
    favoriteMusic: 'Romántica'
  }

  const person1 = {
    
  }

  return (
    <>
      <div className="principal">
        <PersonalInfo 
          me={me} 
          title='Benja'
          bgColor="#157842"
        />
        <PersonalInfo
          me={person}
          title='Pepito'
          bgColor="#a34567"
        />
        <PersonalInfo
        me={person1}
        title='Mi comida favorita'
        />
      </div>
    </>
  );
};

export default App;
