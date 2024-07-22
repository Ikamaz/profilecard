import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

function App() {
    return (
        <div>
            <div>Personal Digital Assistans</div>

            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg}/>
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg}/>
            <ProfileCard title="Siri" handle="@siri01" image={SiriImg}/>
        </div>
    );
}

export default App;
