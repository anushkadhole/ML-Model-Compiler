# Full-Stack ML Model Optimization Platform

![Screenshot (380)](https://github.com/user-attachments/assets/760b33b8-4810-4e33-a629-ed203933ee9d)

![Screenshot (381)](https://github.com/user-attachments/assets/69079894-7109-4088-8606-d919d4360fb7)

This system optimizes ML models using TVM/XLA/LLVM and deploys them with Flask + React.js on AWS.

# ML Model Compiler & Optimization Platform

A full-stack platform that optimizes deep learning models using compiler-level tools like **TVM**, **XLA**, and **LLVM**, and deploys them on cloud-native environments (e.g., AWS Graviton, Lambda, EC2). This project aligns with compiler design, compute graph optimization, and system performance — perfect for ML infra, cloud, and compilers.

### ⚙️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML/CSS
- **Backend:** Flask (Python), REST API, Docker
- **Compiler & ML Tools:** TensorFlow XLA, PyTorch, TVM, LLVM, ONNX
- **Database:** PostgreSQL (for model/job tracking)
- **DevOps:** Docker, GitHub Actions CI
- **Cloud-ready:** AWS Lambda (serverless), EC2 (Graviton-compatible)

### 🚀 Features

- ✅ Upload ML models (ONNX, PyTorch)
- ✅ Choose target: CPU / GPU / TPU
- ✅ Run graph-level optimization (TVM AutoScheduler, XLA fusion)
- ✅ Visualize improvements in latency, memory, IR transformation
- ✅ See IR output with **LLVM IR viewer** (coming soon)
- ✅ Store results in PostgreSQL, view optimization history
- ✅ Ready to deploy on AWS or edge devices

---

### 📦 Project Structure

ML-Model-Compiler/ ├── backend/ # Flask backend │ ├── app/ # Routes, utils │ ├── tests/ # Unit tests │ └── requirements.txt ├── frontend/ # React.js frontend │ ├── public/ │ └── src/ ├── models/ # Uploaded models ├── optimizations/ # Optimized output logs ├── .github/ # GitHub Actions CI ├── scripts/ # AWS deploy scripts └── README.md
