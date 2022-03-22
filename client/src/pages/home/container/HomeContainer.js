import HomeChildrenRender from "../childrens/HomeChildrenRender";
import { Routes, Route } from "react-router-dom";
import CategoryList from "../../../components/Category/List/CategoryList";
import ArchivesList from "../../../components/Archives/List/ArchivesList";
import DetailPostContainer from "../../../components/Detail/Post/Container/DetailPostContainer";
import SearchContainer from "../../search/container/SearchContainer";
import AuthorContainer from "../../../components/Author/AuthorContainer";

function HomeContainer() {
  return (
    <div className="min-h-screen mt-[60px] w-[70%]  ">
      <Routes>
        <Route path="/" element={<HomeChildrenRender />} />
        <Route path="/category/:typeCategory" element={<CategoryList />} />
        <Route path="/archives/:typeArchives" element={<ArchivesList />} />
        <Route path="/detail/:id" element={<DetailPostContainer />} />
        <Route path="/search/:title" element={<SearchContainer />} />
        <Route path="/author" element={<AuthorContainer />} />
      </Routes>
    </div>
  );
}

export default HomeContainer;
