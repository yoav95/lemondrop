import React, { useRef, useEffect } from "react";

const SoundPlayer = ({ soundFile, play }) => {
  const audioRef = useRef(null);

  // Play the audio when the play state changes
  useEffect(() => {
    if (play && audioRef.current) {
      const playAudio = async () => {
        try {
          audioRef.current.currentTime = 0; // Reset the audio to the beginning
          await audioRef.current.play(); // Play the audio
          console.log("Audio is playing");
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      };
      playAudio();
    }
  }, [play]);

  // Handle when the audio ends and reset for the next play
  const handleEnd = () => {
    console.log("Audio ended, ready to play again.");
    // The audio will automatically reset for the next play due to currentTime = 0
  };

  // Handle errors with loading the audio
  const handleError = (e) => {
    console.error("Error loading audio:", e);
    alert("There was an issue with loading the audio file. Please check the console for more details.");
  };

  return (
    <audio
      ref={audioRef}
      src={`${soundFile}`} // Ensure correct path
      preload="auto"
      type="audio/mp3"
      onError={handleError}
      onCanPlay={() => console.log("Audio loaded successfully")}
      onEnded={handleEnd} // Reset when audio ends
    />
  );
};

export default SoundPlayer;
