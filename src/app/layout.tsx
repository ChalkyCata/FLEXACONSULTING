import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flexa Consulting | IT Support & Social Media Management",
  description:
    "Flexa Consulting offers freelance IT support and social media management services, tailored to each client.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Start of ChatBot (www.chatbot.com) code */}
        <Script
          id="chatbot-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "3422ad48-387c-4aad-923f-736bbad32b73";
              window.__ow.template_id = "201c39e3-1560-4d6f-9539-fd8336720eb7";
              window.__ow.integration_name = "manual_settings";
              window.__ow.product_name = "chatbot";
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
            `,
          }}
        />
        <noscript>
          You need to{" "}
          <a
            href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{" "}
          in order to use the AI chatbot tool powered by{" "}
          <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">
            ChatBot
          </a>
        </noscript>
        {/* End of ChatBot code */}
      </body>
    </html>
  );
}
