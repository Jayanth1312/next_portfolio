import PixelTransition from "./PixelTransition";
import profile from "@/assets/profile.jpg";

export default function PictureData() {
  return (
    <PixelTransition
      firstContent={
        <img
          src={profile.src}
          alt="Description"
          className="w-fit h-fit"
          lazy-loading="lazy"
        />
      }
      secondContent={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#1e1e1e",
          }}
        >
          <p style={{ fontWeight: 900, fontSize: "2.5rem", color: "#ffffff", textAlign: "center" }}>
            No <br />
            Light<br />
            mode!
          </p>
        </div>
      }
      gridSize={12}
      pixelColor="#ffffff"
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
  );
}
