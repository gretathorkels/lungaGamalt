<template>
    <div class="shop">
        <Header v-bind:menu="'menu'"/>
        <Headline v-bind:title="title"/>
        <div class="viewcartcontainer">
            <div class="viewcartbutton">
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="encrypted"
                           value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                    <input type="image" :src="viewcart" style="height:60px;padding-top:5px" border="0" name="submit"
                           alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                         height="1">
                </form>
            </div>
        </div>


        <div class="text-container">
            <div class="sub-line">{{$t("shop.newcollection")}}</div>
            <div class="text-body">{{$t("shop.newcollectioninfo")}}</div>
        </div>

        <div class="newmerchcontainer">
            <div class="newmerchchild">
                <div class="text-container">
                    <div class="sub-line" >Socks<br>€15</div>
                    <form class="sock_form" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="BRW3HJWT897H6">
                        <table class="sock__table">
                            <tr>
                                <td>
                                    <input type="hidden" name="on0" value="Stærð-Size">
                                    Stærð-Size
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        <option value="EU 35-38">EU 35-38</option>
                                        <option value="EU 39-42">EU 39-42</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <input type="image" :src="addtocart" style="height: 60px;align-self: center;padding-top: 5px;margin-left: 40px;" border="0"
                               name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                             height="1">
                    </form>


                    <div class="img-container">
                        <img class="img-child" src="../../assets/webshop/20-socks.jpg">
                    </div>

                </div>
            </div>
            <div class="newmerchchild">
                <div class="text-container">
                    <div class="sub-line">Baseball Cap<br>€20
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="4MG9TYZDDWWNJ">
                            <input type="image" :src="addtocart" style="height:60px;padding-top:5px" border="0"
                                   name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                                 width="1"
                                 height="1">
                        </form>
                    </div>
                    <div class="img-container">
                        <img class="img-child" src="../../assets/webshop/20-cap.jpg">
                    </div>

                </div>
            </div>
          <!--  <div class="newmerchchild">
                <div class="text-container">
                    <div class="sub-line">Totebag<br>€15
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="4MG9TYZDDWWNJ">
                            <input type="image" :src="addtocart" style="height:60px;padding-top:5px" border="0"
                                   name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                                 width="1" height="1">
                        </form>
                    </div>
                    <div class="img-container">
                        <img class="img-child" src="../../assets/webshop/20-totebag.jpg">
                    </div>

                </div>
            </div>
            <div class="newmerchchild">
                <div class="text-container">
                    <div class="sub-line">A3 Poster<br>€10
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="E9434GRQT6H8J">
                            <input
                                    type="image" :src="addtocart" style="height:60px;padding-top:5px" border="0"
                                    name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                                 width="1" height="1">
                        </form>
                    </div>
                    <div class="img-container">
                        <img class="img-child" src="../../assets/webshop/20-poster.jpg">
                    </div>
                </div>
            </div>-->

        </div>
        <div class="text-container">

            <div class="sub-line"><br>{{$t("shop.archiveinfo")}}</div>
        </div>
        <div class="text-container">
            <div class="text-body">{{$t("shop.firstinfo")}}</div>
        </div>


        <table>
            <template v-for="shopitem in shopitems">
                <tr v-bind:key="shopitem.id+100" class="shopitem__year">
                    <th>{{shopitem.year}}</th>
                </tr>

                <template v-for="item in shopitem.items">
                    <tr
                            v-bind:key="item.id"
                            @click="toggle(item.id, shopitem.id, item.index )"
                            :class="{ opened: opened.includes(item.id) }"
                    >
                        <td class="border-bottom normal">
                            <img :src="item.mainImage" width="50"/>
                        </td>
                        <td class="border-bottom name">{{item.name}}</td>

                        <td class="border-bottom normal" id="small">{{item.price}}</td>
                    </tr>

                    <tr class="border" v-if="opened.includes(item.id)" v-bind:key="item.id2">
                        <td class="border-top" colspan="2">
                            <div class="card-img">
                                <img :src="currentImage"/>
                                <div v-if="item.images.length > 1" class="actions">
									<span @click="prevImage" class="prev">
										<i class="fa fa-chevron-left"></i>
									</span>
                                    <span @click="nextImage" class="next">
										<i class="fa fa-chevron-right"></i>
									</span>
                                </div>
                            </div>

                            <div class="text">{{item.underImgText}}</div>
                        </td>
                        <td class="border-top" colspan="2">
                            {{item.descr1}}
                            <br/>
                            <br/>
                            {{item.descr2}}
                            <br/>
                            <br/>
                            {{item.price}}
                            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="hosted_button_id" :value="item.value"/>
                                <table v-if="item.dropdownMenu">
                                    <tr>
                                        <td class="text_dropdown">
                                            <input type="hidden" name="on0" :value="item.dropdowndefaultText"/>{{item.dropdowndefaultText}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td classs="text_dropdown">
                                            <select name="os0">
                                                <template v-for="option in item.dropdown">
                                                    <option :value="option" v-bind:key="option+120">{{option}}
                                                    </option>
                                                </template>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                                <input
                                        type="image"
                                        :src="addtocart"
                                        style="height:60px;padding-top:5px"
                                        border="0"
                                        name="submit"
                                        alt="PayPal - The safer, easier way to pay online!"
                                />
                            </form>
                        </td>
                    </tr>
                </template>
            </template>

        </table>

        <div class="text-container">
            <div class="sub-line">{{$t("shop.para1")}}</div>
            <div class="text-body">{{$t("shop.para2")}}</div>
        </div>
        <Footer />
    </div>


</template>

<script>
    import Header from "../shared/Header";
    import Headline from "../shared/Headline";
    import Footer from "../shared/Footer";

    export default {
        name: "Shop",
        components: { Header, Headline, Footer },
        data() {
            return {
                title: "title.shop",
                activeImage: 0,
                activeItem: 0,
                activeShop: 0,
                opened: [],
                addtocart: require("../../assets/components/addtocart.png"),
                viewcart: require("../../assets/components/viewcart.png"),
                shopitems: [
                    {
                        year: 2020,
                        id: 1,
                        items: [
                            {
                                index: 0,
                                id: 1,
                                id2: "1b",
                                name: "Vildi að ég væri á LungA",
                                price: "€15",
                                value: "BRW3HJWT897H6",
                                descr1: "Hvítir og neon-appelsínugulir íþróttasokkar",
                                descr2: "White and neon-orange tennis socks",
                                mainImage: require("../../assets/webshop/20-socks.jpg"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/20-socks.jpg")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: " Stærð-Size",

                                dropdown: [
                                    "EU 35–38",
                                    "EU 39–43"
                                ]
                            },
                            {
                                index: 1,
                                id: 2,
                                id2: "2b",
                                name: "Vildi að ég væri á LungA",
                                price: "€15",
                                value: "4MG9TYZDDWWNJ",
                                descr1: "Taupoki með neon-appelsínugulu silkiþrykki",
                                descr2: "Totebag with neon orange screenprint",
                                mainImage: require("../../assets/webshop/20-totebag.jpg"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/20-totebag.jpg")
                                    }
                                ]
                            },
                            {
                                index: 2,
                                id: 3,
                                id2: "3b",
                                name: "Vildi að ég væri á LungA",
                                price: "€20",
                                value: "KALYZSM2YAB2C",
                                descr1: "Hvít derhúfa með appelsínugulum ísaum",
                                descr2: "White baseball cap with orange embroidery ",
                                mainImage: require("../../assets/webshop/20-cap.jpg"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/20-cap.jpg")
                                    }
                                ]
                            },
                            {
                                index: 3,
                                id: 4,
                                id2: "4b",
                                name: "Vildi að ég væri á LungA",
                                price: "€15",
                                value: "E9434GRQT6H8J",
                                descr1: "Digital prentað A3 plakat á neon-appelsínugulan límmiðapappír",
                                descr2: "Digital printed A3 poster on neon-orange sticker paper",
                                mainImage: require("../../assets/webshop/20-poster.jpg"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/20-poster.jpg")
                                    }
                                ]
                            }
                            //{
                            //	index: 2,
                            //	id: 3,
                            //	id2: "3b",
                            //	name: "Vildi að ég væri á LungA",
                            //	price: "€15",
                            //	value: "BRW3HJWT897H6",
                            //	descr1: "Hvítir og neon-appelsínugulir íþróttasokkar",
                            //	descr2: "White and neon-orange tennis socks",
                            //	mainImage: require("../../assets/webshop/20-socks.png"),
                            //	images: [
                            //		{
                            //			id: 1,
                            //			img: require("../../assets/webshop/20-socks.png")
                            //		}
                            //	],
                            //	dropdownMenu: true,
                            //	dropdowndefaultText: "Stærð-Size",
                            //
                            //	dropdown: [
                            //		"EU 35-38",
                            //		"EU 39-42"
                            //	]
                            //}
                            //{
                            //	index: 3,
                            //	id: 4,
                            //	id2: "4b",
                            //	name: "Vildi að ég væri á LungA",
                            //	price: "€10",
                            //value: "4QV43PPAVP55Q",
                            //	descr1: "",
                            //	descr2: "",
                            //	descr3: "",
                            //	underImgText: "Wow so pretty",
                            //	mainImage: require("../../assets/webshop/20-socks.png"),
                            //	images: [
                            //		{
                            //			id: 1,
                            //			img: require("../../assets/webshop/20-socks.png")
                            //		},
                            //		{
                            //			id: 2,
                            //			img: require("../../assets/webshop/20-socks.png")
                            //		},
                            //		{
                            //			id: 3,
                            //			img: require("../../assets/webshop/20-socks.png")
                            //		}
                            //	]
                            //}
                        ]
                    },

                    {
                        year: 2019,
                        id: 2,
                        items: [
                            {
                                index: 0,
                                id: 5,
                                id2: "5b",
                                name: "Future Perspectives",
                                price: "€15",
                                value: "TY74Z2DF4CEAS",
                                descr1: "T-shirt, available in white and yellow from 2010",
                                descr2: "4000kr",

                                mainImage: require("../../assets/webshop/19-tshirt-black.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/19-tshirt-black.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/19-tshirt-black-detail1.png")
                                    },
                                    {
                                        id: 3,
                                        img: require("../../assets/webshop/19-tshirt-green.png")
                                    },
                                    {
                                        id: 4,
                                        img: require("../../assets/webshop/19-tshirt-green-detail1.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur-Colour | Stærð-Size",

                                dropdown: [
                                    "Svartur-Black | S",
                                    "Svartur-Black | L",
                                    "Svartur-Black | XL",
                                    "Grænn-Green | M",
                                    "Grænn-Green | L"
                                ]
                            },

                        ]
                    },

                    {
                        year: 2018,
                        id: 3,
                        items: [
                            {
                                index: 0,
                                id: 6,
                                id2: "6b",
                                name: "Gender",
                                price: "€12",
                                value: "9QZSMDAETZ9G6",
                                descr1: "Taupoki, með bláu eða ljós-bleiku silkiþrykki frá 2018.",
                                descr2: "Totebag, with blue or peach screenprint from 2018.",
                                mainImage: require("../../assets/webshop/18-totebag-blue-solid.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/18-totebag-blue-solid.png")
                                    },
                                    {
                                        id: 3,
                                        img: require("../../assets/webshop/18-totebag-peach-solid.png")
                                    },
                                    {
                                        id: 4,
                                        img: require("../../assets/webshop/18-totebag-peach-outline.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur-Colour | Týpa-Style",

                                dropdown: [
                                    "Blár-Blue | Solid",
                                    "Bleikur-Peach | Solid",
                                    "Bleikur-Peach | Outline"
                                ]
                            },


                            {
                                index: 1,
                                id: 7,
                                id2: "7b",
                                name: "Gender",
                                price: "€15",
                                value: "BJTWDHQ4BLGUG",
                                descr1: "T-bolur, með bláu eða svörtu silkiþrykki frá 2018.",
                                descr2: "T-shirt, with blue or black screenprint from 2018.",
                                mainImage: require("../../assets/webshop/18-tshirt-black-solid.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/18-tshirt-black-solid.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/18-tshirt-black-outline.png")
                                    },
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/18-tshirt-blue-solid.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/18-tshirt-blue-outline.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur-Colour | Týpa-Style | Stærð-Size",

                                dropdown: [
                                    "Svartur-Black | Solid | M",
                                    "Svartur-Black | Solid | L",
                                    "Svartur-Black | Solid | XL",
                                    "Svartur-Black | Outline | M",
                                    "Svartur-Black | Outline | L",
                                    "Svartur-Black | Outline | XL",
                                    "Blár-Blue | Solid | S",
                                    "Blár-Blue | Solid | M",
                                    "Blár-Blue | Solid | XL",
                                    "Blár-Blue | Outline | XL"
                                ]
                            }
                        ]
                    },

                    {
                        year: 2017,
                        id: 4,
                        items: [
                            {
                                index: 0,
                                id: 8,
                                id2: "8b",
                                name: "Ego",
                                price: "€12",
                                value: "PX3SPS7A4YPV4",
                                descr1: "Silkiþrykktur taupoki frá 2017.",
                                descr2: "Silkscreen printed totebag from 2017",
                                descr3: "2000 ISK",
                                mainImage: require("../../assets/webshop/17-totebag.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/17-totebag.png")
                                    }
                                ]
                            },
                            {
                                index: 1,
                                id: 9,
                                id2: "9b",
                                name: "Ego",
                                price: "€18",
                                value: "4NMBYS34PYD9N",
                                descr1: "Silkiþrykkt peysa frá 2017",
                                descr2: "Screenprinted sweatshirt from 2017",
                                descr3: "3000 ISK",
                                mainImage: require("../../assets/webshop/17-sweatshirt.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/17-sweatshirt.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Stærð-Size",

                                dropdown: [
                                    "S",
                                    "M"
                                ]
                            }
                        ]
                    },
                    {
                        year: 2015,
                        id: 5,
                        items: [
                            {
                                index: 0,
                                id: 10,
                                id2: "10b",
                                name: "The Power of Empathy",
                                price: "€12",
                                value: "LCXMHLAPKEQ4E",
                                descr1: "Silkiþrykktur taupoki frá 2015",
                                descr2: "Screenprinted totebag from 2015",
                                mainImage: require("../../assets/webshop/15-totebag.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/15-totebag.png")
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        year: 2013,
                        id: 6,
                        items: [
                            {
                                index: 0,
                                id: 11,
                                id2: "11b",
                                name: "Creative Communities",
                                price: "€10",
                                value: "Q8FVEF8T5NM7W",
                                descr1: "Offset prentað A3 plakat frá 2013",
                                descr2: "Offset printed A3 poster from 2013",
                                mainImage: require("../../assets/webshop/13-poster.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/13-poster.png")
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        year: 2011,
                        id: 7,
                        items: [
                            {
                                index: 0,
                                id: 12,
                                id2: "12b",
                                name: "Out of the Box",
                                price: "€15",
                                value: "Y85H3AKW34F72",
                                descr1: "Silkiþrykktur t-bolur frá 2011.",
                                descr2: "Silkscreen printed t-shirt from 2011.",
                                mainImage: require("../../assets/webshop/11-tshirt.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/11-tshirt.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Stærð-Size",

                                dropdown: [
                                    "S",
                                    "M",
                                    "L",
                                    "XL"
                                ]
                            }
                        ]
                    },
                    {
                        year: 2010,
                        id: 8,
                        items: [
                            {
                                index: 0,
                                id: 13,
                                id2: "13b",
                                name: "LungA Lengi Lifi!",
                                price: "€15",
                                value: "HWL9Q9Z9ADMTA",
                                descr1: "Silkiþrykktur t-bolur. Til í hvítum, gulum og svörtum.",
                                descr2: "Silkscreened t-shirt. Available in white, yellow and black.",
                                mainImage: require("../../assets/webshop/10-tshirt-lungalengilifi-white.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/10-tshirt-lungalengilifi-white.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/10-tshirt-lungalengilifi-yellow.png")
                                    },
                                    {
                                        id: 3,
                                        img: require("../../assets/webshop/10-tshirt-lungalengilifi-black.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur–Colour | Stærð-Size",

                                dropdown: [
                                    "Hvítur - White | M",
                                    "Hvítur - White | L",
                                    "Hvítur - White | XL",
                                    "Grár - Grey | L ",
                                    "Gulur - Yellow | S",
                                    "Gulur - Yellow | M",
                                    "Gulur - Yellow | L",
                                    "Gulur - Yellow | XL"
                                ]
                            },

                            {
                                index: 1,
                                id: 14,
                                id2: "14b",
                                name: "Hæ ég heiti LungA og ég er 10 ára",
                                price: "€15",
                                value: "MXQJF6J7WFGUN",
                                descr1: "Silkiþrykktur t-bolur from 2010. Til í hvítum og gulum.",
                                descr2: "Silkscreened t-shirt from 2010. Available in white and yellow.",
                                mainImage: require("../../assets/webshop/10-tshirt-10ara-white.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/10-tshirt-10ara-white.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/10-tshirt-10ara-yellow.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur-Colour | Stærð-Size",

                                dropdown: [
                                    "Hvítur-White | M",
                                    "Hvítur-White | L",
                                    "Gulur-Yellow | S",
                                    "Gulur-Yellow | L",
                                    "Gulur-Yellow | XL"
                                ]
                            },
                            {
                                index: 2,
                                id: 15,
                                id2: "15b",
                                name: "Mér leið eins og baðkari …",
                                price: "€15",
                                value: "T8K9WD7UU76P8",
                                descr1: "Silkiþrykktur t-bolur from 2010. Til í hvítum, gulum og svörtum.",
                                descr2: "Silkscreened t-shirt from 2010. Available in white and yellow.",
                                mainImage: require("../../assets/webshop/10-tshirt-badkar-white.png"),
                                images: [
                                    {
                                        id: 1,
                                        img: require("../../assets/webshop/10-tshirt-badkar-white.png")
                                    },
                                    {
                                        id: 2,
                                        img: require("../../assets/webshop/10-tshirt-badkar-yellow.png")
                                    },
                                    {
                                        id: 3,
                                        img: require("../../assets/webshop/10-tshirt-badkar-black.png")
                                    }
                                ],
                                dropdownMenu: true,
                                dropdowndefaultText: "Litur-Colour | Stærð-Size",

                                dropdown: [
                                    "Hvítur-White | S",
                                    "Hvítur-White | M",
                                    "Grár-Grey | L ",
                                    "Gulur-Yellow | S",
                                    "Gulur-Yellow | M",
                                    "Gulur-Yellow | L",
                                    "Gulur-Yellow | XL",
                                    "Svartur-Black | XL",
                                ]
                            }

                        ]
                    }
                ]
            };
        },
        computed: {
            currentImage() {
                return this.shopitems[this.activeShop].items[this.activeItem].images[
                        this.activeImage
                        ].img;
            }
        },
        methods: {
            nextImage() {
                var active = this.activeImage + 1;
                if (
                        active >=
                        this.shopitems[this.activeShop].items[this.activeItem].images.length
                ) {
                    active = 0;
                }
                this.activateImage(active);
            },
            prevImage() {
                var active = this.activeImage - 1;
                if (active < 0) {
                    active =
                            this.shopitems[this.activeShop].items[this.activeItem].images.length -
                            1;
                }
                this.activateImage(active);
            },
            activateImage(imgIndex) {
                this.activeImage = imgIndex;
            },
            resetActiveImg() {
                this.activeImage = 0;
            },
            updateActiveItem(item, inx) {
                this.activeItem = inx;
                this.activeShop = item - 1;
            },
            toggle(id, item, inx) {
                const index = this.opened.indexOf(id);
                this.opened = [];
                this.updateActiveItem(item, inx);
                this.resetActiveImg();
                if (index > -1) {
                    this.opened.splice(index, 1);
                } else {
                    this.opened.push(id);
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .headline {
        text-align: center;
    }
.sock_form{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
    .sub-line {
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .text-body {
        text-align: center;
    }

    .shopitem__year > th {
        padding-top: 10px;
        font-size: 48px;
    }

    .grid-container {
        align-content: center;
    }

    .text {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin: 0px 0px 0px 0px;
        text-align: center;
    }

    .dropdown {
        text-align: left;
    }

    img {
        max-width: 500px;
    }

    .img-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
    }

    .img-child {
        max-height: 80%;
        height: auto;
        align-self: center;
        margin: 0px;
    }

    th {
        /* border-bottom: solid 2px #000; */
        font-size: 30px;
        font-weight: 600;
        padding-left: 20px;
        text-align: left;
    }

    tr:hover > td.border-bottom {
        cursor: pointer;
        color: white;
        background-color: #000;
    }

    table {
        margin-top: 100px;
        border-spacing: 0;
        width: 100%;
    }

    td {
        padding-left: 20px;
        font-size: 2em;
        font-weight: 600;
    }

    #small {
        font-size: 1.5em;
    }

    td.border-bottom {
        border-top: solid 2px #000;
        padding-top: 10px;
    }

    .center {
        text-align: center;
    }

    .card-img {
        position: relative;
        margin-bottom: 15px;
    }

    .card-img > img {
        display: block;
        margin: 0 auto;
    }

    .actions {
        font-size: 1.5em;
        height: 2.5em;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #000;
    }

    .actions > span {
        cursor: pointer;
        transition: all 200ms;
    }

    .actions > span.prev {
        margin-left: 0px;
    }

    .actions > span.next {
        margin-right: 0px;
    }

    .actions > span:hover {
        color: #00ff38;
    }

    .text_dropdown {
        font-size: 1em;
    }

    td.text_dropdown {
        font-size: 1em;
    }
.sock__table{
    margin: 0;
}
    .viewcartcontainer {
        position: fixed;
        width: auto;
        height: 50px;
        top: 20%;
        right: 0;
        margin: 0 auto;
        display: flex; /* or inline-flex */
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        z-index: 1000;
    }

    .viewcartbutton {
        flex: none;
        align-self: center;
    }

    .newmerchcontainer {
        width: auto;
        flex-wrap: wrap;
        display: flex; /* or inline-flex */
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        z-index: 1000;
    }

    .newmerchchild {
        flex: none;
        align-self: center;
    }

</style>
