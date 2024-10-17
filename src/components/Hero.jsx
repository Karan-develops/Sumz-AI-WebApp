import { Github, Sigma } from "lucide-react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-4 pt-3">
        <div className="flex">
          <Sigma className="w-28 h-10 object-contain invert" />
          <span className="text-white font-medium text-3xl -ml-8">Sumz</span>
        </div>

        <button
          type="button"
          onClick={() => window.open("", "_blank")}
          className="flex gap-1 black_btn"
        >
          GitHub <Github className="h-5" />
        </button>
      </nav>
      <div className="border w-full border-white "></div>
      <h1 className="head_text">
        Summarize Articles & websites with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4o</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumz, an open-source article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
