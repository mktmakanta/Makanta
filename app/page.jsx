"use client";

import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const projects = [
  {
    name: "Sungrid Solution",
    logo: "/sungrid.png",
    link: "https://sungridsolution.com",
  },
  {
    name: "Counter Bank",
    logo: "/counter.png",
    link: "https://counterbank.vercel.app",
  },
  {
    name: "Google Developer ",
    logo: "/google.png",
    link: "https://makanta.xyz",
  },
  {
    name: "Portfolio",
    logo: "/portfolio.png",
    link: "https://makanta.xyz",
  },
  {
    name: "Numtify",
    logo: "/numtify.png",
    link: "https://numtify.vercel.app",
  },
  {
    name: "Medium",
    logo: "/medium.png",
    link: "https://medium.com/@makanta",
  },
];

const Home = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" max-w-full bg-white  ">
      <section className="intro-section grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-center px-4 lg:pt-16 pb-8 lg:px-0 h-auto ">
        <div className="my-image flex justify-center items-center lg:pt-20 overflow-y-clip">
          <Image
            src="/makanta-photo.png"
            alt="Makanta Photo"
            width={280}
            height={280}
            className="about__img lg:scale-150 "
            priority={true}
            quality={100}
          />
        </div>
        {/* right side */}
        <div className="   h-full flex flex-col text-center lg:text-left  justify-center items-center lg:items-start space-y-4 p-4 lg:pl-10">
          <div className="relative font-karla lg:mt-16">
            <h1
              className={`absolute  text-4xl lg:text-[5rem]  font-medium lg:font-bold scale-y-125 tracking-widest text-black top-0 left-0  z-10  `}
            >
              MAKANTA
            </h1>
            <h1
              className={`relative text-4xl lg:text-[5rem] font-medium lg:font-bold scale-y-125 tracking-widest text-orange-100 top-1 left-1 `}
              // style={{ WebkitTextStroke: "2px #f5f5f5" }}
            >
              MAKANTA
            </h1>
          </div>
          <h1 className="font-karla font-semibold text-2xl">
            {" "}
            Frontend Developer
          </h1>
          <h3 className="font-inter tracking-wider ">
            I am a developer specializing in frontend with React and Next.js,
            but I also work across the stack with Node.js and databases to
            create scalable, secure, and inclusive applications.
          </h3>
          <button className="relative p-2 px-3 bg-orange-100 font-karla font-medium cursor-pointer  group">
            <span className="border absolute p-2 px-3 top-0 left-0 w-full h-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400  "></span>
            Get in touch
          </button>
        </div>
      </section>

      {/* about section */}
      <section className="about-section bg-[#f7f7f7] p-4">
        <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-start px-4 pt-24 pb-14 lg:px-0 h-auto">
          <div className="relative font-karla mb-6">
            <h1
              className={`absolute  text-4xl lg:text-[5rem]  font-medium lg:font-bold scale-y-125 tracking-widest text-black top-0 left-0  z-10  `}
            >
              ABOUT ME
            </h1>
            <h1
              className={`relative text-4xl lg:text-[5rem] font-medium lg:font-bold scale-y-125 tracking-widest text-orange-100 top-1 left-1 `}
            >
              ABOUT ME
            </h1>
          </div>

          {/* right side */}
          <div className=" font-inter tracking-wider space-y-4">
            <div>
              I’m a
              <span className="bg-orange-100 inline-block px-2 -skew-x-6 font-medium">
                frontend-focused
              </span>
              fullstack developer with 3+ years of experience crafting
              accessible, engaging, and scalable web applications. My specialty
              is building pixel-perfect user interfaces with{" "}
              <span className="bg-orange-100 inline-block px-2 -skew-x-6 font-medium">
                React, Next.js, Typescript
              </span>{" "}
              and modern UI tools, while also delivering secure and reliable
              backend solutions with Node.js, MongoDB, Prisma, and Supabase.
            </div>
            <div>
              With a background in Electrical and Electronics Engineering, I
              approach development with both creative and structured
              problem-solving skills—blending design sensitivity on the frontend
              with solid engineering principles on the backend.
            </div>
            <div>
              I thrive at the intersection of design and development, creating
              applications that look great, perform seamlessly, and scale with
              user needs.
            </div>

            <div className="space-y-2">
              <h1 className="text-orange-500 text-lg font-medium "> Skills</h1>
              <h3 className="font-semibold ">Languages & Frameworks</h3>
              <ul className="flex  divide divide-x gap-x-4 gap-y-2 flex-wrap divide-orange-400">
                <li className="pr-3">JavaScript</li>
                <li className="pr-3">React</li>
                <li className="pr-3">Next.js</li>
                <li className="pr-3">Typecript</li>
                <li>Node.js </li>
              </ul>
              <ul className="flex flex-wrap divide divide-x gap-x-4 gap-y-2 pt-2 divide-orange-400">
                <li className="pr-3">MongoDB</li>
                <li className="pr-3"> GraphQL</li>
                <li className="pr-3"> Prisma</li>
                <li>Supabase</li>
              </ul>
              <h3 className="font-semibold mt-6">Frontend & UI</h3>
              <ul className="flex  divide divide-x gap-x-4 divide-orange-400">
                <li className="pr-3">Tailwind CSS</li>
                <li className="pr-3">Redux</li>
                <li className="pr-3">Framer Motion</li>
                <li className="pr-3">Figma</li>
              </ul>
              <h3 className="font-semibold mt-6">Backend & Tools</h3>
              <ul className="flex flex-wrap divide divide-x   gap-x-4 gap-y-2 divide-orange-400">
                <li className="pr-3">Mongoose</li>
                <li className="pr-3">Express.js</li>
                <li className="pr-3">nextauth.js</li>
                <li className="pr-3">Jest</li>
                <li>Git</li>
              </ul>
            </div>
            <div>
              <h1 className="text-orange-500 text-lg font-medium ">
                Career goals
              </h1>
              <p className="mt-2">
                I’m actively seeking opportunities where I can contribute as a
                fullstack developer—leading with frontend expertise while
                strengthening backend systems. My goal is to build inclusive,
                high-performing applications that balance thoughtful design with
                robust engineering. I’m excited to join a{" "}
                <span className="bg-orange-100 inline-block px-2 -skew-x-6 font-medium">
                  collaborative team
                </span>
                where I can continue growing my skills and make a meaningful
                impact through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* projects sections */}
      <section className="projects-section p-8 lg:p-4 py-16 w-full  bg-white">
        <div className="max-w-6xl mx-auto lg:pt-16">
          <div className="relative font-karla mx-auto w-max mb-12">
            <h1
              className={`absolute  text-4xl lg:text-[5rem]  font-medium lg:font-bold scale-y-125 tracking-widest text-black top-0 left-0  z-10  `}
            >
              PROJECTS
            </h1>
            <h1
              className={`relative text-4xl lg:text-[5rem] font-medium lg:font-bold scale-y-125 tracking-widest text-orange-200/75 top-1 left-1 `}
            >
              PROJECTS
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm  flex flex-col items-center justify-center hover:-translate-y-1.5 transition duration-700"
              >
                <div className="flex justify-center items-center  h-48">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={600}
                    height={350}
                    className="object-cover object-center "
                  />
                </div>
                <div className="bg-[#f7f7f7] p-6 w-full">
                  <h3 className=" text-xl text-gray-700 font-karla font-semibold mb-2">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 text-lg group relative  font-inter"
                  >
                    <span className="absolute left-0 bottom-[-4px] h-[0.5px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
                    {project.link.replace("https://", "").replace("www.", "")}
                    <ArrowUpRight
                      strokeWidth={1.25}
                      size={18}
                      className="group-hover:translate-x-1 mt-1 inline  group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact section */}
      </section>
      <section className=" about-section bg-[#f7f7f7] p-4 py-16">
        <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-start px-4 pt-10 gap-4 lg:px-0 h-auto">
          <div className=" relative font-karla ">
            <h1
              className={`absolute  text-4xl lg:text-[5rem]  font-medium lg:font-bold scale-y-125 tracking-widest text-black top-0 left-0  z-10  `}
            >
              CONTACT
            </h1>
            <h1
              className={`relative text-4xl lg:text-[5rem] font-medium lg:font-bold scale-y-125 tracking-widest text-orange-100 top-1 left-1 `}
            >
              CONTACT
            </h1>
          </div>
          <div className=" w-full mx-auto font-inter tracking-wider space-y-4">
            <h2 className=" text-2xl border-b-2 border-orange-500 inline-block">
              Get in Touch
            </h2>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white/20  space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-black/50  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-black/50  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Your Message"
                  className="w-full border border-black/50  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`relative p-2 px-3  ${
                  loading ? "bg-gray-300" : "bg-orange-100"
                } font-karla font-medium cursor-pointer  group`}
              >
                <span className="border absolute p-2 px-3 top-0 left-0 w-full h-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400  "></span>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {/* TOASTIFY CONTAINER */}
            <ToastContainer />
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer className="about-section bg-white p-4">
        <div className=" max-w-6xl mx-auto items-start px-4 divide divide-y  lg:px-0 h-auto py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            <div className="text-lg space-y-2 font-inter">
              <h1>SAY HELLO</h1>
              <div>
                <div className="text-orange-500">mktmakantamkt@gmail.com</div>
                <div className="text-orange-500">t.me/makanta</div>
              </div>
            </div>
            <div className="text-lg space-y-2 font-inter flex flex-col">
              <Link
                href="/Makanta_Resume.pdf"
                target="_blank"
                className="relative group inline-block "
              >
                <span className="absolute left-0 bottom-[-4px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                Home
              </Link>
              <Link
                href="/Makanta_Resume.pdf"
                target="_blank"
                className="relative group "
              >
                My Work
                <span className="absolute left-0 bottom-[-4px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                href="/Makanta_Resume.pdf"
                target="_blank"
                className="relative group "
              >
                My Resume
                <span className="absolute left-0 bottom-[-4px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="  font-inter  mt-20 flex flex-col-reverse gap-3 md:flex-row justify-between  tracking-widest">
            {" "}
            <div> © Ibrahim Makanta 2025</div>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.instagram.com/makanta_dev/"
                target="_blank"
              >
                <FaGithub className="size-6 hover:text-purple-600 transition-all duration-500" />
              </Link>

              <Link
                href="https://www.instagram.com/makanta_dev/"
                target="_blank"
              >
                <FaLinkedin className="size-6 hover:text-sky-600 transition-all duration-500" />
              </Link>

              <Link
                href="https://www.instagram.com/makanta_dev/"
                target="_blank"
              >
                <FaXTwitter className="size-6 hover:text-orange-200 transition-all duration-500" />
              </Link>

              <Link
                href="https://www.instagram.com/makanta_dev/"
                target="_blank"
              >
                <HiOutlineMail className="size-6 hover:text-green-600 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
