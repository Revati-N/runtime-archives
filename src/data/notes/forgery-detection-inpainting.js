// 1. Forgery Detection System
export default {
  id: 1,
  title: "Forgery Detection System via Inpainting Techniques",
  slug: "forgery-detection-inpainting",
  category: "Computer Vision",
  tags: ["deep-learning", "computer-vision", "forgery-detection", "inpainting", "streamlit"],
  date: "2025-02-01",
  excerpt: "Built a computer vision system achieving 95.52% accuracy in forgery detection using image inpainting techniques and deployed with Streamlit interface.",
  content: `
# Forgery Detection System via Inpainting Techniques

**Duration**: Feb 2025 - Apr 2025  
**Role**: Deep Learning Intern

## Overview

Independently developed a computer vision system for forgery detection, achieving **95.52% accuracy** by leveraging a large publicly available image dataset, using image inpainting techniques on it and displaying the confidence score.

## Key Achievements

- Developed end-to-end forgery detection pipeline using deep learning
- Achieved 95.52% accuracy on validation set
- Implemented image inpainting techniques for enhanced detection
- Deployed real-time Streamlit interface for user interaction

## Technical Implementation

\`\`\`python
# Core detection pipeline
def detect_forgery(image):
    preprocessed = apply_inpainting(image)
    confidence = model.predict(preprocessed)
    return confidence, visualize_results(image, confidence)
\`\`\`

## Deployment & Impact

- Deployed a **Streamlit interface** for real-time results
- Showcased the system at an **International Conference**
- Demonstrated practical application of inpainting in forensic analysis

## Tech Stack

- **Deep Learning**: CNNs, Image Inpainting
- **Dataset**: Large-scale publicly available image dataset
- **Deployment**: Streamlit
- **Visualization**: Confidence score display

---

**STATUS**: DEPLOYED | **ACCURACY**: 95.52% | **CONFERENCE**: PRESENTED
  `
};