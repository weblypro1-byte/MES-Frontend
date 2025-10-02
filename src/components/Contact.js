import React from "react";
import { Form, Input, Button, message } from "antd";
import "./Contact.scss";

const ICON_PHONE = "https://cdn-icons-png.flaticon.com/512/597/597177.png";
const ICON_EMAIL = "https://cdn-icons-png.flaticon.com/128/2258/2258814.png";
const ICON_MARKER = "https://cdn-icons-png.flaticon.com/128/1865/1865153.png";

const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const res = await fetch("https://mes-backend-psi.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (data.success) {
        message.success({
          content: 'Message sent successfully! We will get back to you soon.',
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
        form.resetFields();
      } else {
        message.error({
          content: `${data.message || 'Failed to send message. Please try again.'}`,
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
      }
    } catch (err) {
      console.error(err);
      message.error({
        content: 'Something went wrong. Please check your connection.',
        duration: 5,
        style: { 
          marginTop: '20vh',
          textAlign: 'center'
        }
      });
    }
  };
  return (
    <div className="contact-page">
      {/* HERO */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url(${'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll_h7g2nh.jpg'})`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">CONTACT</h1>
          
        </div>
      </header>

      {/* MAIN CONTACT */}
      <main className="contact-main">
        <div className="container">
          {/* Left info */}
          <div className="left">
            <span className="small-sub">Connect With Our Team</span>
            <h2 className="big-title">Feel Free to Get in Touch</h2>

            <div className="contacts-list">
             

              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_PHONE} alt="phone icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Sales</div>
                  <a href=""> (will provide later)</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_EMAIL} alt="email icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Send Email</div>
                  <a href="mailto:sales@cirrussystemsus.com">
                  Gov-Buy@modern-sol.com
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_MARKER} alt="marker icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Visit Now</div>
                  <a
                    href="https://www.google.com/maps/place/618+S+Broad+St+%232,+Lansdale,+PA+19446,+USA"
                    target="_blank"
                    rel="noreferrer"
                  >
                12420 Colorado Ave, Bakersfield, CA 93312, USA.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <aside className="right">
            <Form
              form={form}
              layout="vertical"
              className="contact-form"
              onFinish={handleSubmit}
            >
              <Form.Item
                label="Your name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Your email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item label="Subject" name="subject">
                <Input placeholder="Enter subject" />
              </Form.Item>

              <Form.Item label="Your message (optional)" name="message">
                <Input.TextArea rows={6} placeholder="Write your message" />
              </Form.Item>

              <Form.Item>
                <Button type="" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </aside>
        </div>
      </main>

      {/* Map */}
      <section className="map-wrapper">
    <div className="map-container">
      <iframe
        title="MES-Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3251.7935379253668!2d-119.1407434!3d35.4103678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea44a8747ab207%3A0xc51921a28807c8e!2s12420%20Colorado%20Ave%2C%20Bakersfield%2C%20CA%2093312%2C%20USA!5e0!3m2!1sen!2s!4v1759229424459!5m2!1sen!2s"
        loading="lazy"
      />

    </div>
  </section>
    </div>
  );
};

export default Contact;
