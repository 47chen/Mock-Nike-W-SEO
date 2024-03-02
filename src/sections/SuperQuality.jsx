import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-content items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red inline-block">Super </span>
          <br />
          <span className="text-coral-red inline-block">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into unparalleled comfort and refined style. Our meticulously
          crafted footwear elevates your journey, offering quality, innovation,
          and a touch of timeless elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text"></p>
        <Button label="View details" />
      </div>
      <div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
