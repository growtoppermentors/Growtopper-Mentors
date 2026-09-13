---
description: Image processing guidelines for blog graphics
trigger: always_on
---

# Blog Image Guidelines

When the user asks you to add or process a new image for the blog:
1. Copy the uploaded image to the \public/images/\ folder.
2. ALWAYS use \sharp\ via a local Node script to compress the image below 300KB (WhatsApp limits Open Graph previews to 300KB).
3. Update the blog post config to point to the new image.
4. Ensure the blog list and blog post containers continue to use the strict \spect-[1200/630]\ ratio to prevent cropping.
