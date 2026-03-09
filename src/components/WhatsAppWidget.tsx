'use client';
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const phoneNumber = "447795565904";
  const defaultMessage = "Hi , I need some help of my tax affairs, can I arrange a call please ?";

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    chatPreview: {
      marginBottom: "16px",
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      border: "1px solid #e5e7eb",
      padding: "24px",
      width: "320px",
      transform: isOpen
        ? "translateY(0) scale(1)"
        : "translateY(20px) scale(0.95)",
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? "visible" : "hidden",
      transition: "all 0.3s ease-out",
      pointerEvents: isOpen ? "auto" : "none",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    avatar: {
      width: "48px",
      height: "48px",
      backgroundColor: "#25D366",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    supportTitle: {
      fontWeight: 600,
      color: "#1f2937",
      fontSize: "18px",
      margin: "0",
    },
    onlineStatus: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "2px",
    },
    onlineDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#25D366",
      borderRadius: "50%",
      animation: "pulse 2s infinite",
    },
    onlineText: {
      fontSize: "14px",
      color: "#6b7280",
      margin: "0",
    },
    closeButton: {
      padding: "8px",
      borderRadius: "50%",
      color: "#9ca3af",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s",
      outline: "none",
    },
    messageSection: {
      marginBottom: "20px",
    },
    messageBubble: {
      backgroundColor: "#f9fafb",
      borderRadius: "24px 24px 24px 8px",
      padding: "16px",
      marginBottom: "12px",
      border: "1px solid #f3f4f6",
    },
    messageText: {
      fontSize: "14px",
      color: "#374751",
      margin: "0",
      lineHeight: "1.5",
    },
    replyTime: {
      fontSize: "12px",
      color: "#9ca3af",
      paddingLeft: "8px",
      margin: "0",
    },
    startChatButton: {
      width: "100%",
      color: "#ffffff",
      padding: "16px 24px",
      borderRadius: "16px",
      fontWeight: 500,
      fontSize: "16px",
      transition: "all 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      boxShadow: "0 10px 15px -3px rgba(37, 211, 102, 0.3)",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#25D366",
      outline: "none",
      transform: "scale(1)",
    },
    mainButtonContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mainButton: {
      backgroundColor: "#25D366",
      borderRadius: "50%",
      width: "70px",
      height: "70px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      padding: "23px",
    },
    tooltip: {
      position: "absolute",
      right: "calc(100% + 16px)",
      backgroundColor: "#1f2937",
      color: "#ffffff",
      padding: "12px 16px",
      borderRadius: "16px",
      fontSize: "14px",
      whiteSpace: "nowrap",
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s",
      pointerEvents: "none",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    tooltipArrow: {
      position: "absolute",
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      width: "0",
      height: "0",
      borderLeft: "8px solid #1f2937",
      borderTop: "4px solid transparent",
      borderBottom: "4px solid transparent",
    },
    notificationBadge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      width: "24px",
      height: "24px",
      backgroundColor: "#ef4444",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#ffffff",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      zIndex: 11,
    },
  };

  const keyframes = `
    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
  `;

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.chatPreview}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.avatar}>
                <MessageCircle
                  style={{ width: "24px", height: "24px", color: "#ffffff" }}
                />
              </div>
              <div>
                <h4 style={styles.supportTitle}>Diginext Support</h4>
                <div style={styles.onlineStatus}>
                  <div style={styles.onlineDot}></div>
                  <p style={styles.onlineText}>Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={styles.closeButton}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = "#f3f4f6";
                target.style.color = "#6b7280";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = "transparent";
                target.style.color = "#9ca3af";
              }}
            >
              <X style={{ width: "20px", height: "20px" }} />
            </button>
          </div>

          <div style={styles.messageSection}>
            <div style={styles.messageBubble}>
              <p style={styles.messageText}>
                Hi! 👋 How can we help you today?
              </p>
            </div>
            <p style={styles.replyTime}>Typically replies instantly</p>
          </div>

          <button
            onClick={openWhatsApp}
            style={styles.startChatButton}
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "#128C7E";
              target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "#25D366";
              target.style.transform = "scale(1)";
            }}
          >
            <MessageCircle style={{ width: "20px", height: "20px" }} />
            Start Chat
          </button>
        </div>

        <div style={styles.mainButtonContainer}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={styles.mainButton}
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle
              style={{ width: "25px", height: "25px", color: "#ffffff" }}
            />
          </button>

          <div style={styles.tooltip} data-tooltip>
            Chat with us on WhatsApp
            <div style={styles.tooltipArrow}></div>
          </div>

          <div style={styles.notificationBadge}>1</div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
