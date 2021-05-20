export default function WpPostEndpoint({ apiData }) {
    return (
      <>
          {apiData.map((apiDataPost) => (
            <>{apiDataPost.slug}</>
          )
          )}
      </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://exame.com/wp-json/wp/v2/posts`);
    const data = await res.json();
    console.log(data);
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        apiData: data
      },
    }
}