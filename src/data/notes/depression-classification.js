export default {
  id: 3,
  title: "Depression Classification using Deep Learning Models",
  slug: "depression-classification-deep-learning",
  category: "NLP & Mental Health",
  tags: ["nlp", "lstm", "rnn", "sentiment-analysis", "mental-health"],
  date: "2025-06-01",
  excerpt: "Designed hybrid LSTM-RNN architecture achieving 78.77% accuracy on Sentiment140 dataset for depression detection from text data.",
  content: `
# Depression Classification using Deep Learning Models

**Duration**: Jun 2025 - Oct 2025

## Overview

Designed and trained a **hybrid LSTM-RNN architecture** on the Sentiment140 dataset, achieving a high **78.77% accuracy** for depression classification from textual data.

## Model Architecture

\`\`\`python
from tensorflow.keras import layers, models

def build_hybrid_model(vocab_size, embedding_dim=128):
    model = models.Sequential([
        layers.Embedding(vocab_size, embedding_dim),
        layers.LSTM(128, return_sequences=True),
        layers.RNN(64),
        layers.Dense(32, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(1, activation='sigmoid')
    ])
    return model
\`\`\`

## Key Features

- **Hybrid Architecture**: Combined LSTM and RNN for sequential pattern recognition
- **Dataset**: Sentiment140 (large-scale Twitter sentiment data)
- **Accuracy**: 78.77% on test set
- **Application**: Mental health monitoring from social media text

## Technical Approach

1. **Preprocessing**: Text cleaning, tokenization, padding
2. **Feature Learning**: LSTM layers capture long-term dependencies
3. **Classification**: RNN layers for final prediction
4. **Regularization**: Dropout to prevent overfitting

## Research Significance

This work contributes to:
- Early detection of depression indicators
- NLP applications in mental health
- Understanding sentiment patterns in social media

---

**STATUS**: COMPLETED | **ACCURACY**: 78.77% | **DATASET**: SENTIMENT140
  `
};
