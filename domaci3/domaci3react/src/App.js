
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
function App() {
  const workouts=[
    {
        id:1,
        img:"https://clipart-library.com/img/1985093.jpg",
        title:'Strength',
        duration:"60 minutes",
        calorie_burn:"cal 600"
    },
    {
        id:2,
        img:"https://clipart-library.com/new_gallery/83-831945_instructions-to-get-six-pack-abs-easily-cardio.png",
        title:'Cardio',
        duration:"30 minutes",
        calorie_burn:"350 cal"
    },
    {
        id:3,
        img:"https://clipart-library.com/new_gallery/swimmer-clipart-56.jpg",
        title:'Swimming',
        duration:"45 minutes",
        calorie_burn:"250 cal"
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_MEoub8Wc7lAAHiI3fgB9lsl4K6hHGDuEw&s",
        title:"Yoga",
        duration:"60 minutes",
        calorie_burn:"100 cal"
    }
  ];
  function onAdd(title){
    console.log("dodat"+title);
  };
  return (
    <div className="App">
     <Navbar/>
     <Workouts workouts={workouts}/>

    </div>
  );
}

export default App;
