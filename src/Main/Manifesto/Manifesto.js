import React, { Component } from 'react';
import "./Manifesto.css";
import Header from "../Shared/Header/Header";

class Manifesto extends Component {
    render() {
        return (
            <div>
                <Header title="DESIGN MANIFESTO"/>
                <div className="manifesto-container body-text">
                    <ul className="list-unstyled">
                        <h1>AXIOMS</h1>
                        <li>Architecture & art are expressions of the spiritual human condition;</li>
                        <li>Architecture is spatial balance & spatial disruption;</li>
                        <li>Architecture is the perception of the void & the sensation of the material;</li>
                        <li>Architecture is equally psychological and physical;</li>
                        <li>Architecture is also spiritual for uniting the two;</li>
                        <li>Architecture & art are socio-political forces;</li>
                        <li>Architecture & art should further political progress;</li>
                        <li>Architecture & art histories are vital to cultural citizenship;</li>
                        <li>Architecture & art must be made available to all members of societies;</li>
                        <li>Architecture & art must be owned by the collective of all humanity.</li>

                        <h1>PRINCIPLES</h1>
                        <li>Museums and galleries must be free to ensure equal access to the arts.</li>
                        <li>The Arts, Humanities, & Sciences must receive equal educational funding.</li>
                        <li>Architecture & urbanism must be inclusive to all.</li>
                        <li>Architecture & urbanism must responsibly respond to a globalized human community.</li>
                        <li>Architecture must permit the full range of the human experience & emotion.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Manifesto;