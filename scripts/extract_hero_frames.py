import os
import subprocess
import sys

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    video_path = os.path.join(base_dir, "public", "videos", "hero-reel.mp4")
    out_dir = os.path.join(base_dir, "public", "hero-frames")

    if not os.path.exists(video_path):
        print(f"Error: Video not found at {video_path}")
        sys.exit(1)

    os.makedirs(out_dir, exist_ok=True)

    cmd = [
        "ffmpeg",
        "-y",
        "-i", video_path,
        "-vf", "scale=1920:-1",
        "-c:v", "libwebp",
        "-quality", "80",
        os.path.join(out_dir, "frame-%04d.webp")
    ]

    print(f"Extracting WebP frames from {video_path} into {out_dir}...")
    res = subprocess.run(cmd)
    if res.returncode == 0:
        print("Success! Hero WebP frames extracted cleanly.")
    else:
        print(f"Extraction failed with exit code {res.returncode}")

if __name__ == "__main__":
    main()
