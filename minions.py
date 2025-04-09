import os

def minion_speak(text):
    os.system(f'espeak -v en "{text}" -s 120 -p 90')

minion_speak("Hellooo! Time for bananas and slow talking!")

