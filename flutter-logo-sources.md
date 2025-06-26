# High-Quality Flutter Logo Options

These are official, high-resolution Flutter logo sources that will look great on your portfolio:

## Official Flutter Logo Sources

1. **Flutter Official Branding Page**:
   - Visit: https://flutter.dev/brand
   - This page contains the official Flutter logos in various formats and resolutions

2. **Direct Logo URLs**:
   - SVG Logo (Highest Quality): https://storage.googleapis.com/cms-storage-bucket/ec64036b4eacc9f3fd73.svg
   - PNG Logo (2400x2400px): https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a4b19b3a1.png
   - Flutter Logo with Text: https://storage.googleapis.com/cms-storage-bucket/6e19fee6b47b36ca613f.png

## Installation Instructions

1. Download your preferred logo (SVG recommended for best quality)
2. Save it to `/home/prajwal/Documents/vscode-portfolio/public/flutter.png`
3. If you download an SVG, convert it to PNG first using:
   ```
   inkscape -w 1200 -h 1200 flutter_logo.svg -o /home/prajwal/Documents/vscode-portfolio/public/flutter.png
   ```
   (Install Inkscape if needed: `sudo apt install inkscape`)

4. For a quick solution, run this command:
   ```
   curl -o /home/prajwal/Documents/vscode-portfolio/public/flutter.png https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a4b19b3a1.png
   ```

After replacing the image, restart your development server to see the changes.
