import { Helmet } from "react-helmet-async";
import businessJson from "../components/seo/BusinessJsonLd.json";
import faqJson from "../components/seo/FaqJsonLd.json";

export const SeoJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(businessJson)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(faqJson)}
    </script>
  </Helmet>
);
