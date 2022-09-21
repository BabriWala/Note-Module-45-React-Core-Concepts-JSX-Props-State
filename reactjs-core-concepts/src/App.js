
import './App.css';
import Heroes from './components/Heroes';
import Nayok from './components/Nayok';

  const southHeroes = [
    {
      id: 1,
      name: 'Allu Arjun',
      age: 45,
      bestMovie: 'Sarraianodu'
    },
    {
      id: 2,
      name:'Prabhas',
      age: 50,
      bestMovie: 'Bahubali'
    },
    {
      id: 3,
      name: 'Mahesh Babu',
      age: 60,
      bestMovie: 'Maharashi'
    },
    {
      id: 4,
      name: 'Jr. NTR',
      age: 52,
      bestMovie: 'RRR'
    }
  ]

function App() {
  const nayoks = ['Sallu', 'Amir', 'Shahrukh', "shahriar"]

  return(
    <>
      {/* <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[3]}></Nayok> */}
      {
        nayoks.map(nayok => <Nayok name={nayok}></Nayok>)
      }
      {
        southHeroes.map(hero => <Heroes hero={hero}  key={hero.id}></Heroes>)
      }
    </>
  );
}

export default App;
