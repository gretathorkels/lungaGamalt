<template>
	<div class="shop">
		<Header v-bind:menu="'menu'" />
		<Headline v-bind:title="title" />
		<div class="text-container">
			<div class="sub-line">{{$t("shop.firstinfo")}}</div>
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
						<img :src="item.mainImage" width="50" />
					</td>
					<td class="border-bottom name">{{item.name}}</td>
					<td class="border-bottom normal">{{item.stage}}</td>
				</tr>

				<tr class="border" v-if="opened.includes(item.id)" v-bind:key="item.id2">
					<td class="border-top" colspan="2">
						<div class="card-img">
							<img :src="currentImage" />
							<div v-if="item.images.length > 1" class="actions">
								<span @click="prevImage" class="prev">
									<i class="fa fa-chevron-left"></i>
								</span>
								<span @click="nextImage" class="next">
									<i class="fa fa-chevron-right"></i>
								</span>
							</div>
						</div>

						<div class="text"> {{item.underImgText}}</div>
					</td>
					<td class="border-top" colspan="2">
						{{item.descr1}}
						<br />
						<br />
						{{item.descr2}}
						<br />
						<br />
						{{item.descr3}}
						<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input type="hidden" name="hosted_button_id" :value="item.value" />
							<input
								type="image"
								src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
								border="0"
								name="submit"
								alt="PayPal - The safer, easier way to pay online!"
							/>
							<img
								alt
								border="0"
								src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
								width="1"
								height="1"
								style="width: 10px; height: 10px;"
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
	</div>
</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";

export default {
	name: "Shop",
	components: {
		Header,
		Headline
	},
	data() {
		return {
			title: "title.shop",
			activeImage: 0,
            activeItem: 0,
            activeShop: 0,
			opened: [],
			shopitems: [
				{
                    year: 2020,
                    id: 1,
					items: [
						{
                            index: 0,
							id: 1,
							id2: "1b",
							time: "2020",
							name: "Vildi að ég væri á LungA",
							stage: "Taupoki / Totebag",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/10-tshirt-1-white.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-1-white.jpg")
								},
								{
									id: 2,
									img: require("../../assets/webshop/10-tshirt-1-yellow.jpg")
								},
								{
									id: 3,
									img: require("../../assets/webshop/10-tshirt-1-white.jpg")
								}
							]
						},
						{
                            index: 1,
							id: 2,
							id2: "2b",
							time: "2020",
							name: "Vildi að ég væri á LungA",
							stage: "Derhúfa / Baseball cap",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/10-tshirt-1-white.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-1-white.jpg")
								},
								{
									id: 2,
									img: require("../../assets/webshop/10-tshirt-1-yellow.jpg")
								},
								{
									id: 3,
									img: require("../../assets/webshop/10-tshirt-1-white.jpg")
								}
							]
						}
					]
				},

				{
                    year: 2019,
                    id: 2,
					items: [
						{
                            index: 0,
							id: 3,
							id2: "3b",
							time: "2019",
							name: "wowowowo",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/19-tshirt-black.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/19-tshirt-black.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/19-tshirt-green.jpg")
								}
							]
						}
					]
				},
			
				{
                    year: 2018,
                    id: 3,
					items: [
                        {
                            index: 0,
							id: 4,
							id2: "4b",
							time: "2018",
							name: "~~~~~",
							stage: "Totebag",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/18-totebag-blue.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-totebag-blue.jpg")
								}
							]
						},
						{
                            index: 1,
							id: 5,
							id2: "5b",
							time: "2018",
							name: "~~~~~",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/18-totebag-blue.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-totebag-blue.jpg")
								}
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
							id: 6,
							id2: "6b",
							time: "2017",
							name: "Thumbs up",
							stage: "Taupoki/Totebag",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/17-totebag.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/17-totebag.jpg")
								}
							]
						},
						{
                            index: 0,
							id: 7,
							id2: "7b",
							date: "",
							time: "2017",
							name: "Thumbs up",
							stage: "Sweatshirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/17-sweatshirt.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/17-sweatshirt.jpg")
								}
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
							id: 8,
							id2: "8b",
							date: "",
							time: "2015",
							name: "2015 LungA",
							stage: "Taupoki / Totebag",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
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
                    year: 2011,
                    id: 6,
					items: [
						{
                            index: 0,
							id: 9,
							id2: "9b",
							date: "",
							time: "2011",
							name: "2011 LungA",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/11-tshirt.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/11-tshirt.jpg")
								}
							]
						}
					]
				},
				{
                    year: 2010,
                    id: 7,
					items: [
						{
                            index: 0,
							id: 10,
							id2: "10b",
							date: "",
							time: "2010",
							name: "LungA Lengi Lifi!",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/10-tshirt-3-yellow.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-3-yellow.jpg")
								},
								{
									id: 2,
									img: require("../../assets/webshop/10-tshirt-3-black.jpg")
								},
								{
									id: 3,
									img: require("../../assets/webshop/10-tshirt-3-white.jpg")
								}
							]
						},
						{
                            index: 1,
							id: 11,
							id2: "11b",
							date: "",
							time: "2010",
							name: "Hæ ég heiti LungA og ég er 10 ára",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
                            underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/10-tshirt-1-yellow.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-1-yellow.jpg")
								},
								{
									id: 2,
									img: require("../../assets/webshop/10-tshirt-1-white.jpg")
								}
							]
						},
						{
                            index: 2,
							id: 12,
							id2: "12b",
							time: "2010",
							name: "Mér leið eins og baðkari",
							stage: "T-shirt",
							value: "4QV43PPAVP55Q",
							descr1:
								"T-shirt available in black, yellow and grey from 2010, with the text:",
							descr2:
								"Mér leið einsog baðkari fullt af drullugu vatni er ég keyrði upp á fjallið frá Egilsstöðum í áttina til Seyðisfjarðar. Þegar ég kom niður hinn endann og sá fallegan sólbaðaðan bæinn bíða mín var eins og tappanum hefði skyndilega verið kippt úr",
                            descr3: "",
                            underImgText: "Wow so pretty",
                            
							mainImage: require("../../assets/webshop/10-tshirt-2-white.jpg"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-2-white.jpg")
								}
								// {
								//     id: 2,
								//     img: require("../../assets/webshop/10-tshirt-2-white.jpg"),

								// },
								// {
								//     id: 3,
								//     img: require("../../assets/webshop/10-tshirt-2-white.jpg"),

								// }
							]
						}
					]
				}
			]
		};
	},
	computed: {
		currentImage() {
			return this.shopitems[this.activeShop].items[this.activeItem].images[this.activeImage].img;
		}
	},
	methods: {
		nextImage() {
			var active = this.activeImage + 1;
			if (active >= this.shopitems[this.activeShop].items[this.activeItem].images.length) {
				active = 0;
			}
			this.activateImage(active);
		},
		prevImage() {
			var active = this.activeImage - 1;
			if (active < 0) {
				active = this.shopitems[this.activeShop].items[this.activeItem].images.length - 1;
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
.sub-line {
	text-align: center;
}
.shopitem__year > th {
    padding-top: 10px;
    font-size: 48px;
}
.grid-container {
    align-content: center;
}
.text{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
margin: 20px 0px 50px 0px;
text-align: center;

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
	max-width: 80%;
	height: auto;
	align-self: center;
	margin: 20px;
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
	font-size: 30px;
	font-weight: 600;
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
	height: 40px;
	position: absolute;
	top: 50%;
	margin-top: -20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #585858;
}

.actions > span {
	cursor: pointer;
	transition: all 250ms;
}

.actions > span.prev {
	margin-left: 5px;
}

.actions > span.next {
	margin-right: 5px;
}

.actions > span:hover {
	color: #eee;
}
</style>
