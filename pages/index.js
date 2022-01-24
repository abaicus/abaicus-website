import Link from 'next/link'
import ContentPage from "../components/content/ContentPage";
import {MicrophoneIcon} from "@heroicons/react/outline";
export default function IndexPage() {
  return (
    <div className="flex flex-col flex-1">
        <ContentPage title={"Coming soon"} byline={"when i decide to work on this it will be..."} subtitle={'PS: I never have time'}>
            <h3>See you soon</h3>
        </ContentPage>

    </div>
  )
}

