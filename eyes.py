import time
import board
import busio
import random
from adafruit_ssd1306 import SSD1306_I2C
from PIL import Image, ImageDraw

# Initialize I2C & OLED
i2c = busio.I2C(board.SCL, board.SDA)
display = SSD1306_I2C(128, 64, i2c)

# Clear screen
display.fill(0)
display.show()

# Image canvas
image = Image.new("1", (128, 64))
draw = ImageDraw.Draw(image)

def show_image():
    display.image(image)
    display.show()

# === Wake-up animation ===
def wake_up():
    # Sleepy eyes
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.ellipse((30, 20, 50, 40), fill=1)  # Left eye closed
    draw.ellipse((78, 20, 98, 40), fill=1)  # Right eye closed
    show_image()
    time.sleep(1)

    # Blink open
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.ellipse((30, 10, 50, 30), outline=1, fill=0)
    draw.ellipse((78, 10, 98, 30), outline=1, fill=0)
    draw.ellipse((38, 18, 42, 22), fill=1)  # Pupils
    draw.ellipse((86, 18, 90, 22), fill=1)
    show_image()
    time.sleep(1)

    # Wake face
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.ellipse((30, 10, 50, 30), outline=1)
    draw.ellipse((78, 10, 98, 30), outline=1)
    draw.ellipse((38, 18, 42, 22), fill=1)
    draw.ellipse((86, 18, 90, 22), fill=1)
    draw.arc((40, 40, 88, 60), start=0, end=180, fill=1)  # smile
    show_image()
    time.sleep(2)

# === Expressions ===
def expression_happy():
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.ellipse((30, 10, 50, 30), outline=1)
    draw.ellipse((78, 10, 98, 30), outline=1)
    draw.ellipse((38, 18, 42, 22), fill=1)
    draw.ellipse((86, 18, 90, 22), fill=1)
    draw.arc((40, 40, 88, 60), start=0, end=180, fill=1)
    show_image()

def expression_angry():
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.line((30, 10, 50, 20), fill=1)  # Left brow
    draw.line((78, 20, 98, 10), fill=1)  # Right brow
    draw.ellipse((30, 20, 50, 40), outline=1)
    draw.ellipse((78, 20, 98, 40), outline=1)
    draw.ellipse((38, 28, 42, 32), fill=1)
    draw.ellipse((86, 28, 90, 32), fill=1)
    show_image()

def expression_surprised():
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.ellipse((30, 10, 50, 30), outline=1)
    draw.ellipse((78, 10, 98, 30), outline=1)
    draw.ellipse((38, 18, 42, 22), fill=1)
    draw.ellipse((86, 18, 90, 22), fill=1)
    draw.ellipse((60, 40, 68, 50), outline=1)  # small O mouth
    show_image()

def expression_sleepy():
    draw.rectangle((0, 0, 128, 64), fill=0)
    draw.arc((30, 20, 50, 40), start=0, end=180, fill=1)
    draw.arc((78, 20, 98, 40), start=0, end=180, fill=1)
    show_image()

# === Expression Cycle ===
expressions = [expression_happy, expression_angry, expression_surprised, expression_sleepy]

# === Run everything ===
wake_up()

while True:
    random.choice(expressions)()
    time.sleep(5)
