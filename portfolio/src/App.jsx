import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Qualifications from "./components/Qualifications";
import SocialProfiles from "./components/SocialProfiles";
import Title from "./components/Title";


function App() {
  return (
    <div className="App">
      <div className="row">
        <Title />
        <div className="column">
          <Profile />
        </div>
        <div className="column">
          <Qualifications />
        </div>
      </div>
      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
    </div>
  );
}

export default App;
