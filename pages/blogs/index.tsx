"use client";
import useFetch from "@/hooks/useFetch";
import PaginationComponent from "../component/atoms/PaginationComponent";
import BlogCardPage from "../component/mucles/BlogCardPage";
import BlogModal from "../component/mucles/BlogModal";
import SideNavBlog from "../component/mucles/SideNavBlog";

export default function BlogsMain() {
  const { data: Blogs } = useFetch<any>({
    endpoint: `api/section/blog`,
    queryKey: [`All-Blogs-page`],
  });

  return (
    <div className="lg:p-10 p-5 ">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h2 className="mt-2 text-2xl font-medium text-stone-800">
            About RateHawk
          </h2>
        </div>
        <div className="lg:hidden md:block sm:block ">
          <BlogModal />
        </div>
      </div>

      <div className="grid mt-3 mb-2 lg:grid-cols-12 lg:gap-10 sm:grid-cols-1 md:gap-0 sm:gap-0 ">
        <div className="mb-3 lg:col-span-9 md:col-span-9 sm:col-span-12 ">
          <div className="grid mt-3 mb-5 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 lg:gap-6 md:gap-3 sm:gap-0">
            <BlogCardPage Blogs={Blogs} />
          </div>
          <div className="pt-5 mt-3">
            <PaginationComponent />
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-3 sm:col-span-1 lg:block md:hidden sm:hidden max-sm:hidden">
          <SideNavBlog />
        </div>
      </div>
    </div>
  );
}
