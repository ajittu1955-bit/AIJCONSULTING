const servicesList = [
    { title: "AI-Based Projects", description: "Consulting on AI applications in paint finishing and industrial processes." },
    { title: "Paint Finishing & Applications", description: "Expertise in sealer, LASD, and urethane applications." },
    { title: "Arc Flash Analysis", description: "Comprehensive analysis and mitigation reports for manufacturing facilities." },
    { title: "Water Treatment Systems", description: "Design and optimization of industrial water treatment." },
    { title: "Power Transformers", description: "Consulting on power transformer installation and maintenance." },
    { title: "Electrical Power Stations", description: "Solutions for electrical power stations and renewable energy integration." }
];

const Services = () => {
    return (
        <div className="services-page section">
            <div className="container">
                <h1>Our Services</h1>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
