import torch  
import cv2
import pyttsx3

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5m')

# Start webcam
cap = cv2.VideoCapture(0)

# Initialize TTS
engine = pyttsx3.init()
engine.setProperty('rate', 175)
spoken_labels = set()  # To avoid repeating the same object

print("🐒 Monkey is watching and talking! Press 'q' to quit.")

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Detect objects
    results = model(frame)
    labels = results.pandas().xyxy[0]['name'].tolist()

    # Draw results
    annotated_frame = results.render()[0]

    # Check and say detected objects
    for label in labels:
        if label not in spoken_labels:
            print(f"👁️ I see a {label}!")
            engine.say(f"I see a {label}!")
            engine.runAndWait()
            spoken_labels.add(label)

    # Show annotated frame
    cv2.imshow('Monkey Object Detector 🐒📦', annotated_frame)

    # Quit on 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
