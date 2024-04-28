// Component made by Aarsh
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import GlobalStylesProvider from '../components/GlobalStyles';
import { WindupChildren, Pace } from "windups";

const About = () => {
    // State to manage the flipped state of cards
    const [isFlipped, setIsFlipped] = useState(new Array(5).fill(false));

    // Function to handle hover action over the cards
    const handleHover = (index) => {
        // Toggle the flipped state for the card at the given index
        const updatedFlipped = [...isFlipped];
        updatedFlipped[index] = !updatedFlipped[index];
        setIsFlipped(updatedFlipped);
    };

    // Array of team members with their details
    const teamMembers = [
        { emoji: '💙', name: 'Ashley Anyanwu', co: 'CO 2025' },
        { emoji: '🤷‍♂️', name: 'Kalin Toussaint', co: 'CO 2024' },
        { emoji: '🤖', name: 'Aarsh Mehta', co: 'CO 2025' },
        { emoji: '😪', name: 'Thang Tong', co: 'CO 2025' },
        { emoji: '😴', name: 'Favor Wariboko', co: 'CO 2024' },
    ];

    // Determine the grid layout based on the number of team members
    const gridTemplateColumns = teamMembers.length % 2 === 0 ? 'repeat(2, 1fr)' : '1fr';

    return (
        // Provider for global styles
        <GlobalStylesProvider>
            {/* Container for the About section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', paddingBottom: '100px' }}>
                {/* Animated text component */}
                <WindupChildren>
                    <Pace ms={100}>
                        <h1 style={{fontSize: '5rem', margin: '1rem'}}>About Us</h1>
                    </Pace>
                </WindupChildren>
                {/* Grid layout for team members */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns,
                    gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Mapping over team members to create flip cards */}
                    {teamMembers.map((member, index) => (
                        <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal" key={index}>
                            {/* Front side of the card */}
                            <div
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(index)}
                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', cursor: 'pointer', fontSize: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}
                            >
                                {member.emoji}
                            </div>
                            {/* Back side of the card */}
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
                    {/* Filler div to maintain grid structure when there is an odd number of team members */}
                    {teamMembers.length % 2 !== 0 && <div></div>}
                </div>
            </div>
            {/* Global footer */}
            <footer>
                © {new Date().getFullYear()} Non-Profit. All rights reserved.
            </footer>
        </GlobalStylesProvider>
    );
};

export default About;
