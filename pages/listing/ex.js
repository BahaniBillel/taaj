function Listing({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
}

export default Listing;

export async function getServerSideProps(context) {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  const { params } = context;

  const id = params.id;
  const page = products.find((x) => x.title === id);
  if (!page) return { notFound: true };

  return {
    props: { page },
  };
}
