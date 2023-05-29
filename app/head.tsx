const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>NextJs Head | Cool Article!</title>
      <meta
        name="description"
        content="NextJs Head, a cool article     page for our nextjs Head example site."
      />
      <link rel="canonical" href="https://yoursite.com/cool-article" />
      <meta name="viewport" content="width=device-width,   initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Your Site Name" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="NextJs Head, a cool article page for our nextjs Head example site."
      />
      <meta
        property="og:image"
        content="https://yoursite.com/images/logo.png"
      />
      <meta property="og:url" content="undefined/cool-article" />
    </>
  );
};

export default Head;
