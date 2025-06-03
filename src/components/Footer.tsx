// import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#ddd",
      }}
    >
      Check out my Music{" "}
      <span role="img" aria-label="hand pointing right" style={{ margin: "0 6px" }}>
        👉
      </span>
      <a
        href="https://www.youtube.com/@ashade_darker"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "4px", verticalAlign: "middle", display: "inline-block" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 48 48"
          style={{ verticalAlign: "middle" }}
        >
          <rect width="48" height="48" rx="10" fill="#FF0000" />
          <polygon points="19,16 19,32 33,24" fill="#fff" />
        </svg>
      </a>
      {/* Instagram logo and link */}
      <a
        href="https://www.instagram.com/ashade_darker"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "16px", verticalAlign: "middle", display: "inline-block" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 448 512"
          style={{ verticalAlign: "middle" }}
        >
          <linearGradient id="insta-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f58529" />
            <stop offset="50%" stopColor="#dd2a7b" />
            <stop offset="100%" stopColor="#515bd4" />
          </linearGradient>
          <rect width="448" height="512" rx="90" fill="url(#insta-gradient)" />
          <circle cx="224" cy="256" r="80" fill="#fff" />
          <circle cx="224" cy="256" r="56" fill="url(#insta-gradient)" />
          <circle cx="340" cy="132" r="20" fill="#fff" />
        </svg>
      </a>
    </footer>
  );
}

