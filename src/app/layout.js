import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

export const metadata = {
  title: "ZDS Secure AI",
  description: "Next Generation AI Cybersecurity Platform",

  icons: {
    icon: "/zds.png",
    shortcut: "/zds.png",
    apple: "/zds.png",
  },
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
