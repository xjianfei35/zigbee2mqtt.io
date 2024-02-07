from transparent_background import Remover
from PIL import Image
from pathlib import Path

remover = Remover(mode='fast')

for file in Path('public/images/devices').glob('*.jpg'):
    img = Image.open(file).convert('RGB')
    if img.width == 150:
        out = remover.process(img, type='green')
        target = f"{file.parent}/{file.name.replace('.jpg', '')}.png"
        out.save(target)
