<template>
	<div class="shop">

		<Header v-bind:menu="'menu'" />
		<Headline v-bind:title="title" />
		<div class="viewcartcontainer">
			<div class="viewcartbutton">
			<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
				<input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
			</form>
			</div>
		</div>

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

						<td class="border-bottom normal" id="small">{{item.price}}</td>
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

							<div class="text">{{item.underImgText}}</div>
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
								<table v-if="item.dropdownMenu">
									<tr>
										<td class="text_dropdown">
											<input type="hidden" name="on0" :value="item.dropdowndefaultText" />{{item.dropdowndefaultText}}
										</td>
									</tr>
									<tr>
										<td classs="text_dropdown">
											<select name="os0">
                                                <template v-for="option in item.dropdown">
													<option :value="option" v-bind:key="option+120">{{option}}</option>
												</template>
											</select>
										</td>
									</tr>
								</table>
								<input
									type="image"
									src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
									style="height:40px;padding-top:5px"
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
							color: "Apelsínugult ⟡ Orange",
							name: "Vildi að ég væri á LungA",
							style: "Taupoki ⟡ Totebag",
							price: "2400 ISK",
							value: "HWL9Q9Z9ADMTA",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/20-totebag.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/20-totebag.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/20-totebag.png")
								},
								{
									id: 3,
									img: require("../../assets/webshop/20-totebag.png")
								}
                            ],
							dropdownMenu: true,
									dropdowndefaultText: "Litur  – Colour | Stærð - Size",
                            
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
							id: 2,
							id2: "2b",
							color: "Apelsínugult ⟡ Orange",
							name: "Vildi að ég væri á LungA",
							style: "Derhúfa ⟡ Baseball cap",
							price: "3200 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/20-cap.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/20-cap.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/20-cap.png")
								},
								{
									id: 3,
									img: require("../../assets/webshop/20-cap.png")
								}
							]
						},
						{
							index: 2,
							id: 3,
							id2: "3b",
							color: "Apelsínugult ⟡ Orange",
							name: "Vildi að ég væri á LungA",
							style: "Sokkar ⟡ Socks",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/20-socks.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/20-socks.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/20-socks.png")
								},
								{
									id: 3,
									img: require("../../assets/webshop/20-socks.png")
								}
							]
						},
						{
							index: 3,
							id: 4,
							id2: "4b",
							color: "Apelsínugult ⟡ Orange",
							name: "Vildi að ég væri á LungA",
							style: "A3 Prent",
							price: "10.000 ISK",

							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/20-socks.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/20-socks.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/20-socks.png")
								},
								{
									id: 3,
									img: require("../../assets/webshop/20-socks.png")
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
							id: 5,
							id2: "5b",
							color: "Svartur ⟡ Black",
							name: "Future Perspectives",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",

							value: "TY74Z2DF4CEAS",
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
									img: require("../../assets/webshop/19-tshirt-black-detail1.png")
								}
							],
							dropdownMenu: true,
							dropdowndefaultText: "Color | Size",

							dropdown: [
								"Black | S",
								"Black | L",
								"Black | XL",
								"Green | M",
								"Green | L"
							]
						},
						{
							index: 1,
							id: 6,
							id2: "6b",
							color: "Grænn ⟡ Green",
							name: "Future Perspectives",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",

							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/19-tshirt-green.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/19-tshirt-green.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/19-tshirt-green-detail1.png")
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
							id: 7,
							id2: "7b",
							name: "Gender",
							color: "Blár ⟡ Blue",
							style: "Taupoki ⟡ Totebag",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "Totebag from 2018, available in the following colours:",
							descr2: "Blue (solid), Peach (solid) and Peach (outline)",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/18-totebag-blue-solid.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-totebag-blue-solid.png")
								}
							]
						},
						{
							index: 1,
							id: 8,
							id2: "8b",
							name: "Gender",
							color: "Bleikur ⟡ Peach",
							style: "Taupoki ⟡ Totebag",
							price: "2400 ISK",

							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/18-totebag-peach-solid.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-totebag-peach-solid.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/18-totebag-peach-outline.png")
								}
							]
						},
						{
							index: 2,
							id: 9,
							id2: "9b",
							color: "Bleikur ⟡ Peach",
							name: "Gender",
							style: "Taupoki ⟡ Totebag",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/18-totebag-peach-outline.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-totebag-peach-outline.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/18-totebag-peach-outline.png")
								}
							]
						},
						{
							index: 3,
							id: 10,
							id2: "10b",
							color: "Svartur ⟡ Black",
							name: "Gender",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",

							value: "4QV43PPAVP55Q",
							descr1:
								"T-shirt with black screenprint, available in: Solid and Outline.",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/18-tshirt-black-solid.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-tshirt-black-solid.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/18-tshirt-black-outline.png")
								}
							]
						},
						{
							index: 4,
							id: 11,
							id2: "11b",
							color: "Blár ⟡ Blue",
							name: "Gender",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",

							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/18-tshirt-blue-solid.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/18-tshirt-blue-solid.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/18-tshirt-blue-outline.png")
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
							id: 12,
							id2: "12b",
							color: "Svart ⟡ Black",
							name: "Ego",
							style: "Taupoki ⟡ Totebag",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

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
							id: 13,
							id2: "13b",
							color: "Ýmsir ⟡ Various",
							name: "Ego",
							style: "Peysa ⟡ Sweatshirt",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/17-sweatshirt.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/17-sweatshirt.png")
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
							id: 14,
							id2: "14b",
							color: "",
							name: "The Power of Empathy",
							style: "",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "Taupoki frá 2015",
							descr2: "Taupoki ⟡ Totebag",
							descr3: "Litir / Colour: Ýmsir ⟡ Various",
							descr4: "2400 ISK",
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
							id: 15,
							id2: "15b",
							color: "Ýmsir ⟡ Various",
							name: "Creative Communities",
							style: "Plakat ⟡ Poster",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",
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
							id: 16,
							id2: "16b",
							date: "",
							color: "2011",
							name: "Out of the Box",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",
							value: "4QV43PPAVP55Q",
							descr1: "T-shirt, available in white and yellow from 2010",
							descr2: "4000kr",
							descr3: "",
							underImgText: "Wow so pretty",

							mainImage: require("../../assets/webshop/11-tshirt.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/11-tshirt.png")
								}
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
							id: 17,
							id2: "17b",
							name: "LungA Lengi Lifi!",
							price: "2400 ISK",
							value: "HWL9Q9Z9ADMTA",
							descr1: "The Art of having fun! Listaveisla á Seyðisfirði! LungA fyrir unga fólkið! LungA: A Huge Little Festival! ",
							descr2: "Silkiþrykktur t-bolur. Til í hvítum, gulum og svörtum.",
							descr3: "Silkscreened t-shirt. Available in white, yellow and black.",
							underImgText: "The Art of Having Fun",

							mainImage: require("../../assets/webshop/10-tshirt-lungalengilifi-white.png"),
							images: [
								{
									id: 1,
									img: require("../../assets/webshop/10-tshirt-lungalengilifi-white.png")
								},
								{
									id: 2,
									img: require("../../assets/webshop/10-tshirt-lungalengilifi-yellow.png")
								}
							],
							dropdownMenu: true,
							dropdowndefaultText: "Litur  – Colour | Stærð - Size",

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
							id: 18,
							id2: "18b",
							color: "Hvítur ⟡ White",
							name: "Hæ ég heiti LungA og ég er 10 ára",
							style: "T-Bolur ⟡ T-shirt",
							price: "2400 ISK",
							value: "MXQJF6J7WFGUN",
							descr1: "Hæ ég heiti LungA og ég er 10 ára ",
							descr2: "Silkiþrykktur t-bolur. Til í hvítum og gulum.",
							descr3: "Silkscreened t-shirt. Available in white and yellow.",
							underImgText: "Hæ ég er 10 ára",

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
							id: 19,
							id2: "19b",
							name: "Mér leið eins og baðkari …",
							price: "2400 ISK",
							value: "T8K9WD7UU76P8",
							descr1:
								"T-shirt available in black, yellow and grey from 2010, with the text:",
							descr2:
								"Mér leið einsog baðkari fullt af drullugu vatni er ég keyrði upp á fjallið frá Egilsstöðum í áttina til Seyðisfjarðar. Þegar ég kom niður hinn endann og sá fallegan sólbaðaðan bæinn bíða mín var eins og tappanum hefði skyndilega verið kippt úr",
							descr3: "4000kr",
							underImgText: "Wow so pretty",

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


.text {
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #000000;
	margin: 20px 0px 50px 0px;
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
td.text_dropdown  {
    font-size: 1em;
}
.viewcartcontainer {
	position: fixed;
	width: auto;
	height: 50px;
	top: 10%;
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

</style>
