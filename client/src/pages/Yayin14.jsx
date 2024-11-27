import { useState, useEffect } from "react";

const Yayin14 = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (category, setPostFunc) => {
    try {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPostFunc(data.posts); // Doğru veriyi ayarlamak için `data.posts` kullanılır
    } catch (error) {
      console.error(`Failed to fetch posts for category ${category}:`, error);
    }
  };

  useEffect(() => {
    const category1 = "Yayin-Sempozyum";

    // İlk kategori için postları çek
    fetchPosts(category1, setPosts);
  }, []);
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
        }}
      />

      <div className="container">
        <div className="row ptnew">
          <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
            <a className="navbar-brand" href="/" title="Home">
              <div className="hidden">
                <img
                  className="pera-logo component state2 state1-to-state2"
                  src="/images/Yayın14/PM-2023logo-tr.svg"
                  alt="Pera Müzesi Logo"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/*
    TEST
    */}
      <div
        className="nav-zemin d-none"
        style={{
          "z-index": "1029",
          "background-color": "white",
          width: "100%",
          top: "0",
          position: "fixed",
        }}
      />
      {/*
    <div class="nav-zemin2 d-none" id="uzunzemin" style="z-index: 2; background-color:white;width: 100%;top: 0;position:  fixed;"></div>
  */}
      {/* END TEST */}
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      <style
        media="screen and (max-width:545px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n    .mobile-spacing {\n        margin-bottom: 20px;\n    }\n",
        }}
      />

      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 ">
            <div className="row mt-3">
              <div
                className="col-md-12 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1>Sempozyum Dizisi</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="border-bottom border-secondary" />
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts && posts.length > 0 ? (
                posts.slice(0, 1000).map((post, index) => (
                  <div key={post._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          style={{ height: "105px" }}
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post.image}
                          alt={post.altText}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post.title}</h3>
                          <p className="card-text">{post.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post.author}</small>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <p>No posts available</p>
              )}
            </div>
          </div>

          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 40px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Yayin14;
