<template>
  <div class="workshops">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />

    <div class="head-container">
      <div class="sub-text">
      {{$t("workshops.firstline")}} {{$t("workshops.generalinfo")}}
      </div>
    </div>


    <div class="flex-grid">
      <div class="col">
        <div class="text">{{$t("workshops.weekinfo")}}</div>
      </div>

      <div class="col">
        <div class="text">{{$t("workshops.onlineinfo")}}</div>
      </div>

      <div class="col">
        <div class="text">{{$t("workshops.childreninfo")}}</div>
      </div>
      
    </div>

    <div class="sub-header">
        <a class="nav-link" href="https://podio.com/webforms/26303914/1984824" target="_blank">
            {{$t("workshops.applyhere")}}
        </a>
    </div>




<!--- WORKSHOPS --->

<!--- WORKSHOP 1 --->
<div class="seperator"></div>
    <div class="flex-grid">
      <div class="col"><div class="workshop-title">{{$t("workshop1.title")}}</div></div>
    <div class="col"><div class="workshop-about">{{$t("workshop1.teacher1")}}<br>{{$t("workshop1.teacher2")}}</div></div>
      <div class="col"><div class="workshop-about">{{$t("workshop1.type")}}</div></div>
    </div>
    <div class="img-container"><img class="img-child" src="../../assets/workshop/beyond1.png"></div>

    <div class="flex-grid">
      <div class="col"><div class="workshop-about">{{$t("workshop1.about1")}}
      <br><br>
    {{$t("workshop1.about2")}}</div></div>
      <div class="col"><div class="workshop-info">{{$t("workshop1.aboutteacher1")}}<br><br>{{$t("workshop1.aboutteacher2")}}</div></div>
    </div>




    <!--- WORKSHOP 2 --->
    <div class="seperator"></div>
        <div class="flex-grid">
          <div class="col"><div class="workshop-title">{{$t("workshop2.title")}}</div></div>
        <div class="col"><div class="workshop-about">{{$t("workshop2.teacher1")}}<br>{{$t("workshop2.teacher2")}}</div></div>
          <div class="col"><div class="workshop-about">{{$t("workshop2.type")}}</div></div>
        </div>
        <div class="img-container"><img class="img-child" src="../../assets/workshop/imaginingsounds.jpg"></div>

        <div class="flex-grid">
          <div class="col"><div class="workshop-about">{{$t("workshop2.about")}}</div></div>
          <div class="col"><div class="workshop-info">{{$t("workshop2.aboutteacher1")}}<br><br>{{$t("workshop2.aboutteacher2")}}</div></div>
        </div>

        <!--- WORKSHOP 3 --->
        <div class="seperator"></div>

            <div class="flex-grid">
              <div class="col"><div class="workshop-title">{{$t("workshop3.title")}}</div></div>
            <div class="col"><div class="workshop-about">{{$t("workshop3.teacher1")}}<br>{{$t("workshop3.teacher2")}}</div></div>
              <div class="col"><div class="workshop-about">{{$t("workshop3.type")}}</div></div>
            </div>
            <div class="img-container"><img class="img-child" src="../../assets/workshop/ruralwaysofpaintandprint.jpeg"></div>

            <div class="flex-grid">
              <div class="col"><div class="workshop-about">{{$t("workshop3.about")}}</div></div>
              <div class="col"><div class="workshop-info">{{$t("workshop3.aboutteacher1")}}<br><br>{{$t("workshop3.aboutteacher2")}}</div></div>
            </div>

            <!--- WORKSHOP 4 --->
            <div class="seperator"></div>

                <div class="flex-grid">
                  <div class="col"><div class="workshop-title">{{$t("workshop4.title")}}</div></div>
                <div class="col"><div class="workshop-about">{{$t("workshop4.teacher")}}</div></div>
                  <div class="col"><div class="workshop-about">{{$t("workshop4.type")}}</div></div>
                </div>
                <div class="img-container"><img class="img-child" src="../../assets/workshop/newmovement1.png"></div>

                <div class="flex-grid">
                  <div class="col"><div class="workshop-about">{{$t("workshop4.about")}}</div></div>
                  <div class="col"><div class="workshop-info">{{$t("workshop4.aboutteacher")}}</div></div>
                </div>

                <!--- WORKSHOP 5 --->
                <div class="seperator"></div>

                    <div class="flex-grid">
                      <div class="col"><div class="workshop-title">{{$t("workshop5.title")}}</div></div>
                    <div class="col"><div class="workshop-about">{{$t("workshop5.teacher1")}}<br>{{$t("workshop5.teacher2")}}</div></div>
                      <div class="col"><div class="workshop-about">{{$t("workshop5.type")}}</div></div>
                    </div>
                    <div class="img-container"><img class="img-child" src="../../assets/workshop/danceforcameraandkineticcinema1.jpg"></div>

                    <div class="flex-grid">
                      <div class="col"><div class="workshop-about">{{$t("workshop5.about")}}</div></div>
                      <div class="col"><div class="workshop-info">{{$t("workshop5.aboutteacher1")}}<br><br>{{$t("workshop5.aboutteacher2")}}</div></div>
                    </div>


                                    <!--- WORKSHOP 6 --->
                                    <div class="seperator"></div>

                                        <div class="flex-grid">
                                          <div class="col"><div class="workshop-title">{{$t("workshop6.title")}}</div></div>
                                        <div class="col"><div class="workshop-about">{{$t("workshop6.teacher1")}}<br>{{$t("workshop6.teacher2")}}</div></div>
                                          <div class="col"><div class="workshop-about">{{$t("workshop6.type")}}</div></div>
                                        </div>
                                        <div class="img-container"><img class="img-child" src="../../assets/workshop/lautarferd1.jpg"></div>

                                        <div class="flex-grid">
                                          <div class="col"><div class="workshop-about">{{$t("workshop6.about1")}}<br>{{$t("workshop6.about2")}}</div></div>
                                          <div class="col"><div class="workshop-info">{{$t("workshop6.aboutteacher1")}}<br><br>{{$t("workshop6.aboutteacher2")}}</div></div>
                                        </div>
                                        <div class="seperator"></div>



      <Footer />
  </div>

</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import Footer from "../shared/Footer";

//import Workshops from "../../test.md"
export default {
  name: "workshops",
  components: { Header, Headline, Footer },
  // props: {
  //   msg: String
  // },
  data() {
    return {
      title: "title.workshops"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-grid {
    display: flex;
    justify-content:space-between;
  }

  .flex-grid .col {
    flex: 1;
    margin:10px;
  }


  @media (max-width: 800px) {
    .flex-grid {
      display: block;
      .col {
        width: 100%;
        margin: 10px;
      }
    }
  }



.head-container {
  display: flex;
}



.seperator {
  width: 100%;
  border-top: 2px solid #000000;
}

.sub-text {
/* Headline 2 */
font-weight: 600;
font-size: 48px;
margin-left: 40px;
text-align: center;
color: #000000;
}


.table {
font-weight: 600;
font-size: 36px;
line-height: 43px;
padding: 15px 0 15px 0;
color: #000000;
text-align: center;
}

.workshoptable {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 10px;
}

.workshop-title {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  align-text: center;

}

.workshop-about {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

}

.workshop-info {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

}

a:hover {
  color: #00FF38;
}



.text{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
margin: 50px 50px 0 0px;
text-align: left;

}

.img-container {
display:flex;
flex-direction: column;
flex-wrap:wrap;
justify-content: center;
align-self: center;
}

.img-child {
max-width: 70%;
height: auto;
align-self: center;
margin:20px;
}

</style>
