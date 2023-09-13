import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TestComponent } from "ui";

function Page() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>Test Page</h1>
      <h2>{t("test")}</h2>
      <TestComponent />
    </div>
  );
}

export default Page;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
