"use client";
import { motion } from "framer-motion";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { ContactInfo } from "../../lib/constants";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstname: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    const newErrors = {
      firstname: !formData.firstname.trim(),
      email: !validateEmail(formData.email),
      phone: !formData.phone.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      return;
    }
    const finalData = {
      name: formData.lastname
        ? formData.firstname + " " + formData.lastname
        : formData.firstname,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phone: formData.phone,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        finalData,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          alert("Email send succesfully");
          // Optionally, reset the form or show a success message
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert(
            "An error occured while sending email, please send an email manually to utsav.soni.27@gmail.com"
          );
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo asperiores enim nobis pariatur molestiae perferendis
                repellendus soluta doloribus consequatur facere, saepe omnis
                nemo ipsam voluptas quaerat. Ea eius libero iure!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={(e) => {
                    setFormData({ ...formData, firstname: e.target.value });
                  }}
                  required
                  error={errors.firstname}
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={(e) => {
                    setFormData({ ...formData, lastname: e.target.value });
                  }}
                />
                <Input
                  type="text"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  error={errors.email}
                />
                <Input
                  type="phone"
                  placeholder="Phone (with country code)"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  error={errors.phone}
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                  }}
                  error={errors.subject}
                />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
                error={errors.message}
              />
              <Button
                size="md"
                className="max-w-40 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {ContactInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
