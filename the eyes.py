import board, busio
from adafruit_ssd1306 import SSD1306_I2C
from PIL import Image, ImageDraw

i2c = busio.I2C(board.SCL, board.SDA)
oled = SSD1306_I2C(128, 64, i2c)

# Blank canvas
image = Image.new("1", (128, 64))
draw = ImageDraw.Draw(image)

# Draw a happy eye (circle with highlight)
draw.ellipse((30, 10, 98, 60), outline=255, fill=0)  # outer eye
draw.ellipse((50, 25, 80, 55), fill=255)             # pupil
draw.ellipse((55, 30, 62, 37), fill=0)               # reflection dot

oled.fill(0)
oled.image(image)
oled.show()
