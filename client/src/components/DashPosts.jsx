import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  const [showCopyModal, setShowCopyModal] = useState(false); // Kopyalama modalı
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false); // Kategori oluşturma modalı
  const [oldCategory, setOldCategory] = useState(""); // Eski kategori
  const [newCategory, setNewCategory] = useState(""); // Yeni kategori
  const [newCategoryName, setNewCategoryName] = useState(""); // Yeni kategori adı
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          currentUser.isAdmin
            ? `/api/post/getposts`
            : `/api/post/getposts?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, [currentUser._id, currentUser.isAdmin]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredPosts = userPosts.filter((post) => {
    const titleMatch = post.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const categoryMatch = post.category
      .toLowerCase()
      .includes(filters.category.toLowerCase());
    const dateMatch = filters.date
      ? new Date(post.updatedAt).toLocaleDateString() ===
        new Date(filters.date).toLocaleDateString()
      : true;

    return titleMatch && categoryMatch && dateMatch;
  });

  const handleCopyPosts = async () => {
    try {
      const res = await fetch(
        `/api/post/copy?oldCategory=${oldCategory}&newCategory=${newCategory}`,
        {
          method: "GET", // Veriyi query string olarak gönderiyoruz
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Posts successfully copied!");
        setShowCopyModal(false);
        setUserPosts((prev) => [...prev, ...data.copiedPosts]);
      } else {
        alert(data.message || "Error copying posts.");
      }
    } catch (error) {
      console.log("Error copying posts:", error);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {userPosts.length > 0 ? (
        <>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Filter by title"
              value={filters.title}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Filter by category"
              value={filters.category}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <Button
            color="teal"
            onClick={() => setShowCopyModal(true)}
            className="mb-4"
          >
            Copy Posts to New Category
          </Button>

          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              {currentUser.isAdmin && <Table.HeadCell>Delete</Table.HeadCell>}
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            {filteredPosts.map((post) => (
              <Table.Body className="divide-y" key={post._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  {currentUser.isAdmin && (
                    <Table.Cell>
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setPostIdToDelete(post._id);
                        }}
                        className="font-medium text-red-500 hover:underline cursor-pointer"
                      >
                        Delete
                      </span>
                    </Table.Cell>
                  )}
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>

          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no posts yet!</p>
      )}

      {/* Create Category Modal */}
      <Modal
        show={showCreateCategoryModal}
        onClose={() => setShowCreateCategoryModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
      </Modal>

      {/* Copy Posts Modal */}
      <Modal
        show={showCopyModal}
        onClose={() => setShowCopyModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
              Copy Posts to New Category
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                Old Category
              </label>
              <input
                type="text"
                className="p-2 w-full border border-gray-300 rounded"
                placeholder="Old category"
                value={oldCategory}
                onChange={(e) => setOldCategory(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                New Category
              </label>
              <input
                type="text"
                className="p-2 w-full border border-gray-300 rounded"
                placeholder="New category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <Button color="gray" onClick={() => setShowCopyModal(false)}>
                Cancel
              </Button>
              <Button color="teal" onClick={handleCopyPosts}>
                Copy
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Delete Post Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button color="red" onClick={handleDeletePost}>
                Yes, Delete
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
