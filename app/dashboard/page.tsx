"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    // dummy transcript for now (API will come later)
    setTranscript("This is a sample transcript from uploaded audio...");
  };

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <h1>AI Audio Transcriber</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Upload Box */}
      <div style={styles.card}>
        <h2>Upload Audio</h2>

        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <br /><br />

        <button style={styles.uploadBtn} onClick={handleUpload}>
          Transcribe
        </button>
      </div>

      {/* Transcript Box */}
      <div style={styles.card}>
        <h2>Transcript</h2>
        <p>{transcript || "No transcript yet..."}</p>
      </div>
    </div>
  );
}

/* Simple styling */
const styles: any = {
  container: {
    padding: 30,
    fontFamily: "Arial",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  logoutBtn: {
    padding: "8px 15px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  uploadBtn: {
    padding: "10px 15px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
  },
};