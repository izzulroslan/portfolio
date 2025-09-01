import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProject } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup
  const modalOpen = !!selectedProject;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  // ✅ init AOS once
  useEffect(() => {
    AOS.init({
      once: true,          // run animations once
      duration: 700,       // tune to taste
      easing: "ease-out",
    });
    // in case content height changes later:
    const t = setTimeout(() => AOS.refreshHard(), 0);
    return () => clearTimeout(t);
  }, []);

  // ✅ lock/unlock body scroll using the single source of truth: modalOpen
  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;

    if (modalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = prevHtml || "";
      document.body.style.overflow = prevBody || "";
    }

    return () => {
      document.documentElement.style.overflow = prevHtml || "";
      document.body.style.overflow = prevBody || "";
    };
  }, [modalOpen]);

  // inside your component (same file)
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    // if you have a fixed navbar and need offset, change offsetPx below
    const offsetPx = 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offsetPx;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#e879f9","#67e8f9","#7c3aed"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/izzul3.png" className="w-10 rounded-md" />
              <q>Make data speak clearly</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Izzul Roslan" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A final-year AI student at UTeM who turns data into actionable insights using machine learning, Python, SQL, Power BI, and Tableau."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Muhammad_Izzul_Bin_Roslan_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Izzul Roslan"
              title="AI Engineer"
              handle="izzulroslan"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/izzul2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={scrollToContact}
            />
          </div>
        </div>
      {/* tentang */}
      <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-cyan-400/40 shadow-[0_0_30px_rgba(103,232,249,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">
          <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-cyan-400/30">
            {/* Kolom kiri */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                About Me
              </h2>

              <BlurText
                text="I’m Muhammad Izzul Bin Roslan, a Final-year Bachelor of Computer Science (Artificial Intelligence) student at Universiti Teknikal Malaysia Melaka (UTeM). Skilled in data analysis, machine learning, and data visualization using Python, SQL, Power BI, and Tableau. Experienced in delivering AI-driven solutions through academic projects, competitions, and leadership roles. Seeking a 6-month internship (6 Oct 2025 – 20 Mar 2026) to apply analytical thinking, model development, and data storytelling skills in real-world, data-driven environments while learning from industry professionals."
                animateBy="words"
                direction="top"
                className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
              />

              <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    10<span className="text-cyan-400">+</span>
                  </h1>
                  <p>Project Finished</p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    2<span className="text-cyan-400">+</span>
                  </h1>
                  <p>Years of Experience</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                  <h1 className="text-3xl md:text-4xl mb-1">
                    3.61<span className="text-cyan-400">/4.00</span>
                  </h1>
                  <p>CGPA</p>
                </div>
              </div>

              <ShinyText
                text="Smart by design, driven by data."
                disabled={false}
                speed={3}
                className="text-sm md:text-base text-cyan-300"
              />
            </div>
          </div>

          {/* Kolom kanan */}
          <div className="basis-full md:basis-5/12 pl-0 md:pl-8 max-w-full flex justify-center ">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} paused={modalOpen} />
          </div>
        </div>
      </div>

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Highlights of the things I’m proud to ship</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProject}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              enabled={!modalOpen}
            />
          </div>
        </div>
        {/* Projects */}
        <div className="tools mt-32 text-center">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="max-w-2xl mx-auto text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/izzulroslan03@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      {/* Contact section ends above */}
      </main>

      {modalOpen && (
        <ProjectModal
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
export default App;