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
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (data.success) {
        message.success("✅ Message sent successfully!");
        form.resetFields();
      } else {
        message.error("❌ Failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      message.error("⚠️ Something went wrong.");
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
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            HOME <span className="sep">›</span> CONTACT
          </nav>
        </div>
      </header>

      {/* MAIN CONTACT */}
      <main className="contact-main">
        <div className="container">
          {/* Left info */}
          <div className="left">
            <span className="small-sub">Contact With Us</span>
            <h2 className="big-title">Feel Free to Get in Touch</h2>

            <div className="contacts-list">
              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_PHONE} alt="phone icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Federal GSA</div>
                  <a href="tel:4842146541">484-214-6541</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_PHONE} alt="phone icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Sales</div>
                  <a href="tel:2672998248">267-299-8248</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="icon-wrap">
                  <img src={ICON_EMAIL} alt="email icon" />
                </div>
                <div className="contact-text">
                  <div className="label">Send Email</div>
                  <a href="mailto:sales@cirrussystemsus.com">
                    sales@cirrussystemsus.com
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
                    618 S Broad Street, Suite 2 Lansdale PA 19446-5200
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
                <Button type="primary" htmlType="submit" block>
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
            title="company-location"
            src="https://maps.google.com/maps?q=618%20S%20Broad%20St%20Lansdale%20PA&t=m&z=14&output=embed"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
