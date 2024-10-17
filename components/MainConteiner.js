import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`next js, learn ${keywords}`}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href="/" name={"main"} />
        <A href="/users" name={"users"} />
      </div>
      <div>{children}</div>
      <style jsx>
          {`
            .navbar {
              background: tomato;
              padding: 15px;
            }
          `}
        </style>
    </>
  );
};

export default MainContainer;
