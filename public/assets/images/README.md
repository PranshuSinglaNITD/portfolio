# Asset Management Guide

Welcome to the asset management folder! This is where you should upload all images, icons, and PDFs for your portfolio.

## Folder Structure
- `/images/`: Drop your project screenshots, profile pictures, and any other visual assets here.
- `/resume/`: Drop your `resume.pdf` here so users can download it.

## How to Use Images in Your Code

In Next.js, files inside the `public` directory can be accessed directly from the root path (`/`).

**Example: Using an image in a Next.js `Image` component:**

```tsx
import Image from "next/image";

export function Example() {
  return (
    <Image 
      src="/assets/images/my-project.png" // The path starts with /assets/...
      alt="Project Screenshot"
      width={800}
      height={600}
    />
  )
}
```

**Example: Updating `constants/data.ts`**

When you upload a new image for a project, just update the data file:

```ts
export const projects = [
  {
    title: "ProTrack",
    image: "/assets/images/protrack-preview.png", // <--- Add your path here!
    // ...
  }
]
```

## Supported Formats
- WebP (Recommended for performance)
- PNG, JPG, SVG
- PDF (for resumes)
