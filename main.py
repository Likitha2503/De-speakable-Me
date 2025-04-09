# main.py

from ROBOT_python1 import ask_monkey, listen_to_user, speak_text
from facerecognition import detect_faces
from objectrecognition import detect_objects 

import cv2
import time

def main():
    print("🐒 MonkeyBot has booted up!")

    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("❌ Could not open webcam")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            continue

        # 🧑 Face Detection
        if detect_faces(frame):
            speak_text("Ooo! I see a human face! Boing!")

        # 📦 Object Detection
        objects = detect_objects(frame)
        if "cell phone" in objects:
            speak_text("Yummm! Is that a phone? 🍌")

        # 🎤 Voice Input
        user_input = listen_to_user()
        if user_input:
            response = ask_monkey(user_input)
            speak_text(response)

        # Show camera feed (optional)
        cv2.imshow("MonkeyCam", frame)

        # Exit on 'q' press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            speak_text("Bye bye, Captain Banana!")
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
