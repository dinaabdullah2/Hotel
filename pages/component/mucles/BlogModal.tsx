"use client";
import { IconLayoutSidebarRight } from '@tabler/icons-react';
import { useState } from 'react';
import FilterCustom from '../Search/FilterCustom';
import SideNavBlog from './SideNavBlog';
import SideBar from '../template/SideBar';
import SerachComponent from './SearchComponent';
import SearchInput from '../atoms/SearchInput';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from "./../../../public/assets/facebook.svg"

import youtubeIcon from "./../../../public/assets/youtube.svg"

export const BlogModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button className="inline-flex items-center p-2 mr-2 text-sm font-medium text-center text-white rounded-lg  bg-bg_banfsgy hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy" 
      onClick={() => setIsOpen(!isOpen)}
    >
        <div className="flex flex-col items-center justify-center ">
        <IconLayoutSidebarRight />
        <p className="text-white "></p>
        </div>
    </button>

    <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
    
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
                    {/* <Link href="/as"><Image src={linkdlnIcon.src} className="p-1" height={40} width={40} alt="linkdlnIcon" /></Link> */}
                    <Link href="/as"><Image src={youtubeIcon.src} className="p-1" height={40} width={40} alt="youtubeIcon" /></Link>
                  </div>
              </div>
          
    </SideBar>
</>
  )
}
export default BlogModal
