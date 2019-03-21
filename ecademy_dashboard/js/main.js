const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");


  //Fetch JSON for Australia
  fetch('json/en_AU.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataAustralia(json);
    });

  function appendDataAustralia(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#australia").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#australia").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#australia").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#australia_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-australia-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }

  //Fetch JSON for Austria
  fetch('json/de_AT.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataAustria(json);
    });

  function appendDataAustria(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#austria").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#austria").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#austria").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;
      doc.querySelector("#v-pills-austria-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#austria_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-austria-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }


  //Fetch JSON for belgium_dutch
  fetch('json/nl_BE.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataBelgiumDutch(json);
    });

  function appendDataBelgiumDutch(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#belgium_dutch").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#belgium_dutch").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#belgium_dutch").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;
      doc.querySelector("#v-pills-belgium_dutch-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#belgium_dutch_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-belgium_dutch-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }


  //Fetch JSON for belgium_french
  fetch('json/fr_BE.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataBelgiumFrench(json);
    });

  function appendDataBelgiumFrench(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#belgium_french").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#belgium_french").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#belgium_french").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#belgium_french_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-belgium_french-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }


  //Fetch JSON for China
  fetch('json/zh_CN.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataChina(json);
    });

  function appendDataChina(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#china").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#china").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#china").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#china_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-china-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }


  //Fetch JSON for Czech
  fetch('json/cs_CZ.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataCzech(json);
    });

  function appendDataCzech(json) {
    let active_num = [];
    //console.log(json);
    for (key in json) {
      //console.log(key);
    let data = json[key];
      //console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        //console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        //console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#czech").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
      active_num.push(1);
    } else if(isActive === "Deactivate"){
  doc.querySelector("#czech").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#czech").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
    console.log(active_num.length)
    doc.querySelector("#czech_active").innerHTML += `
    <article class="activate">
    <h2 class="course">Active Courses: </h2>
    <h2 class="num"> ${active_num.length}</h2>
    </article>
    `;
    doc.querySelector("#v-pills-czech-tab").innerHTML += `
    <span class="sidebar_num">${active_num.length}</span>
    `;
  }


  // Fetch Json for Denmark
    fetch('json/da_dk.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendData(json);
      });
    function appendData(json) {
    let active_num = [];
     console.log(json);
      for (key in json) {
       console.log(key);
      let data = json[key];
        console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          console.log(`status: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#denmark").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#denmark").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#denmark").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;
      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#denmark_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-denmark-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    // Fetch Json for Egypt
      fetch('json/en_EG.json')
        .then(function(response) {
          return response.json();
        })
        .then(json => {
          appendDataEgypt(json);
        });
      function appendDataEgypt(json) {
      let active_num = [];
       console.log(json);
        for (key in json) {
         console.log(key);
        let data = json[key];
          console.log(data);
          if(data['jcr:content']){
            let title = data['jcr:content']['jcr:title'];
            console.log(`title: ${title}`);

            let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
            console.log(`status: ${isActive}`);

            if(isActive === "Activate"){
          doc.querySelector("#egypt").innerHTML += `
          <article class="activate">
          <h6>${title}</h6>
          </article>
          `;
          active_num.push(1);
        } else if(isActive === "Deactivate"){
      doc.querySelector("#egypt").innerHTML += `
      <article class="deactivate">
      <h6>${title}</h6>
      </article>
      `;
        } else{
          doc.querySelector("#egypt").innerHTML += `
          <article class="other">
          <h6>${title}</h6>
          </article>
          `;
        }
      }
        }
        console.log(active_num.length)
        doc.querySelector("#egypt_active").innerHTML += `
        <article class="activate">
        <h2 class="course">Active Courses: </h2>
        <h2 class="num"> ${active_num.length}</h2>
        </article>
        `;
        doc.querySelector("#v-pills-egypt-tab").innerHTML += `
        <span class="sidebar_num">${active_num.length}</span>
        `;
      }


      // Fetch Json for Estonia
        fetch('json/et_EE.json')
          .then(function(response) {
            return response.json();
          })
          .then(json => {
            appendDataEstonia(json);
          });
        function appendDataEstonia(json) {
        let active_num = [];
         console.log(json);
          for (key in json) {
           console.log(key);
          let data = json[key];
            console.log(data);
            if(data['jcr:content']){
              let title = data['jcr:content']['jcr:title'];
              console.log(`title: ${title}`);

              let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
              console.log(`status: ${isActive}`);

              if(isActive === "Activate"){
            doc.querySelector("#estonia").innerHTML += `
            <article class="activate">
            <h6>${title}</h6>
            </article>
            `;
            active_num.push(1);
          } else if(isActive === "Deactivate"){
        doc.querySelector("#estonia").innerHTML += `
        <article class="deactivate">
        <h6>${title}</h6>
        </article>
        `;
          } else{
            doc.querySelector("#estonia").innerHTML += `
            <article class="other">
            <h6>${title}</h6>
            </article>
            `;
          }
        }
          }
          console.log(active_num.length)
          doc.querySelector("#estonia_active").innerHTML += `
          <article class="activate">
          <h2 class="course">Active Courses: </h2>
          <h2 class="num"> ${active_num.length}</h2>
          </article>
          `;
          doc.querySelector("#v-pills-estonia-tab").innerHTML += `
          <span class="sidebar_num">${active_num.length}</span>
          `;
        }


    //Fetch JSON for Finland
    fetch('json/fi_FI.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataFinland(json);
      });

    function appendDataFinland(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#finland").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#finland").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#finland").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#finland_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-finland-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch JSON for France
    fetch('json/fr_FR.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataFrance(json);
      });

    function appendDataFrance(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#france").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#france").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#france").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#france_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-france-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch JSON for Germany
    fetch('json/de_DE.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataGermany(json);
      });

    function appendDataGermany(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#germany").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#germany").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#germany").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#germany_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-profile-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch JSON for Greece
    fetch('json/el_GR.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataGreece(json);
      });

    function appendDataGreece(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#greece").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#greece").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#greece").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#greece_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-greece-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch JSON for Hungary
    fetch('json/hu_HU.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataHungary(json);
      });

    function appendDataHungary(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#hungary").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#hungary").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#hungary").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#hungary_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-hungary-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json India
    fetch('json/en_IN.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataIndia(json);
      });

    function appendDataIndia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#india").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#india").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#india").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#india_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-messages-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Indonesia
    fetch('json/gas_ID.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataIndonesia(json);
      });

    function appendDataIndonesia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#indonesia").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#indonesia").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#indonesia").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#indonesia_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-indonesia-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Ireland
    fetch('json/gpi_EN.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataIreland(json);
      });

    function appendDataIreland(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#ireland").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#ireland").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#ireland").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#ireland_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-ireland-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Italy
    fetch('json/git_IT.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataItaly(json);
      });

    function appendDataItaly(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#italy").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#italy").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#italy").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#italy_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-italy-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    // Fetch Json for Japan
      fetch('json/ja_JA.json')
        .then(function(response) {
          return response.json();
        })
        .then(json => {
          appendDataJap(json);
        });
      function appendDataJap(json) {
      let active_num = [];
       console.log(json);
        for (key in json) {
         console.log(key);
        let data = json[key];
          console.log(data);
          if(data['jcr:content']){
            let title = data['jcr:content']['jcr:title'];
            console.log(`title: ${title}`);

            let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
            console.log(`status: ${isActive}`);

            if(isActive === "Activate"){
          doc.querySelector("#japan").innerHTML += `
          <article class="activate">
          <h6>${title}</h6>
          </article>
          `;
          active_num.push(1);
        } else if(isActive === "Deactivate"){
      doc.querySelector("#japan").innerHTML += `
      <article class="deactivate">
      <h6>${title}</h6>
      </article>
      `;
        } else{
          doc.querySelector("#japan").innerHTML += `
          <article class="other">
          <h6>${title}</h6>
          </article>
          `;
        }
      }
        }
        console.log(active_num.length)
        doc.querySelector("#japan_active").innerHTML += `
        <article class="activate">
        <h2 class="course">Active Courses: </h2>
        <h2 class="num"> ${active_num.length}</h2>
        </article>
        `;
        doc.querySelector("#v-pills-japan-tab").innerHTML += `
        <span class="sidebar_num">${active_num.length}</span>
        `;
      }

    // Fetch Json for Kazahkstan
      fetch('json/ru_KZ.json')
        .then(function(response) {
          return response.json();
        })
        .then(json => {
          appendDataKazak(json);
        });
      function appendDataKazak(json) {
      let active_num = [];
       console.log(json);
        for (key in json) {
         console.log(key);
        let data = json[key];
          console.log(data);
          if(data['jcr:content']){
            let title = data['jcr:content']['jcr:title'];
            console.log(`title: ${title}`);

            let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
            console.log(`status: ${isActive}`);

            if(isActive === "Activate"){
          doc.querySelector("#kazahkstan").innerHTML += `
          <article class="activate">
          <h6>${title}</h6>
          </article>
          `;
          active_num.push(1);
        } else if(isActive === "Deactivate"){
      doc.querySelector("#kazahkstan").innerHTML += `
      <article class="deactivate">
      <h6>${title}</h6>
      </article>
      `;
        } else{
          doc.querySelector("#kazahkstan").innerHTML += `
          <article class="other">
          <h6>${title}</h6>
          </article>
          `;
        }
      }
        }
        console.log(active_num.length)
        doc.querySelector("#kazahkstan_active").innerHTML += `
        <article class="activate">
        <h2 class="course">Active Courses: </h2>
        <h2 class="num"> ${active_num.length}</h2>
        </article>
        `;
        doc.querySelector("#v-pills-kazahkstan-tab").innerHTML += `
        <span class="sidebar_num">${active_num.length}</span>
        `;
      }


      // Fetch Json for Korea
        fetch('json/ko_KR.json')
          .then(function(response) {
            return response.json();
          })
          .then(json => {
            appendDataKorea(json);
          });
        function appendDataKorea(json) {
        let active_num = [];
         console.log(json);
          for (key in json) {
           console.log(key);
          let data = json[key];
            console.log(data);
            if(data['jcr:content']){
              let title = data['jcr:content']['jcr:title'];
              console.log(`title: ${title}`);

              let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
              console.log(`status: ${isActive}`);

              if(isActive === "Activate"){
            doc.querySelector("#korea").innerHTML += `
            <article class="activate">
            <h6>${title}</h6>
            </article>
            `;
            active_num.push(1);
          } else if(isActive === "Deactivate"){
        doc.querySelector("#korea").innerHTML += `
        <article class="deactivate">
        <h6>${title}</h6>
        </article>
        `;
          } else{
            doc.querySelector("#korea").innerHTML += `
            <article class="other">
            <h6>${title}</h6>
            </article>
            `;
          }
        }
          }
          console.log(active_num.length)
          doc.querySelector("#korea_active").innerHTML += `
          <article class="activate">
          <h2 class="course">Active Courses: </h2>
          <h2 class="num"> ${active_num.length}</h2>
          </article>
          `;
          doc.querySelector("#v-pills-korea-tab").innerHTML += `
          <span class="sidebar_num">${active_num.length}</span>
          `;
        }


        // Fetch Json for Latvia
          fetch('json/lv_LV.json')
            .then(function(response) {
              return response.json();
            })
            .then(json => {
              appendDataLatvia(json);
            });
          function appendDataLatvia(json) {
          let active_num = [];
           console.log(json);
            for (key in json) {
             console.log(key);
            let data = json[key];
              console.log(data);
              if(data['jcr:content']){
                let title = data['jcr:content']['jcr:title'];
                console.log(`title: ${title}`);

                let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
                console.log(`status: ${isActive}`);

                if(isActive === "Activate"){
              doc.querySelector("#latvia").innerHTML += `
              <article class="activate">
              <h6>${title}</h6>
              </article>
              `;
              active_num.push(1);
            } else if(isActive === "Deactivate"){
          doc.querySelector("#latvia").innerHTML += `
          <article class="deactivate">
          <h6>${title}</h6>
          </article>
          `;
            } else{
              doc.querySelector("#latvia").innerHTML += `
              <article class="other">
              <h6>${title}</h6>
              </article>
              `;
            }
          }
            }
            console.log(active_num.length)
            doc.querySelector("#latvia_active").innerHTML += `
            <article class="activate">
            <h2 class="course">Active Courses: </h2>
            <h2 class="num"> ${active_num.length}</h2>
            </article>
            `;
            doc.querySelector("#v-pills-latvia-tab").innerHTML += `
            <span class="sidebar_num">${active_num.length}</span>
            `;
          }


          // Fetch Json for Libya
            fetch('json/lb_EN.json')
              .then(function(response) {
                return response.json();
              })
              .then(json => {
                appendDataLibya(json);
              });
            function appendDataLibya(json) {
            let active_num = [];
             console.log(json);
              for (key in json) {
               console.log(key);
              let data = json[key];
                console.log(data);
                if(data['jcr:content']){
                  let title = data['jcr:content']['jcr:title'];
                  console.log(`title: ${title}`);

                  let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
                  console.log(`status: ${isActive}`);

                  if(isActive === "Activate"){
                doc.querySelector("#libya").innerHTML += `
                <article class="activate">
                <h6>${title}</h6>
                </article>
                `;
                active_num.push(1);
              } else if(isActive === "Deactivate"){
            doc.querySelector("#libya").innerHTML += `
            <article class="deactivate">
            <h6>${title}</h6>
            </article>
            `;
              } else{
                doc.querySelector("#libya").innerHTML += `
                <article class="other">
                <h6>${title}</h6>
                </article>
                `;
              }
            }
              }
              console.log(active_num.length)
              doc.querySelector("#libya_active").innerHTML += `
              <article class="activate">
              <h2 class="course">Active Courses: </h2>
              <h2 class="num"> ${active_num.length}</h2>
              </article>
              `;
              doc.querySelector("#v-pills-libya-tab").innerHTML += `
              <span class="sidebar_num">${active_num.length}</span>
              `;
            }


            // Fetch Json for Lithuania
              fetch('json/lt_LT.json')
                .then(function(response) {
                  return response.json();
                })
                .then(json => {
                  appendDataLithuania(json);
                });
              function appendDataLithuania(json) {
              let active_num = [];
               console.log(json);
                for (key in json) {
                 console.log(key);
                let data = json[key];
                  console.log(data);
                  if(data['jcr:content']){
                    let title = data['jcr:content']['jcr:title'];
                    console.log(`title: ${title}`);

                    let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
                    console.log(`status: ${isActive}`);

                    if(isActive === "Activate"){
                  doc.querySelector("#lithuania").innerHTML += `
                  <article class="activate">
                  <h6>${title}</h6>
                  </article>
                  `;
                  active_num.push(1);
                } else if(isActive === "Deactivate"){
              doc.querySelector("#lithuania").innerHTML += `
              <article class="deactivate">
              <h6>${title}</h6>
              </article>
              `;
                } else{
                  doc.querySelector("#lithuania").innerHTML += `
                  <article class="other">
                  <h6>${title}</h6>
                  </article>
                  `;
                }
              }
                }
                console.log(active_num.length)
                doc.querySelector("#lithuania_active").innerHTML += `
                <article class="activate">
                <h2 class="course">Active Courses: </h2>
                <h2 class="num"> ${active_num.length}</h2>
                </article>
                `;
                doc.querySelector("#v-pills-lithuania-tab").innerHTML += `
                <span class="sidebar_num">${active_num.length}</span>
                `;
              }


    //Fetch Json Malaysia
    fetch('json/en_MY.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataMalaysia(json);
      });

    function appendDataMalaysia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#malaysia").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#malaysia").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#malaysia").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#malaysia_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-malaysia-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Netherlands
    fetch('json/gnl_NL.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataNetherlands(json);
      });

    function appendDataNetherlands(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#netherlands").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#netherlands").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#netherlands").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#netherlands_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-netherlands-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json New Zealand
    fetch('json/en_NZ.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataNewZealand(json);
      });

    function appendDataNewZealand(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#new_zealand").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#new_zealand").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#new_zealand").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#new_zealand_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-new_zealand-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Norway
    fetch('json/gno_NO.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataNorway(json);
      });

    function appendDataNorway(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#norway").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#norway").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#norway").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#norway_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-norway-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Phillipines
    fetch('json/en_PH.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataPhillipines(json);
      });

    function appendDataPhillipines(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#phillipines").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#phillipines").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#phillipines").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;
      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#phillipines_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-phillipines-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Poland
    fetch('json/gpl_PL.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataPoland(json);
      });

    function appendDataPoland(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#poland").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#poland").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#poland").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#poland_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-poland-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Portugal
    fetch('json/bgp_PT.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataPortugal(json);
      });

    function appendDataPortugal(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#portugal").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#portugal").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#portugal").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#portugal_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-portugal-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Russia
    fetch('json/gmo_RU.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataRussia(json);
      });

    function appendDataRussia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#russia").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#russia").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#russia").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#russia_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-russia-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Saudi Arabia
    fetch('json/en_SA.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSaudi_Arabia(json);
      });

    function appendDataSaudi_Arabia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#saudi_arabia").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#saudi_arabia").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#saudi_arabia").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#saudi_arabia_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-saudi_arabia-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Singapore
    fetch('json/en_SG.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSingapore(json);
      });

    function appendDataSingapore(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#singapore").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#singapore").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#singapore").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#singapore_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-singapore-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Slovakia
    fetch('json/gsk_SK.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSlovakia(json);
      });

    function appendDataSlovakia(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#slovakia").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#slovakia").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#slovakia").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#slovakia_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-slovakia-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json South Africa
    fetch('json/en_ZA.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSouthAfrica(json);
      });

    function appendDataSouthAfrica(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#south_africa").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#south_africa").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#south_africa").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#south_africa_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-south_africa-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Spain
    fetch('json/bge_ES.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSpain(json);
      });

    function appendDataSpain(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#spain").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#spain").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#spain").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#spain_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-spain-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Sudan
    fetch('json/sd_EN.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSudan(json);
      });

    function appendDataSudan(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#sudan").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#sudan").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#sudan").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#sudan_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-sudan-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Sweden
    fetch('json/sv_SE.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSweden(json);
      });

    function appendDataSweden(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#sweden").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#sweden").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#sweden").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#sweden_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-sweden-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch Json Switzerland
    fetch('json/de_CH.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataSwitzerland(json);
      });

    function appendDataSwitzerland(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#switzerland").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#switzerland").innerHTML += `
    <article class="deactivate">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#switzerland").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#switzerland_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-switzerland-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    //Fetch JSON for Turkey
    fetch('json/gtr_TR.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataTurkey(json);
      });

    function appendDataTurkey(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#turkey").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#turkey").innerHTML += `
    <article class="deactivate turkey">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#turkey").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#turkey_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-settings-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }


    // Fetch Json for United Arab Emirates
      fetch('json/en_AE.json')
        .then(function(response) {
          return response.json();
        })
        .then(json => {
          appendDataDubai(json);
        });
      function appendDataDubai(json) {
      let active_num = [];
       console.log(json);
        for (key in json) {
         console.log(key);
        let data = json[key];
          console.log(data);
          if(data['jcr:content']){
            let title = data['jcr:content']['jcr:title'];
            console.log(`title: ${title}`);

            let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
            console.log(`status: ${isActive}`);

            if(isActive === "Activate"){
          doc.querySelector("#dubai").innerHTML += `
          <article class="activate">
          <h6>${title}</h6>
          </article>
          `;
          active_num.push(1);
        } else if(isActive === "Deactivate"){
      doc.querySelector("#dubai").innerHTML += `
      <article class="deactivate">
      <h6>${title}</h6>
      </article>
      `;
        } else{
          doc.querySelector("#dubai").innerHTML += `
          <article class="other">
          <h6>${title}</h6>
          </article>
          `;
        }
      }
        }
        console.log(active_num.length)
        doc.querySelector("#dubai_active").innerHTML += `
        <article class="activate">
        <h2 class="course">Active Courses: </h2>
        <h2 class="num"> ${active_num.length}</h2>
        </article>
        `;
        doc.querySelector("#v-pills-dubai-tab").innerHTML += `
        <span class="sidebar_num">${active_num.length}</span>
        `;
      }


    //Fetch JSON for United Kingdom
    fetch('json/en_GB.json')
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        appendDataUnitedKingdom(json);
      });

    function appendDataUnitedKingdom(json) {
      let active_num = [];
      //console.log(json);
      for (key in json) {
        //console.log(key);
      let data = json[key];
        //console.log(data);
        if(data['jcr:content']){
          let title = data['jcr:content']['jcr:title'];
          //console.log(`title: ${title}`);

          let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
          //console.log(`active: ${isActive}`);

          if(isActive === "Activate"){
        doc.querySelector("#united_kingdom").innerHTML += `
        <article class="activate">
        <h6>${title}</h6>
        </article>
        `;
        active_num.push(1);
      } else if(isActive === "Deactivate"){
    doc.querySelector("#united_kingdom").innerHTML += `
    <article class="deactivate turkey">
    <h6>${title}</h6>
    </article>
    `;
      } else{
        doc.querySelector("#united_kingdom").innerHTML += `
        <article class="other">
        <h6>${title}</h6>
        </article>
        `;

      }
    }
      }
      console.log(active_num.length)
      doc.querySelector("#united_kingdom_active").innerHTML += `
      <article class="activate">
      <h2 class="course">Active Courses: </h2>
      <h2 class="num"> ${active_num.length}</h2>
      </article>
      `;
      doc.querySelector("#v-pills-united_kingdom-tab").innerHTML += `
      <span class="sidebar_num">${active_num.length}</span>
      `;
    }
  // DOMContentLoaded event listener end //
});
