import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "~/styles/spacing.css";
import { ThemeProvider } from "@material-tailwind/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <div className="relative flex flex-col min-h-screen layout-mobile bg-white">
          {/* <div> */}
          <Component {...pageProps} />
          {/* </div> */}
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
