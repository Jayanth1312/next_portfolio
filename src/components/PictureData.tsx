import PixelTransition from "./PixelTransition";
import ProfileImage from "./ProfileImage";

export default function PictureData() {
  return (
    <PixelTransition
      firstContent={
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="default pixel transition content, a cat!"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
            Dude!
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
