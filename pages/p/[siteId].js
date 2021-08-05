import { Box } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { getAllFeedback, getAllSites } from "../../lib/db-admin";
export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}
export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
const FeedbackPage = ({ initialFeedback }) => {
  const router = useRouter();
  return <Box>Site ID: ${router.query.siteId}</Box>;
};
export default FeedbackPage;
