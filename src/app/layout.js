import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

export const metadata = {
  title: "Sentinel AI",
  description: "AI-powered cybersecurity platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
