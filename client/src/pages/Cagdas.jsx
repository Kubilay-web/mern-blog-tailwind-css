import { useState, useEffect } from "react";

const Cagdas = () => {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);

  const fetchPosts = async (category, setPostFunc) => {
    try {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPostFunc(data.posts);
    } catch (error) {
      console.error(`Failed to fetch posts for category ${category}:`, error);
    }
  };

  useEffect(() => {
    const category1 = "Cagdas-Tarih";
    const category2 = "Cagdas-Tarih-En-Yeniler";

    // İlk kategori için postları çek
    fetchPosts(category1, setPosts);

    // İkinci kategori için postları çek
    fetchPosts(category2, setPosts2);
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
                  src="/images/Blog/PM-2023logo-tr.svg"
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
        dangerouslySetInnerHTML={{
          __html:
            "\n    .card-body h3 {\n        font-size: 26px;\n    }\n    .hideondesktop {\n        display: none;\n    }\n",
        }}
      />
      <style
        media="screen and (max-width:992px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .dontshowonmobile {\n        display: none;\n    }\n\n    .hideonmobile {\n        display: none;\n    }\n\n    .hideondesktop {\n        display: block;\n    }\n\n",
        }}
      />

      <div className="container pb-3 first-row">
        <div className="row">
          <div
            className="col-md-8 border-right border-secondary"
            id="firstpost"
          >
            <div className="card mb-0 border-0">
              <div className="card mb-0 border-0">
                {/*shadow-sm eklenince güzel duruyor*/}
                <a href="/blog/gelecek-hatiralari/1607">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/Blog/1-Ana Fatma.jpg"
                    alt="Gelecek Hatıraları"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle">Ana Fatma</h3>
                  <p className="bloglistsummary"></p>
                  <p>
                    Alevinin kültürünün en önemli sembolleri arasında yer alan
                    ve her daim bereketi simgeleyen Ana Fatma'nın sırlarla dolu
                    hikayesi burayı ziyarete gelenleri kendisine bağlamaktadır.
                    Dersim-Ovacık yolu üzerinde bulunan ve Alevi kültürünün en
                    önemli sembolleri arasında gösterilen Ana Fatma, her yıl
                    binlerce ziyaretçiyi kendisine çekerek çıra yakılıp dua
                    edilen yerlerdendir. Alevilik inancının merkezi kabul edilen
                    Dersim’deki bu yer Munzur Vadisi üzerindedir. Kerbela’da
                    katledilen Hz. Hasan ile Hüseyin’in anneleri olan Ana
                    Fatma’nın her daim bereketi temsil ettiğine inanılmaktadır.
                    Ana Fatma ziyaretgahı esasen bir su kaynağıdır. Daha
                    sonrasında üzerine türbe yapılan bu yer her yıl binlerce
                    kişi tarafından ziyaret edilmektedir.
                  </p>
                  <p />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 dontshowonmobile">
            <div className="card mb-0 border-0">
              <div className="card mb-0 border-0">
                {/*shadow-sm eklenince güzel duruyor*/}
                <a href="/blog/gelecegi-hatirlamak/1611">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/Blog/31-Saz ve Bağlama.jpg"
                    alt="Geleceği Hatırlamak"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle font-weight-bold">
                    Saz ve Bağlama
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="card mb-0 border-0">
              <div className="card mb-0 border-0">
                {/*shadow-sm eklenince güzel duruyor*/}
                <a href="/blog/motiflerin-hatirlattiklari/1608">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/Blog/33-İnanç ve Toplum.jpg"
                    alt="Motiflerin Hatırlattıkları"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle font-weight-bold">
                    İnanç ve Toplum
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-100" />
          </div>
        </div>

        <div className="blogHorizontalDivider" />

        <div className="container">
          <div className="row pt-7">
            {posts && posts.length > 0 ? (
              posts.slice(0, 3).map((post, index) => (
                <div key={post._id} className="col-lg-4 col-md-4 mb-4">
                  <a
                    href={`/post/${post.slug}`}
                    target="_self"
                    className="no-link"
                  >
                    <div className="card mb-4 border-0">
                      <img
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

        <div className="container">
          <div className="row pt-7">
            {posts && posts.length > 0 ? (
              posts.slice(3, 1000).map((post, index) => (
                <div key={post._id} className="col-lg-3 col-md-3 mb-4">
                  <a
                    href={`/post/${post.slug}`}
                    target="_self"
                    className="no-link"
                  >
                    <div className="card mb-4 border-0">
                      <img
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

        <div className="row">
          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-4   col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/bolgenin-hafizasi/1610">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/2-Munzur Baba.webp"
                      alt="Bölgenin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Munzur Baba</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Munzur Baba, Alevi inanç sisteminde önemli bir yeri olan
                      ve özellikle Munzur Dağları çevresindeki halk tarafından
                      büyük saygı gören bir halk erenidir. Munzur Baba, halk
                      arasında sevgi, hoşgörü ve adaletin simgesi olarak kabul
                      edilir. Özellikle Tunceli ilinin Munzur Dağları'nda
                      yaşayan köylüler, ona olan derin bağlılıkları ve
                      saygılarıyla tanınır. Munzur Baba'nın hayatı ve
                      öğretileri, genellikle dostane bir yaklaşım, insanlara
                      yardım etme ve doğayla uyum içinde yaşama üzerine
                      şekillenmiştir. Efsanelere göre, o, zor zamanlarda halkını
                      koruyan, onları adaletli bir şekilde yönlendiren ve ruhsal
                      huzur arayışına katkı sunan bir kişilik olarak anlatılır.
                      İnançlarına göre, Munzur Baba, hem bir mürşit hem de bir
                      halk kahramanı olarak halkının manevi rehberi olmuştur.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-4   col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/nesnelerin-hafizasi/1609">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/4-Kureyş Baba.jpg"
                      alt="Nesnelerin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Kureyş Baba</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Kureyş Baba, Türk halk inançlarında önemli bir yer tutan,
                      özellikle Alevi ve Bektaşi geleneğinde saygı gören bir
                      halk erenidir. Yaşamı hakkında çok fazla ayrıntılı bilgi
                      bulunmamakla birlikte, Kureyş Baba'nın ismi genellikle
                      "Kureyş" kabilesine mensup olduğuna ve İslam'ın ilk
                      yıllarında yaşamış bir kişi olduğuna işaret eder. Ancak
                      bazı kaynaklar, onun Anadolu'ya yerleşmiş bir halk önderi
                      ve mürşit olduğunu ve özellikle Alevi-Bektaşi toplulukları
                      arasında manevi bir lider olarak kabul edildiğini
                      belirtir. Kureyş Baba'nın adı, onun hem soyu hem de halk
                      arasında kazandığı yüksek manevi kimlik nedeniyle
                      önemlidir. O, insanlara hoşgörü, adalet ve eşitlik gibi
                      değerleri öğretmiş, halkı bir arada tutmak için çeşitli
                      manevi yol göstericiliklerde bulunmuştur.
                      <sup>
                        <br />
                      </sup>
                    </p>{" "}
                    <p />
                  </div>
                </div>
              </div>


              <div className="col-lg-4   col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/akiskan-rego/1599">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/5-Doğa Sporları.jpg"
                      alt="Akışkan Rego"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Doğa Sporları</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Rafting, zipline, yamaç paraşütü, kamping, at safari,
                      trekking, dağcılık, doğa yürüyüşü, kaya tırmanışı, kayak,
                      kış kampçılığı, yüzme… ve daha bir çok aktivitenin
                      yapılabildiği bir merkezdir Tunceli. Doğa sporları
                      turizminde ilk sırada olan Antalya'ya rakip olabilecek
                      düzeydedir. Bütün bu aktivitelerden faydalanabilirsiniz.
                      Tunceli önemli rafting bölgelerimizden bir tanesidir.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-3   col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/bolgenin-hafizasi/1610">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/6-Munzur Extreme.jpg"
                      alt="Bölgenin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Munzur Extreme</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Tunceli – Ovacık yolu 5.km ‘sinde, Ana Fatma Ziyareti
                      yanında yer almaktadır. Eğer sizde hayatın
                      koşuşturmasından kaçmak ve eğlenceli zaman geçirmek
                      istiyorsanız Munzur Extrem Aktivite merkezi tam size göre.
                      Güler yüzlü personeli eşliğinde rafting, zipline, yamaç
                      paraşütü, kamping ve at safari yapabileceğiniz bir yer.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/nesnelerin-hafizasi/1609">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/7-Zirve Dağcılık.jpg"
                      alt="Nesnelerin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Dağcılık</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Zirve Dağcılık Kulübü’nün, Tunceli Şubesi’nde size
                      aradığınız adrenalini, eğlenceyi ve gerçek doğayı
                      sunabilecek profesyonel bir ekip bulunmaktadır.
                      Tunceli’deyseniz eğer, mutlaka yapılması gereken doğa
                      sporlarının hemen hemen hepsi bu kulübün profesyonel ekibi
                      tarafından sizlere sunulmakta.
                      <sup>
                        <br />
                      </sup>
                    </p>{" "}
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/akiskan-rego/1599">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/8-Kaplıcalar.jpg"
                      alt="Akışkan Rego"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Kaplıcalar</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Kaplıca ve İçme Kaynakları Dedebağ (Bağın) Kaplıcası
                      Mazgirt İlçesi, Dedebağ Köyündeki kaplıca, ilçe merkezine
                      65 Km. uzaklıkta, Peri Suyu kenarındadır. III. öncelikli
                      kaplıca sınıfına giren Bağın Kaplıcasında tek kaynaktan
                      çıkan suyun akım değeri 5 lt/sn, sıcaklığı 35 oC, PH
                      değeri 5.0’dır. Kaplıca suyu kalsiyum sülfatlı, sodyum
                      sülfatlı ve klorür bikarbonatlı sular grubundandır. Banyo
                      uygulamalarına elverişli olan bu sular, romatizmal
                      hastalıklar, kırık-çıkık sekelleri ve kadın hastalıkları
                      tedavisinde olumlu etki yapmaktadır.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-4">
                <div className="card mb-0 border-0">
                  <a href="/blog/akiskan-rego/1599">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/9-El Sanatları.jpg"
                      alt="Akışkan Rego"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">El Sanatları</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Tunceli’de geleneksel el sanatları arasında en yaygın
                      olanlar halı, kilim, cicim ve palaz dokumacılığı,
                      dericilik ve çanak-çömlek yapımıdır. Günümüzde halı ve
                      kilim dokumacılığı ilçe merkezlerinde; çanak-çömlek yapımı
                      ise daha çok köylerde yaygındır. Dokumacılık İlde temel
                      ekonomik faaliyetin hayvancılık olması, geleneksel el
                      sanatları arasında dokumacılığın ön plana çıkmasını
                      sağlamıştır.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="blogHorizontalDivider" />

        <div className="row">
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-md-2 mb-3">
                <span className="btn btn-block btn-outline-dark btn-rezerve BitcraftLang">
                  En Yeniler
                </span>
              </div>

              <div className="col-md-10 float-right ml-auto dontshowonmobile">
                <ul
                  className="pagination justify-content-end"
                  style={{ "font-size": "30px" }}
                >
                  <li className="page-item">
                    <a
                      className="page-link  border-0 px-1 text-dark left carousel-control"
                      href="#carouselNewest"
                      role="button"
                      data-slide="prev"
                    >
                      {" "}
                      <img src="/images/Blog/left.png" alt="sol" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link  border-0 px-1 text-dark right carousel-control"
                      href="#carouselNewest"
                      role="button"
                      data-slide="next"
                    >
                      {" "}
                      <img src="/images/Blog/right.png" alt="sağ" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hideondesktop mt-3"></div>

            <div className="container">
              <div className="row pt-7">
                {posts2 && posts.length > 0 ? (
                  posts2.slice(0, 1000).map((post2, index) => (
                    <div key={posts2._id} className="col-lg-4 col-md-4 mb-4">
                      <a
                        href={`/post/${post2.slug}`}
                        target="_self"
                        className="no-link"
                      >
                        <div className="card mb-4 border-0">
                          <img
                            className="bd-placeholder-img card-img-top"
                            width="100%"
                            src={post2.image}
                            alt={post2.altText}
                          />
                          <div className="card-body">
                            <h3 className="card-title">{post2.title}</h3>
                            <p className="card-text">{post2.content}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                {post2.author}
                              </small>
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

            <div className="row">
              <div className="col-md-12">
                {/*<div id="carouselNewest" class="carousel slide" data-ride="carousel"> data-ride silindi, animasyon kapatıldı. */}
                <div id="carouselNewest" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/istanbul-oncesi-sonrasi/1605">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/3-Dövme Pilav.jpg"
                                alt="İstanbul: Öncesi & Sonrası"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Dövme Pilav</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/yilbasinin-oteki-yuzu-pera-filmden-alternatif-yilbasi-izleme-listesi/1603">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/4-Dut Tatlısı.jpg"
                                alt="Dut Tatlısı"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Dut Tatlısı</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/isabel-munoz-ile-soylesi-merve-akar-akgun/1601">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/5-Gulik.jpeg"
                                alt="Gulik"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Gulik</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/paula-rego-istanbul’da/1597">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/6-Halbur Hurması Tatlısı.jpg"
                                alt="Paula Rego İstanbul’da!"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Halbur Hurması Tatlısı
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/zamane-oykuleri-felis-hande-ortac/1595">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/7-Haşıl.jpg"
                                alt="Haşıl"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Haşıl</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-5 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/zamane-oykuleri-cihangir-ozge-baykan-calafato/1593">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/8-Mantar Yemeği.jpg"
                                alt="Zamane Öyküleri: Cihangir <br>Özge Baykan Calafato"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Mantar Yemeği</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/charlotte-wells’ten-bir-not/1590">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/9-İmam Çorbası.jpg"
                                alt="Charlotte Wells’ten Bir Not"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">İmam Çorbası</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/geceye-dogru-cadilar-bayrami-ozel/1589">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/10-Mumbar Dolması.jpg"
                                alt="Geceye Doğru: Cadılar Bayramı Özel"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Mumbar Dolması</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/osmanli’da-kahve-ikrami/1587">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/11-Pekmez Helvası.jpg"
                                alt="Osmanlı’da Kahve İkramı"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Pekmez Helvası</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/kucuk-sari-daire-ile-muzede-kesifler/1585">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/12-Kabak Dolması.jpg"
                                alt="Küçük Sarı Daire ile müzede keşifler!"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Kabak Dolması</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/kopyaliyorum-oyleyse-varim/1583">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/13-Soğan Aşı.jpg"
                                alt="Kopyalıyorum Öyleyse Varım"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Soğan Aşı</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/barbara-kruger’in-iktidar-kapitalizm-kimlik-ve-toplumsal-cinsiyete-odaklanan-pratigi-uzerine/1581">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/14-Şir.jpg"
                                alt="Barbara Kruger’ın İktidar, Kapitalizm,  Kimlik ve Toplumsal Cinsiyete Odaklanan Pratiği Üzerine"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Şir</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/gokyuzunden-iyi-haberler/1578">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/15-Rafting.webp"
                                alt="Gökyüzünden İyi Haberler"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Rafting</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/dunyadan-guncel-seramikler-10-sanatci-10-yapit/1576">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/16-Kaya Tırmanışı.jpg"
                                alt="Dünyadan Güncel Seramikler: 10 Sanatçı, 10 Yapıt"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Kaya Tırmanışı</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/kahin-serenatlari-gunese-serenatlar-kornelia-binicewicz/1574">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/17-Kampçılık.jfif"
                                alt="Kâhin Serenatları | Güneşe Serenatlar, Kornelia Binicewicz"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Kampçılık</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/kahin-serenatlari-i-guzel-insanlar-sarp-dakni/1572">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/18-Zipline.jpg"
                                alt="Kâhin Serenatları I Güzel İnsanlar, Sarp Dakni"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Zipline</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/kahin-serenatlari-i-iki-elli-kubra-uzun/1570">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/19-Kış Sporları.jpg"
                                alt="Kâhin Serenatları I İki Elli, Kübra Uzun"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Kış Sporları</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2   col-md-2">
                          <div className="card mb-0 border-0 slytdtl">
                            {/*shadow-sm eklenince güzel duruyor*/}
                            <a href="/blog/zamaninin-tanigi-fausto-zonaro/1568">
                              <img
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height="100%"
                                src="/images/Blog/20-Dağcılık.webp"
                                alt="Zamanının Tanığı: Fausto Zonaro"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">Dağcılık</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogHorizontalDivider" />
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-3">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="https://www.youtube.com" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/kesfet-dikey-1204-tr.jpeg"
                      alt="Keşfet Banner"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card mb-0 border-0">
                      {/*shadow-sm eklenince güzel duruyor*/}
                      <a href="/blog/istanbul-oncesi-sonrasi/1605">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="100%"
                          src="/images/Blog/3-Sarı Saltuk.jpg"
                          alt="İstanbul: Öncesi & Sonrası"
                        />
                      </a>
                      <div className="card-body">
                        <h3 className="bloglisttitle">Sarı Saltuk</h3>
                        <p className="bloglistsummary"></p>
                        <p>
                          Sarı Saltuk, Anadolu'nun en önemli halk erenlerinden
                          biri olarak, özellikle Alevi ve Bektaşi geleneğinde
                          derin bir yer edinmiştir. Doğum yeri ve hayatı
                          hakkında kesin bilgiler bulunmamakla birlikte, Sarı
                          Saltuk'un, 13. yüzyılda, Osmanlı'nın ilk yıllarına
                          yakın bir dönemde yaşamış bir halk önderi ve dini
                          mürşit olduğu kabul edilir. Efsanelere göre, Sarı
                          Saltuk, Osmanlı topraklarında İslam'ı yaymaya çalışan
                          önemli bir mutasavvıftır. Adı, “sarı” sıfatıyla anılsa
                          da, bu ismin kesin kökeni hakkında farklı rivayetler
                          vardır. Bazı kaynaklar, onun sarı renkte bir elbise
                          giymesinden dolayı bu adı aldığını söylerken, bazıları
                          da onun ruhani özelliği ve bilgelik ışığını simgeleyen
                          bir adlandırma olduğunu öne sürer. Sarı Saltuk'un
                          öğretileri, sevgi, hoşgörü, insan hakları ve adalet
                          üzerine odaklanır. O, halkı doğru yola yönlendirmek
                          için sürekli olarak birleştirici bir rol oynamış ve
                          özellikle zenginle fakir arasındaki sınıf farklarına
                          karşı durmuştur. Kendisinin gönül yolu, insanları bir
                          arada tutmayı ve birlikte yaşamanın gücünü kutlamayı
                          amaçlar.
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogHorizontalDivider" />
        <div className="row">
          <div className="col-md-12 mt-3 ">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-2">
                <a target="_blank" href="/blog/yillar/2024">
                  <span className="btn btn-block btn-outline-dark btn-rezerve BitcraftLang">
                    İlginizi Çekebilir
                  </span>
                </a>
              </div>
              <div className="col-md-10  float-right ml-auto hideonmobile">
                <a
                  className="text-dark"
                  href="/blog/yillar/2024"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
            </div>
            <div className="row  mt-3">
              <div className="col-lg-2 col-md-2  ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/gelecek-hatiralari/1607">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/21-Sosyal.webp"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Sosyal</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2  ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/bruce-nauman-bana-bak/1240">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/22-Kültür.jpg"
                      alt="Bruce Nauman Bana Bak!"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Kültür</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2  ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/gece-yarisi-hikayeleri-ruh-askin-gungor/1410">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/23-Pir Sultan.jpg"
                      alt="Gece Yarısı Hikâyeleri: Ruh <br> Aşkın Güngör"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Pir Sultan</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 hideonmobile ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/pera-muzesi’nde-bir-gece/1516">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/24-Çocuk Sokağı.webp"
                      alt="Pera Müzesi’nde Bir Gece"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Çocuk Sokağı</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 hideonmobile ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/mutevazi-bir-evrenin-ontolojisi/1436">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/25-Seyit Rıza.webp"
                      alt="Mütevazı Bir Evrenin Ontolojisi"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Seyit Rıza</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 hideonmobile ">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/chlebowskinin-sultani/1274">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/26-Kütüphane Durağı.jpeg"
                      alt="Chlebowski'nin Sultanı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Kütüphane Durağı</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 hideondesktop">
              <div className="col-md-2">
                <a target="_blank" href="/blog/yillar/2024">
                  <buton
                    type="button"
                    className="btn btn-block btn-outline-dark btn-rezerve BitcraftLang"
                  >
                    Tümünü Gör
                  </buton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cagdas;
