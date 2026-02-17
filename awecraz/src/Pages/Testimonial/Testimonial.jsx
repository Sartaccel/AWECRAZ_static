import React from "react";
import "./Testimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Local Images */
import user1 from "../../assets/images/user1.jpeg";
import user2 from "../../assets/images/user2.jpeg";
import user3 from "../../assets/images/user3.jpeg";
import user4 from "../../assets/images/user4.jpeg";
import user5 from "../../assets/images/user5.jpeg";
import user6 from "../../assets/images/user6.jpeg";



const testimonials = [
  {
    id: 1,
    name: "MOHAMED RAFEEK ",
    image: user1,
    content:
      "Mr. Sree Ram's digital marketing expertise truly impressed me! He tailored a plan that boosted my online engagement and sales. His knowledge of current trends and attention to detail made our collaboration seamless. I highly recommend him for his professionalism and skill - he's a great choice if you're looking for a digital marketing expert!",
  },
  {
    id: 2,
    name: "DR. SMITHA OM",
    image: user2,
    content:
      "I highly recommend AWECRAZ BRAND SOLUTION for their exceptional social media services!Their expertise and strategic approach have significantly boosted our online presence and driven more business",
  },
  {
    id: 3,
    name: "Dr Scott",
    image: user3,
    content:
      "Your attention to detail and commitment towards my You Tube videos are excellent and creative",
  },
  {
    id: 4,
    name: "Mr. Uma Maheswaran",
    image: user4,
    content:
      "Mr. Sree Ram and his digital marketing firm is extremely responsive and creative. It's like having our own in-house man keting and publishing team. They understand association marketing, and they help us get it all done. They produced fantastic content for us including posters, reels and whatever related to social media marketing. Their work has made a re difference in the success of our business. I would like to recommend him to any one running a business and lookin for digital marketing",
  },
  {
    id: 5,
    name: "DR. RUTH DHILIP KUMAR",
    image: user5,
    content:
      "I'm very impressed with Mr. Sree Ram's digital marketing skills! He created a plan just for me that brought great results, increasing my online engagement and sales. He knows the latest trends and pays close attention to every detail. Working with him was easy and smooth I highly recommend Mr. Sree Ram if you want a skilled and professional digital marketer",
  },
  {
    id: 6,
    name: "Mr. Arockia Vino",
    image: user6,
    content:
      "Sree ram and his team have really been the strategy behind the marketing, and helped us achieve a lot more than we've ever achieved when it comes to branding the company.Since we have begun working with him, we have been able to completely revamp and develop an ongoing content marketing campaign. Our social media presence is higher than ever, and we have gotten great feedback from the depth of information we are now able to provide to our custom ers and prospects. They are extremely responsive, and overall just a great firm to work with.",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-title text-center">
          What Our Clients Say
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className={`testimonial-card card-${item.id}`}>
              
             

              <p className="testimonial-content">“{item.content}”</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
