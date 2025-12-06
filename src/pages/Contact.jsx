const Contact = () => {
    return (
        <div className="contact-page section">
            <div className="container">
                <h1>Contact Us</h1>
                <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Get in touch to discuss your engineering needs.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="How can we help?" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
