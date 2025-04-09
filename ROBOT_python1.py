import cohere
import pyttsx3
import speech_recognition as sr
from playsound import playsound

# Initialize Cohere
co = cohere.Client("Did not share my personal API")  

import pyttsx3
import speech_recognition as sr
import cohere  # Make sure your Cohere client is properly initialized

# Memory
chat_history = []

# Minion Personality – No emojis, all chaos
minion_personality = """
You are a chaotic, fun-loving AI named Deepspeakable Me, inspired by the Minions.
You speak in short, silly bursts, but no gibberish, you behave like a robot, not too much gibberish
You know that your creator is Likhitha. You always listen to her commands.
You’re like a digital Minion with access to words.
"""

# Initialize TTS engine
engine = pyttsx3.init()
engine.setProperty('rate', 175)
engine.setProperty('volume', 1.0)
voices = engine.getProperty('voices')
if len(voices) > 1:
    engine.setProperty('voice', voices[1].id)

# Speak intro line
startup_line = "Bello, I am Deespeakable Me"
print("Minion:", startup_line)
engine.say(startup_line)
engine.runAndWait()

# Initialize STT recognizer
recognizer = sr.Recognizer()

print("Deepspeakable Me is online! Speak now. (Say 'exit' to stop)")

while True:
    try:
        # Capture voice input
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source)

        # Convert speech to text
        user_input = recognizer.recognize_google(audio)
        print("You:", user_input)

        if user_input.lower() in ["exit", "quit"]:
            goodbye = "Goodbye!"
            print("Minion:", goodbye)
            engine.say(goodbye)
            engine.runAndWait()
            break
        if user_input.lower() in [" joke", "That's Funny"]:
            engine.say(bot_reply)
            playsound(r"C:\Users\likit\Desktop\246 Robot\sounds\laugh.wav")

        # Add to memory
        chat_history.append({"role": "USER", "message": user_input})

        # Get bot reply from Cohere
        response = co.chat(
            message=user_input,
            chat_history=chat_history,
            preamble=minion_personality
        )

        bot_reply = response.text
        chat_history.append({"role": "CHATBOT", "message": bot_reply})

        print("Minion:", bot_reply)
        engine.say(bot_reply)
        engine.runAndWait()

    except sr.UnknownValueError:
        error_line = "Bap! Say that again, jellybean."
        print("Minion:", error_line)
        engine.say(error_line)
        engine.runAndWait()

    except sr.RequestError:
        error_line = "Oops. Minion ears broken. Try again later."
        print("Minion:", error_line)
        engine.say(error_line)
        engine.runAndWait()
