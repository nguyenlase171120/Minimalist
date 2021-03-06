import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SideBarChildren() {
  const [listImageInsta, setListImageInsta] = useState(() => {
    return [
      {
        id: 1,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2021/12/dscf8381.jpg?w=1024",
        link_instagram:
          "https://www.instagram.com/accounts/login/?next=/p/Ca4G9XJrcoC/",
      },
      {
        id: 2,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2021/06/dscf6894.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CatT_77rlY3/",
      },
      {
        id: 3,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2021/01/dscf3847-2.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CZ56_WoLoIW/",
      },
      {
        id: 4,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2021/01/u30b9u30afu30eau30fcu30f3u30b7u30e7u30c3u30c8-2021-01-03-134056.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CZjx23LvDq_/",
      },
      {
        id: 5,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2020/11/dscf2394.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CZEuI4rPB52/",
      },
      {
        id: 6,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2020/11/dscf1832.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CZBM80NLVCS/",
      },
      {
        id: 7,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2020/08/dscf9700.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CYs4lK7rgdo/",
      },
      {
        id: 8,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2020/10/dscf0984-1.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CYYuApNLFdm/",
      },
      {
        id: 9,
        link_image:
          "https://thehanoichamomile.files.wordpress.com/2020/09/dscf0314.jpg?w=1024",
        link_instagram: "https://www.instagram.com/p/CYTmwJLPB5q/",
      },
    ];
  });
  const navigate = useNavigate();

  const [keySearch, setKeySearch] = useState("");

  const handleSearch = () => {
    setKeySearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/search/${keySearch}`);
  };

  return (
    <div>
      <div className="flex items-center relative outline-none mb-4 w-full">
        <input
          type="text"
          onChange={(e) => setKeySearch(e.target.value)}
          className="border-2 flex justify-start  border-black py-1 w-[250px] px-1 focus:outline-none focus:border-2 focus:border-[#D8B975]"
          value={keySearch}
        />
        <button
          onClick={handleSearch}
          className="flex hover:bg-[#D8B975] outline-none border-2 border-transparent text-white mr-4 ml-3 hover:text-white bg-black py-1 px-5 items-center cursor-pointer absolute top-0 right-[-70px] bottom-0"
        >
          Search
          <AiOutlineArrowRight className="text-white ml-3 " />
        </button>
      </div>

      <p className="w-full py-3 mb-3 uppercase flex_center bg-[#DDDDDD]">
        About me
      </p>

      <div className="mb-12">
        <img
          src="https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg"
          className="bg-cover mb-2"
        />
        <h3 className="text-left mb-3 font-bold">Blogger & Youtuber</h3>
        <p>
          Hi. M??nh l?? Nam Anh. Ch??o m???ng b???n ?????n v???i blog c???a m??nh. ????y l?? n??i
          m??nh th?????ng xuy??n chia s??? v??? nh???ng c??u chuy???n nho nh??? trong ?????i s???ng
          th?????ng ng??y c???a m??nh. M??nh tin r???ng, h???nh ph??c ?????n t??? nh???ng ??i???u gi???n
          d??? nh???t. Hi v???ng b???n s??? t??m th???y ???????c s??? b??nh y??n v?? m???t ch??t ni???m vui
          khi ?????c blog c???a m??nh.
        </p>
      </div>

      <div>
        <p className="uppercase py-3 mb-5 bg-[#DDDDDD] text-center">
          instagram
        </p>

        <div className="grid grid-cols-3 grid-rows-3 ">
          {listImageInsta.map((item) => {
            return (
              <a key={item.id} href={item.link_instagram}>
                <img
                  src={item.link_image}
                  alt="Error "
                  className="mb-3 bg-auto h-[80%]   "
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBarChildren;
