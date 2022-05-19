import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want to get in touch?</h3>
            <p>
              sdfsdfsdf sdfsdf sdf sf sdf sdf gr ergegerge fg df dfser fd gf
              hgfhfd dfgfgdfghh erhtrh
            </p>
            <p>
              sdfsdfsdf sdfsdf sdf sf sdf sdf gr ergegerge fg df dfser fd gf
              hgfhfd dfgfgdfghh erhtrh
            </p>
            <p>
              sdfsdfsdf sdfsdf sdf sf sdf sdf gr ergegerge fg df dfser fd gf
              hgfhfd dfgfgdfghh erhtrh
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type='submit' className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
