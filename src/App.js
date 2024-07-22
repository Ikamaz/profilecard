import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistans</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                            title="Alexa"
                            handle="@alexa99"
                            image={AlexaImg}
                            description="Alexa was made by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                            title="Cortana"
                            handle="@cortana32"
                            image={CortanaImg}
                            description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                            title="Siri"
                            handle="@siri01"
                            image={SiriImg}
                            description="Siri was made by Apple and is being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>




        </div>
    );
}

export default App;
