import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="container hero-content">
                    <h1>Expert Engineering Consulting</h1>
                    <p>Specializing in AI-based projects, paint finishing, power systems, and more.</p>
                    <Link to="/services" className="btn btn-primary">Our Services</Link>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>Why Choose AIJ?</h2>
                    <p>We provide cutting-edge solutions for complex engineering challenges. Our team of experts is dedicated to delivering excellence in every project.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
