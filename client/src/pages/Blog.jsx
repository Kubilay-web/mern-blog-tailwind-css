import React from "react";

const Blog = () => {
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
                    src="/images/Blog/blog-1-0.jpg"
                    alt="Gelecek Hatıraları"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle">Gelecek Hatıraları</h3>
                  <p className="bloglistsummary"></p>
                  <p>
                    Geleceği hatırlamaya çalışıyorsun. Tarihi bir saraydaki çini
                    panoya resmedilen kuş duvarda yerini almış. Bir kilise ve
                    caminin çinileri tuvallere boyanmış. Yüzlerce yıllık bir
                    seramik tabağın deseni kadife bir perdede karşına çıkıyor.
                    Eski bir vazonun kırık çiçekleri artık birer heykel. Yeşil
                    bir bitki yapraklarını gündüz açıp gece kapatıyor.
                  </p>{" "}
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
                    src="/images/Blog/blog-5-1.jpg"
                    alt="Geleceği Hatırlamak"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle font-weight-bold">
                    Geleceği Hatırlamak
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
                    src="/images/Blog/blog-2-1.jpg"
                    alt="Motiflerin Hatırlattıkları"
                  />
                </a>
                <div className="card-body">
                  <h3 className="bloglisttitle font-weight-bold">
                    Motiflerin Hatırlattıkları
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-100" />
          </div>
        </div>
        <div className="blogHorizontalDivider" />
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-4   col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/bolgenin-hafizasi/1610">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/blog-4-1.jpg"
                      alt="Bölgenin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Bölgenin Hafızası</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Hafıza nesneleri ilişkilendikleri coğrafyanın da
                      hafızasını taşır. Temel maddesi toprak olan seramikler
                      üretildikleri coğrafyaya doğrudan bağlanır: Toprakla
                      birebir ilişki kuran seramik, üretildiği toprağın
                      hafızasını da barındırır. Kütahya’nın kaolini bol,
                      dolayısıyla da seramik üretimine elverişli toprağı burada
                      çeşitli tekniklerin gelişmesine ve seramik atölyelerinin
                      kurulmasına sebep olmuştur.
                    </p>{" "}
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-4   col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/nesnelerin-hafizasi/1609">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/blog-3-1.jpg"
                      alt="Nesnelerin Hafızası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Nesnelerin Hafızası</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Hediyelik eşyaların kültürel tarihini ele aldığı kitabında
                      Rolf Potts bu tür nesnelerin kişisel hikâyelerle anlam
                      kazandığından bahseder: Nesneler sakladıkları hikâyelerle
                      hatıralara dönüşür. Hatıraları dünyayı değerlendirmek için
                      değil, kendi hikâyemizi anlatmak için toplarız.
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
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/blog/akiskan-rego/1599">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Blog/rego-blog-kapak1.jpg"
                      alt="Akışkan Rego"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Akışkan Rego</h3>
                    <p className="bloglistsummary"></p>
                    <p>
                      Her ne kadar Rego, geç de olsa, çağının öncü
                      feministlerinden biri olarak kabul edilmişse de, cinsel
                      akışkanlığı ele alışıyla ilgili çok az şey yazılmıştır.
                      Hatta çizim ve resimlerindeki sado-mazoşist akım,
                      partiarka ile sömürülen kadın arasındaki klasik çatışmanın
                      bir okuması olarak anlaşılmıştır. Türkiye ve Almanya’daki
                      ilk müze sergileri, Rego’nun toplumsal cinsiyet ve kimlik
                      hakkında sanıldığının çok ötesinde akışkan bir anlayışa
                      sahip olduğunu gösteriyor.&nbsp;&nbsp;
                    </p>{" "}
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogHorizontalDivider" />
        <div className="row">
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-md-2">
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
                                src="/images/Blog/mk_cfa_000332_before_dsf4324-1-copy.jpg"
                                alt="İstanbul: Öncesi & Sonrası"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                İstanbul: Öncesi &amp; Sonrası
                              </h3>
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
                                src="/images/Blog/carol.jpg"
                                alt="Yılbaşının Öteki Yüzü: <br> Pera Film'den Alternatif Yılbaşı İzleme Listesi"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Yılbaşının Öteki Yüzü: <br /> Pera Film'den
                                Alternatif Yılbaşı İzleme Listesi
                              </h3>
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
                                src="/images/Blog/blog-kapak-gorseli-in.jpg"
                                alt="Isabel Muñoz ile Söyleşi<br> Merve Akar Akgün"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Isabel Muñoz ile Söyleşi
                                <br /> Merve Akar Akgün
                              </h3>
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
                                src="/images/Blog/leyla-gediz-rego-3.jpg"
                                alt="Paula Rego İstanbul’da!"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Paula Rego İstanbul’da!
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
                                src="/images/Blog/hafta3-4.jpg"
                                alt="Zamane Öyküleri: Felis <br> Hande Ortaç"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Zamane Öyküleri: Felis <br /> Hande Ortaç
                              </h3>
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
                                src="/images/Blog/zamane-oykuleri-blog-2-2.jpg"
                                alt="Zamane Öyküleri: Cihangir <br>Özge Baykan Calafato"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Zamane Öyküleri: Cihangir <br />
                                Özge Baykan Calafato
                              </h3>
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
                                src="/images/Blog/aftersun-blog-11-2.jpg"
                                alt="Charlotte Wells’ten Bir Not"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Charlotte Wells’ten Bir Not
                              </h3>
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
                                src="/images/Blog/cover2.jpg"
                                alt="Geceye Doğru: Cadılar Bayramı Özel"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Geceye Doğru: Cadılar Bayramı Özel
                              </h3>
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
                                src="/images/Blog/kahvemolasikapak.jpg"
                                alt="Osmanlı’da Kahve İkramı"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Osmanlı’da Kahve İkramı
                              </h3>
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
                                src="/images/Blog/kucuksaridaire_0013-1.jpeg"
                                alt="Küçük Sarı Daire ile müzede keşifler!"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Küçük Sarı Daire ile müzede keşifler!
                              </h3>
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
                                src="/images/Blog/superflex2.jpg"
                                alt="Kopyalıyorum Öyleyse Varım"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Kopyalıyorum Öyleyse Varım
                              </h3>
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
                                src="/images/Blog/blog-kruger-gorsel2.jpeg"
                                alt="Barbara Kruger’ın İktidar, Kapitalizm,  Kimlik ve Toplumsal Cinsiyete Odaklanan Pratiği Üzerine"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Barbara Kruger’ın İktidar, Kapitalizm, Kimlik ve
                                Toplumsal Cinsiyete Odaklanan Pratiği Üzerine
                              </h3>
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
                                src="/images/Blog/seramik-blog-kapak.jpg"
                                alt="Gökyüzünden İyi Haberler"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Gökyüzünden İyi Haberler
                              </h3>
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
                                src="/images/Blog/seramik-blog07.jpg"
                                alt="Dünyadan Güncel Seramikler: 10 Sanatçı, 10 Yapıt"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Dünyadan Güncel Seramikler: 10 Sanatçı, 10 Yapıt
                              </h3>
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
                                src="/images/Blog/kahin-serenatlari-3.jpeg"
                                alt="Kâhin Serenatları | Güneşe Serenatlar, Kornelia Binicewicz"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Kâhin Serenatları | Güneşe Serenatlar, Kornelia
                                Binicewicz
                              </h3>
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
                                src="/images/Blog/kahin-02-2.jpeg"
                                alt="Kâhin Serenatları I Güzel İnsanlar, Sarp Dakni"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Kâhin Serenatları I Güzel İnsanlar, Sarp Dakni
                              </h3>
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
                                src="/images/Blog/kahin-serenatlari-04.jpeg"
                                alt="Kâhin Serenatları I İki Elli, Kübra Uzun"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Kâhin Serenatları I İki Elli, Kübra Uzun
                              </h3>
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
                                src="/images/Blog/zonaro-05.jpg"
                                alt="Zamanının Tanığı: Fausto Zonaro"
                              />
                            </a>
                            <div className="card-body">
                              <h3 className="bloglisttitle">
                                Zamanının Tanığı: Fausto Zonaro
                              </h3>
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
                  <a
                    href="https://www.youtube.com/user/PeraMuzesi?sub_confirmation=1"
                    target="_blank"
                  >
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
                          src="/images/Blog/mk_cfa_000332_before_dsf4324-1-copy.jpg"
                          alt="İstanbul: Öncesi & Sonrası"
                        />
                      </a>
                      <div className="card-body">
                        <h3 className="bloglisttitle">
                          İstanbul: Öncesi &amp; Sonrası
                        </h3>
                        <p className="bloglistsummary"></p>
                        <p>
                          Suna ve İnan Kıraç Vakfı Fotoğraf Koleksiyonu’ndan
                          seçtiğimiz, 1850’lerden 1980’lere tarihlenen İstanbul
                          fotoğraflarındaki manzara ve mekanları, bu yerlerin
                          günümüzdeki görünümleriyle birlikte sunuyoruz!
                        </p>{" "}
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
                      src="/images/Blog/blog-1-0.jpg"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Gelecek Hatıraları</h3>
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
                      src="/images/Blog/bruce-nauman-bana-bak.jpg"
                      alt="Bruce Nauman Bana Bak!"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Bruce Nauman Bana Bak!</h3>
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
                      src="/images/Blog/katherine-behar-12.jpg"
                      alt="Gece Yarısı Hikâyeleri: Ruh <br> Aşkın Güngör"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">
                      Gece Yarısı Hikâyeleri: Ruh <br /> Aşkın Güngör
                    </h3>
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
                      src="/images/Blog/kapakson-2.jpg"
                      alt="Pera Müzesi’nde Bir Gece"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Pera Müzesi’nde Bir Gece</h3>
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
                      src="/images/Blog/grayson-perry-1.jpg"
                      alt="Mütevazı Bir Evrenin Ontolojisi"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">
                      Mütevazı Bir Evrenin Ontolojisi
                    </h3>
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
                      src="/images/Blog/chlebowski1873mp705-2.jpg"
                      alt="Chlebowski'nin Sultanı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="bloglisttitle">Chlebowski'nin Sultanı</h3>
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

export default Blog;
