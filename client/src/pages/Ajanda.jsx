import React from "react";

export default function Ajanda() {
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
                  src="/images/Ajanda/PM-2023logo-tr.svg"
                  alt="Pera Müzesi Logo"
                />
              </div>
            </a>
          </div>
          {/*header rightside*/}
          <div className="col-lg-4 col-md-5 d-none d-md-block align-self-center">
            <div className="float-right ">
              <a
                className="float-left langField"
                href="https://www.peramuseum.org/"
                style={{ margin: "2px 0 0 0" }}
              >
                <img
                  src="/images/Ajanda/iconLang.png"
                  style={{ width: "25px", margin: "4px 0 0 0" }}
                />
              </a>
              <div className="searchbar float-left">
                <input
                  className="search_input txtSrch1"
                  id="srchBox"
                  type="text"
                  name="txtSrch1"
                  placeholder="Arama..."
                />
                <a href="#" id="btnSrchDesktop" className="search_icon btnSrch">
                  <img
                    src="/images/Ajanda/iconSearch.png"
                    style={{ width: "25px" }}
                  />
                </a>
              </div>
            </div>
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
      <link href="css/main.css" rel="stylesheet" />
      <link href="css/main_2.css" rel="stylesheet" />
      <link href="css/main_1.css" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n    /* On screens that are 768px wide or less (tablet and mobil for PERA*/\n    .rounded {\n        border-radius: 8px !important;\n    }\n\n    .fc-unthemed th,\n    .fc-unthemed td,\n    .fc-unthemed thead,\n    .fc-unthemed tbody,\n    .fc-unthemed .fc-divider,\n    .fc-unthemed .fc-row,\n    .fc-unthemed .fc-content,\n    .fc-unthemed .fc-popover,\n    .fc-unthemed .fc-list-view,\n    .fc-unthemed .fc-list-heading td {\n        /*margin: 10px !important;*/\n        border-color: #333;\n    }\n    /*eklendi 03112019 .fc-body .fc-row*/\n    .bitcalendar:hover {\n        background-color: #F0F0F0;\n    }\n\n    #slcDateHeader1 option { font-size: 20px; }\n    #slcDateHeader2 option {\n        font-size: 20px;\n    }\n\n    @media screen and (max-width: 768px) {\n        .fc-head {\n            display: none !important; /*mobilde gün adlarını kapat*/\n        }\n\n        .fc-other-month {\n            color: white; /*Mobilde diğer ayları white yaparak pasif göster*/\n        }\n\n        td.fc-day.fc-widget-content.fc-other-month.fc-past, td.fc-day.fc-widget-content.fc-other-month.fc-future {\n            border: none !important; /*Mobilde diğer ayların tablo boderlarını kaldır*/\n        }\n\n        table {\n            border: 0px !important;\n            border-collapse: separate !important;\n            border-spacing: 2px 2px !important;\n        }\n\n        #calHeader {\n            background-color: #c13b3b;\n            color: white;\n        }\n\n        .display-3 {\n            font-size: 28px !important; /*Mobilde tarih header alanına sığmadığı için 28e kadar düşürüldü.*/\n            text-transform: capitalize !important;\n        }\n\n        .font-weight-bold {\n            font-weight: 400 !important;\n        }\n\n        #calHeaderLeft {\n            justify-content: space-between !important;\n        }\n\n        .fc-unthemed td.fc-today {\n            background: #C13B3B; /*Mobilde bugün alanının arkasını kırmızı yapmak*/\n        }\n         \n    }\n\n\n\n\n    .tippy-tooltip {\n        position: relative;\n        color: #fff;\n        border-radius: 0;\n        font-size: .875rem;\n        padding: 0;\n        line-height: 1.4;\n        text-align: left;\n        background-color: #333;\n    }\n\n\n    .bg-C13B3B {\n        background-color: #C13B3B;\n    }\n\n    .bg-777777 {\n        background-color: #777777;\n    }\n\n    .fc-license-message {\n        display: none;\n    }\n\n    .fc-event {\n        cursor: pointer;\n        /*event ların üzeirne gidince mouse pointera dönmesi için*/\n    }\n\n    .fc-day-number {\n        float: left !important; /*Günü sola yasla*/\n        margin-left: 3%; /*Soldan %3lük boşluk*/\n    }\n\n\n\n    .fc-content-skeleton thead td.fc-today { /*Today ögesinin arka planını kırmızya boyayama*/\n       background-color: #C13B3B !important; \n       /*  background: linear-gradient(to bottom , #C13B3B 50% , white 50%) !important;*/\n        color: white; \n    }\n    \n     \n\n\n    .fc-widget-header,\n    .fc-body > tr:first-child > td:first-child {\n        border: none !important;\n    }\n\n    @media (min-width: 769px) {\n        .fc-btnArchive-button,\n        .fc-btnCategory-button {\n            margin-top: 10px;\n            margin-right: 10px;\n            padding: 0 15px 0 15px;\n            border-radius: 8px !important;\n            /*arşiv ve kategori butonlarının tasarımı*/\n        }\n        .fc-content-skeleton thead tr{  \n        height:80px;\n          }  \n        .fc-content-skeleton thead tr td{  \n           padding-left:10px;\n           padding-right:10px;\n          } \n        .fc-content-skeleton tbody tr td{  \n           padding-left:15px;\n           padding-right:15px;\n           padding-bottom:15px;\n          }\n        .fc-day-header {\n            /*Gün isimlerinin arka plan ve text rengi, konumu için*/\n            background-color: #9E9E9E;\n            color: white;\n            margin: 0 25px 0 25px;\n        }\n\n        .fc-left {\n            padding-left: 3%;\n            font-size: 30px;\n            font-weight: 800;\n        }\n\n        .fc-day-number {\n            float: left !important;\n            /*Günü sola yasla*/\n            font-size: 30px;\n            /*Fontunu 30px yap*/\n            margin-left: 3%;\n            /*Soldan %3lük boşluk*/\n        }\n\n        .fc-day-top:not(.fc-other-month) {\n            position: relative !important;\n        }\n       /*.fc-day-top:not(.fc-other-month):not(.fc-today):after*/\n            .agsC span:after {\n                background-color: #333 !important;\n                /*bottom: 0 !important;*/\n                content: '' !important;\n                display: block !important;\n                height: 1px !important;\n                left: 50% !important;\n                position: absolute !important;\n                transform: translate(-50%, 0) !important;\n                width: 80% !important; \n            }\n\n        td.fc-today {\n            background-color: white !important;\n        }\n\n        .fc-day-header { /*gün adları görünümün tasarımdaki yükseklikte olması için*/\n            padding: 15px !important;\n        }\n\n        table {\n            border: 0px !important;\n            border-collapse: separate !important;\n            border-spacing: 10px 5px !important;\n        }\n\n\n\n        .fc-btnCategory-button {\n            font-weight: bolder;\n        }\n\n        .fc-title {\n            white-space: normal;\n        }\n\n        .fc-content-skeleton tbody tr td {\n            /*height: 35px;*/\n        }\n\n    }\n    .ttle {\n        font-size: 18px;\n        margin-top: 15px !important;\n        margin-bottom: 0px !important;\n        padding-bottom: 3px !important;\n        border-bottom: 1px solid #333333 !important;\n        border-radius: 0px !important;\n    }\n\n    .ttle2 {\n        padding-bottom: 7.5px !important;\n    }\n    \n",
        }}
      />
      <div className="container first-row">
        <div id="loading" className="row">
          <div className="col-12 d-flex justify-content-center py-5 align-items-center">
            <span className="pl-2">Yükleniyor ...</span>
          </div>
        </div>
        <div
          className="col-md-12 d-none"
          id="fieldCalendar"
          style={{ "padding-left": "0px", "padding-right": "0px" }}
        >
          <div id="calHeader" className="row align-items-center mt-3">
            <div
              id="calHeaderLeft"
              className="col d-flex align-items-center justify-content-left pt-1"
            >
              <h1
                id="dateHeader"
                className="float-left order-2 order-lg-1 mr-3"
                style={{ "font-weight": "600 !important" }}
              >
                {" "}
              </h1>
              <h1
                id="dateHeader1"
                style={{ display: "none" }}
                className="  float-left order-2 order-lg-1"
              >
                {" "}
              </h1>
              <h1
                id="dateHeader2"
                style={{ display: "none" }}
                className="   float-left order-2 order-lg-1"
              >
                {" "}
              </h1>
              <span className="order-1 order-lg-2 classBtnPrev">
                <i
                  className="fa fa-chevron-left  "
                  style={{ "font-size": "1.2em" }}
                />
              </span>
              <span className="order-3 pl-3 classBtnNext">
                <i
                  className="fa fa-chevron-right  "
                  style={{ "font-size": "1.2em" }}
                />
              </span>
            </div>
            <div
              id="calHeaderRight"
              className="col-auto d-lg-block d-none panel-title"
            >
              <a
                href="/ajanda/arsiv"
                className="btn btn-sm px-4 btn-outline-dark font-weight-bolder rounded"
              >
                Arşiv
              </a>
              <button
                id="btnCategory"
                className="btn btn-sm px-4 btn-outline-dark font-weight-bolder rounded"
                type="button"
                data-toggle="collapse"
                data-target="#categoryMenu"
                aria-expanded="false"
                aria-controls="categoryMenu"
              >
                Kategoriler
              </button>
            </div>
            <div className="col-12">
              <div className="collapse multi-collapse" id="categoryMenu">
                <div className="card card-body text-right border-0">
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_1',this)"
                  >
                    <i className="fa fa-circle" /> Sergi
                  </p>
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_2',this)"
                  >
                    <i className="fa fa-circle" /> Proje
                  </p>
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_4',this)"
                  >
                    <i className="fa fa-circle" /> Film
                  </p>
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_5',this)"
                  >
                    <i className="fa fa-circle" /> Etkinlikler{" "}
                  </p>
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_3',this)"
                  >
                    <i className="fa fa-circle" /> Pera Öğrenme
                  </p>
                  <p
                    className="text-danger font-weight-bold"
                    onclick="eventHideShow('Type_6',this)"
                  >
                    <i className="fa fa-circle" /> Dijital Film Programları{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="calendar" />
          </div>
          <div id="divTodayList" className="row d-flex d-lg-none pt-3"></div>
        </div>
        <div className="col-md-12 mt-3">
          <p style={{ "font-size": "12px" }}>
            *Ajandada yer almayan geçmiş etkinlikleri,{" "}
            <a href="/ajanda/arsiv">Arşiv</a> başlığı altında bulabilirsiniz.
          </p>
        </div>
        <div className="col-md-12 mt-3" style={{ margin: "0 0 40px 0" }}></div>
      </div>
      <template id="example" className=" bg-white" />
    </div>
  );
}
