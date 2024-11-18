import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex   items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id="sort">
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
              <option value="Genel">Genel</option>
              <option value="Hakkımızda">Hakkımızda</option>
              <option value="Güncel-Süreli">Güncel-Süreli</option>
              <option value="Güncel-Koleksiyon">Güncel-Koleksiyon</option>
              <option value="Koleksiyon">Koleksiyon</option>
              <option value="Projeler">Projeler</option>
              <option value="Sergi-2023">Sergi-2023</option>
              <option value="Sergi-2024"> Sergi-2024</option>
              <option value="Eğitim-Güncel">Eğitim-Güncel</option>
              <option value="Eğitim-Güncel-Ogrenme">
                Eğitim-Güncel-Ogrenme
              </option>
              <option value="Yayin-Süreli-Sergi">Yayin-Süreli-Sergi</option>
              <option value="Yayin-Dersim-Vakfi">Yayin-Dersim-Vakfi</option>
              <option value="Yayin-Sempozyum">Yayin-Sempozyum</option>
              <option value="Yayin-Küçük-Kitaplar-Dizisi">
                Yayin-Küçük-Kitaplar-Dizisi
              </option>
              <option value="Yayin-Koleksiyon-Sergi">
                Yayin-Koleksiyon-Sergi
              </option>
              <option value="Eğitim-Programlar">Eğitim-Programlar</option>
              <option value="Eğitim-2023">Eğitim-2023</option>
              <option value="Eğiitm-2024">Eğiitm-2024</option>
              <option value="Dijital-Güncel">Dijital-Güncel</option>
              <option value="Dijital-2023">Dijital-2023</option>
              <option value="Dijital-2024">Dijital-2024</option>
              <option value="Dijital-Tüm-Sergi">Dijital-Tüm-Sergi</option>
              <option value="Yayin-Dijital">Yayin-Dijital</option>
              <option value="Dijital-Tüm-Koleksiyon">
                Dijital-Tüm-Koleksiyon
              </option>
              <option value="Dijital-Tüm-Sempozyum">
                Dijital-Tüm-Sempozyum
              </option>
              <option value="Dijital-Tüm-Küçük Kitaplar">
                Dijital-Tüm-Küçük Kitaplar
              </option>
              <option value="Dijital-Tüm-Dijital Yayınlar">
                Dijital-Tüm-Dijital Yayınlar
              </option>
              <option value="Çağdaş Tarih">Çağdaş Tarih</option>
              <option value="Kültür-Sanat-Müzik">Kültür-Sanat-Müzik</option>

              <option value="Göç ve Göç Hareketleri">
                Göç ve Göç Hareketleri
              </option>
              <option value="Tarih">Tarih</option>
              <option value="Tarihsel ve Çağdaş Kişilikler">
                Tarihsel ve Çağdaş Kişilikler
              </option>
              <option value="Soykırım ve Soykırım Araştırmaları">
                Soykırım ve Soykırım Araştırmaları
              </option>

              <option value="Cagdas-Tarih">Cagdas-Tarih</option>
            </Select>
          </div>
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            Apply Filters
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
