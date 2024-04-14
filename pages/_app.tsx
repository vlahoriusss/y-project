import { AppProps } from "next/app";

export default function App({ pageProps }: AppProps) {
  const { error } = pageProps;

  return (
    <div>
        <div>There's something wrong with your Proxima account, check back soon</div>
    </div>
  );
}
