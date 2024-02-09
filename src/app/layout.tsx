import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/theme/theme';
import ThemeRegistry from "@/utils/theme/themeRegistry";
import "@/utils/theme/styles/globals.css";

export const metadata: Metadata = {
  title: "Bime Bazar",
  description: "Test Project",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <ThemeRegistry>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
