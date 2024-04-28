import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import GlobalStylesProvider from '../components/GlobalStyles';
import { WindupChildren, Pace} from "windups";

const About = () => {
    const [isFlipped, setIsFlipped] = useState(new Array(5).fill(false));

    const handleHover = (index) => {
        const updatedFlipped = [...isFlipped];
        updatedFlipped[index] = !updatedFlipped[index];
        setIsFlipped(updatedFlipped);
    };

    const teamMembers = [
        { emoji: '💙', name: 'Ashley Anyanwu', co: 'CO 2025' },
        { emoji: '🤷‍♂️', name: 'Kalin Toussaint', co: 'CO 2024' },
        { emoji: '🤖', name: 'Aarsh Mehta', co: 'CO 2025' },
        { emoji: '😪', name: 'Thang Tong', co: 'CO 2025' },
        { emoji: '😴', name: 'Favor Wariboko', co: 'CO 2024' },
    ];

    const gridTemplateColumns = teamMembers.length % 2 === 0 ? 'repeat(2, 1fr)' : '1fr';

    return (
        <GlobalStylesProvider>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', paddingBottom: '100px' }}>
                <WindupChildren>
                    <pace ms={100}>
                    <h1 style={{fontSize: '5rem', margin: '1rem'}}>About Us</h1>
                    </pace>
                </WindupChildren>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns,
                    gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                    {teamMembers.map((member, index) => (
                        <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal" key={index}>
                            <div
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(index)}
                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', cursor: 'pointer', fontSize: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}
                            >
                                {member.emoji}
                            </div>

                            <div
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(index)}
                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100px' }}
                            >
                                <div>{member.name}</div>
                                <div>{member.co}</div>
                            </div>
                        </ReactCardFlip>
                    ))}
                    {teamMembers.length % 2 !== 0 && <div></div>}
                </div>
            </div>
            <footer>
                © {new Date().getFullYear()} Non-Profit. All rights reserved.
            </footer>
        </GlobalStylesProvider>
    );
};

export default About;