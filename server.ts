import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- SMS Logic (CoolSMS) ---
  const sendSMS = async (to: string, text: string) => {
    const apiKey = process.env.COOLSMS_API_KEY;
    const apiSecret = process.env.COOLSMS_API_SECRET;
    const sender = process.env.COOLSMS_SENDER_NUMBER;

    if (!apiKey || !apiSecret || !sender) {
      console.warn("SMS API keys or sender number missing. Skipping SMS.");
      return;
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const date = new Date().toISOString();
    const data = date + salt;
    const signature = crypto
      .createHmac("sha256", apiSecret)
      .update(data)
      .digest("hex");

    const authHeader = `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;

    try {
      await axios.post(
        "https://api.coolsms.co.kr/messages/v4/send",
        {
          message: {
            to,
            from: sender,
            text,
          },
        },
        {
          headers: {
            Authorization: authHeader,
          },
        }
      );
      console.log(`SMS sent to ${to}`);
    } catch (error: any) {
      console.error("SMS sending failed:", error.response?.data || error.message);
    }
  };

  // --- API Routes ---
  app.post("/api/submit", async (req, res) => {
    const { name, phone } = req.body;

    // 1. Send to Formspree (Optional, but keeps your existing lead management)
    if (process.env.FORMSPREE_URL) {
      try {
        await axios.post(process.env.FORMSPREE_URL, req.body, {
          headers: { Accept: "application/json" },
        });
      } catch (error) {
        console.error("Formspree submission failed:", error);
      }
    }

    // 2. Send SMS to Customer
    if (phone) {
      const message = `[이편한세상 번영로 리더스포레] 안녕하세요 ${name}님, 상담 신청이 정상 접수되었습니다. 곧 전문 상담사가 연락드리겠습니다.`;
      await sendSMS(phone.replace(/-/g, ""), message);
    }

    res.json({ success: true });
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
