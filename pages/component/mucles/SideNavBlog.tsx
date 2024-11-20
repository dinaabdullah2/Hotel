
import SearchInput from "../atoms/SearchInput"
import facebookIcon from "./../../../public/assets/facebook.svg"
import youtubeIcon from "./../../../public/assets/youtube.svg"
import Image from "next/image"
import Link from "next/link"
import SerachComponent from "./SearchComponent"

export const SideNavBlog = () => {
  return (
        <>
        <div className="mt-2 mb-5">
            <SerachComponent width='lg:w-[100%]'/>
        </div>
        <div className="mb-5 mt-5">
            <SearchInput  />
        </div>
        <div className="mt-4 mb-4">
            <h6 className="mt-4 mb-2 font-bold leading-6 text-gray-900 ">
               Categories 
            </h6>
            <div className="mt-4 mb-4">
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#javascript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#javs</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#jSDSFSDFDSFDGDFGs</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#javt</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#jcript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#jaddasdavacript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border bg- border-neutral-300 hover:border-bg_banfsgy rounded-2xl">#js</span></Link>
            </div>
        </div>
        <div className="mt-4 mb-4">
            <h6 className="mt-4 mb-2 font-bold leading-6 text-gray-900 ">
               Popular Tags 
            </h6>
            <div className="">
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#javascript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#javs</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#jSDSFSDFDSFDGDFGs</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#javt</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#jcript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#jaddasdavacript</span></Link>
            <Link href=""><span className="inline-block p-2 mt-1 mb-1 ml-1 mr-1 text-sm border rounded-md bg- bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy">#js</span></Link>
            </div>
        </div>
        <div className="mt-4 mb-4">
            <h6 className="mt-4 mb-2 font-bold leading-6 text-gray-900 ">
                Follow Us For The lastest news
            </h6>
            <div className="flex flex-row items-center">
              <Link href="/as"><Image src={facebookIcon.src} className="p-1" height={40} width={40} alt="facebookIcon" /> </Link>
               <Link href="/as"><Image src={youtubeIcon.src} className="p-1" height={40} width={40} alt="youtubeIcon" /></Link>
            </div>
        </div>
    </>
    
  )
}
export default SideNavBlog
