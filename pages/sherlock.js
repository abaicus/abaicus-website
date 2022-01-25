import Sherlock from "../components/sherlock/app";
import ContentPage from "../components/content/ContentPage";

export default function () {
  return (
    <ContentPage
      pageClass="bg-gray-100 dark:bg-zinc-900"
      title={"Sherlock Holmes"}
      byline="221b Baker Street"
    >
      <div>
        {typeof window !== "undefined" ? <Sherlock /> : <p>Loading...</p>}
      </div>
    </ContentPage>
  );
}
