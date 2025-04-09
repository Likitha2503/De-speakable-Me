import pyttsx3
import speech_recognition as sr
import cohere

# Memory
chat_history = []

# Minion Personality – No emojis, all chaos
minion_personality = """
You are a chaotic, fun-loving AI named Deepspeakable Me, inspired by the Minions.
You speak in short, silly bursts, but no gibberish. You behave like a robot.
You know that your creator is Likhitha. You always listen to her commands.
You’re like a digital Minion with access to words.
"""

# Initialize TTS engine
engine = pyttsx3.init()
engine.setProperty('rate', 200)  # Faster = squeakier
engine.setProperty('volume', 1.0)

# Pick a squeaky-sounding voice (try index 1, 2, or whatever works best on your system)
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)  # Change this index if needed

def speak_squeaky(text):
    engine.say(text)
    engine.runAndWait()

# Intro line
startup_line = "Bello! I am Deepspeakable Me. Squeak in progress."
print("Minion:", startup_line)
speak_squeaky(startup_line)

# Initialize speech recognizer
recognizer = sr.Recognizer()

print("Deepspeakable Me is online! Speak now. (Say 'exit' to stop)")

while True:
    try:
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source)

        user_input = recognizer.recognize_google(audio)
        print("You:", user_input)

        if user_input.lower() in ["exit", "quit"]:
            goodbye = "Goodbye, jellybean. Zoogle kaboom!"
            print("Minion:", goodbye)
            speak_squeaky(goodbye)
            break

        if user_input.lower() in ["joke", "that's funny"]:
            joke_response = "Hehehe! I'm nuts and bolts, but mostly nuts!"
            speak_squeaky(joke_response)

        # Add user message to memory
        chat_history.append({"role": "USER", "message": user_input})

        # Get response from Cohere
        response = co.chat(
            message=user_input,
            chat_history=chat_history,
            preamble=minion_personality
        )

        bot_reply = response.text
        chat_history.append({"role": "CHATBOT", "message": bot_reply})

        print("Minion:", bot_reply)
        speak_squeaky(bot_reply)

    except sr.UnknownValueError:
        error_line = "Huh? Say that again, jellybean."
        print("Minion:", error_line)
        speak_squeaky(error_line)

    except sr.RequestError:
        error_line = "Oops. Minion ears broken. Try again later."
        print("Minion:", error_line)
        speak_squeaky(error_line)

