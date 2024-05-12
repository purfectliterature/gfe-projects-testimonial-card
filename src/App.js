import TestimonialCard from "./components/testimonial-card";
import sarahDoleAvatar from "./assets/profile-thumbnail.png";

const App = () => {
  return (
    <main className="basic-gradient flex justify-center items-start h-screen px-4 py-[200px]">
      <TestimonialCard
        name="Sarah Dole"
        handle="@sarahdole"
        avatar={sarahDoleAvatar}
      >
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </TestimonialCard>
    </main>
  );
};

export default App;
