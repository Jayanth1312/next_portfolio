import PixelTransition from "./PixelTransition";
import ProfileImage from "./ProfileImage";

export default function PictureData() {
  return (
    <PixelTransition
      firstContent={
        <ProfileImage
          src="https://unsplash.com/photos/man-sitting-on-gray-concrete-wall-_M6gy9oHgII/"
          alt="My Profile"
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
