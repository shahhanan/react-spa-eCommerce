let allProducts = [
{"id":1,"category":"Mobile","price":997,"company":"Oozz","model":"Aerio","image":"image1.jpg"},
{"id":2,"category":"Mobile","price":539,"company":"Blogtag","model":"7 Series","image":"image2.jpg"},
{"id":3,"category":"Mobile","price":463,"company":"Avamm","model":"xB","image":"image4.jpg"},
{"id":4,"category":"Mobile","price":779,"company":"Voomm","model":"Esprit","image":"image2.jpg"},
{"id":5,"category":"Mobile","price":445,"company":"Roodel","model":"Grand Cherokee","image":"image2.jpg"},
{"id":6,"category":"Mobile","price":630,"company":"Trunyx","model":"Town Car","image":"image4.jpg"},
{"id":7,"category":"Laptop","price":802,"company":"Lazz","model":"Vandura 3500","image":"image4.jpg"},
{"id":8,"category":"Mobile","price":839,"company":"Edgepulse","model":"XC90","image":"image1.jpg"},
{"id":9,"category":"Mobile","price":566,"company":"Quinu","model":"Savana 2500","image":"image4.jpg"},
{"id":10,"category":"Mobile","price":629,"company":"Twitterlist","model":"Firebird","image":"image5.jpg"},
{"id":11,"category":"Mobile","price":131,"company":"Blogpad","model":"Cougar","image":"image1.jpg"},
{"id":12,"category":"Mobile","price":298,"company":"Blogtags","model":"F350","image":"image3.jpg"},
{"id":13,"category":"Laptop","price":847,"company":"Oozz","model":"Cobalt","image":"image3.jpg"},
{"id":14,"category":"Mobile","price":459,"company":"Wikizz","model":"Escalade ESV","image":"image2.jpg"},
{"id":15,"category":"Laptop","price":828,"company":"Roodel","model":"B-Series","image":"image3.jpg"},
{"id":16,"category":"Laptop","price":481,"company":"Camimbo","model":"Armada","image":"image1.jpg"},
{"id":17,"category":"Mobile","price":102,"company":"Thoughtworks","model":"F-Series","image":"image3.jpg"},
{"id":18,"category":"Laptop","price":347,"company":"Tazzy","model":"Sebring","image":"image5.jpg"},
{"id":19,"category":"Laptop","price":677,"company":"Rhybox","model":"Skyhawk","image":"image2.jpg"},
{"id":20,"category":"Laptop","price":232,"company":"Zava","model":"190E","image":"image4.jpg"},
{"id":21,"category":"Laptop","price":250,"company":"Devpulse","model":"Reatta","image":"image4.jpg"},
{"id":22,"category":"Mobile","price":146,"company":"Wordpedia","model":"Express 3500","image":"image4.jpg"},
{"id":23,"category":"Laptop","price":300,"company":"Bubblebox","model":"Wrangler","image":"image1.jpg"},
{"id":24,"category":"Mobile","price":754,"company":"Camimbo","model":"LaCrosse","image":"image2.jpg"},
{"id":25,"category":"Laptop","price":587,"company":"Livetube","model":"Thunderbird","image":"image2.jpg"},
{"id":26,"category":"Laptop","price":764,"company":"Yoveo","model":"S80","image":"image4.jpg"},
{"id":27,"category":"Laptop","price":129,"company":"Oba","model":"Avalon","image":"image5.jpg"},
{"id":28,"category":"Mobile","price":363,"company":"Leexo","model":"Verano","image":"image5.jpg"},
{"id":29,"category":"Mobile","price":406,"company":"Zoozzy","model":"Escalade","image":"image2.jpg"},
{"id":30,"category":"Laptop","price":529,"company":"Browsezoom","model":"Freelander","image":"image4.jpg"},
{"id":31,"category":"Mobile","price":582,"company":"Avamba","model":"V8 Vantage","image":"image2.jpg"},
{"id":32,"category":"Mobile","price":360,"company":"Youtags","model":"ES","image":"image5.jpg"},
{"id":33,"category":"Mobile","price":950,"company":"Brightdog","model":"Boxster","image":"image1.jpg"},
{"id":34,"category":"Mobile","price":478,"company":"Blogtag","model":"Elantra","image":"image2.jpg"},
{"id":35,"category":"Mobile","price":179,"company":"Minyx","model":"Samurai","image":"image2.jpg"},
{"id":36,"category":"Mobile","price":637,"company":"Kwideo","model":"Pathfinder","image":"image5.jpg"},
{"id":37,"category":"Mobile","price":752,"company":"Voonte","model":"Grand Am","image":"image5.jpg"},
{"id":38,"category":"Laptop","price":408,"company":"Kwimbee","model":"Boxster","image":"image4.jpg"},
{"id":39,"category":"Laptop","price":166,"company":"Avaveo","model":"S-Class","image":"image3.jpg"},
{"id":40,"category":"Laptop","price":776,"company":"Buzzbean","model":"SC","image":"image3.jpg"},
{"id":41,"category":"Mobile","price":977,"company":"DabZ","model":"Impreza","image":"image1.jpg"},
{"id":42,"category":"Laptop","price":261,"company":"Wordtune","model":"F-Series","image":"image2.jpg"},
{"id":43,"category":"Mobile","price":171,"company":"Youopia","model":"Azure","image":"image1.jpg"},
{"id":44,"category":"Mobile","price":690,"company":"Flashpoint","model":"Parisienne","image":"image1.jpg"},
{"id":45,"category":"Laptop","price":226,"company":"Lazzy","model":"RL","image":"image5.jpg"},
{"id":46,"category":"Laptop","price":226,"company":"Leenti","model":"IS","image":"image3.jpg"},
{"id":47,"category":"Mobile","price":936,"company":"Demivee","model":"5 Series","image":"image2.jpg"},
{"id":48,"category":"Laptop","price":621,"company":"Miboo","model":"Voyager","image":"image2.jpg"},
{"id":49,"category":"Mobile","price":414,"company":"Lazzy","model":"Grand Prix","image":"image1.jpg"},
{"id":50,"category":"Laptop","price":574,"company":"Photolist","model":"Optima","image":"image1.jpg"},
{"id":51,"category":"Mobile","price":266,"company":"Kare","model":"Cavalier","image":"image3.jpg"},
{"id":52,"category":"Mobile","price":999,"company":"Eadel","model":"MKT","image":"image3.jpg"},
{"id":53,"category":"Laptop","price":332,"company":"Tagtune","model":"Ram 1500 Club","image":"image4.jpg"},
{"id":54,"category":"Mobile","price":627,"company":"Ozu","model":"Tahoe","image":"image3.jpg"},
{"id":55,"category":"Mobile","price":992,"company":"Jabbertype","model":"Maxima","image":"image1.jpg"},
{"id":56,"category":"Laptop","price":409,"company":"Gigaclub","model":"Town Car","image":"image5.jpg"},
{"id":57,"category":"Laptop","price":479,"company":"Kare","model":"Excel","image":"image5.jpg"},
{"id":58,"category":"Laptop","price":246,"company":"Thoughtmix","model":"SL-Class","image":"image1.jpg"},
{"id":59,"category":"Laptop","price":884,"company":"Brainbox","model":"i-280","image":"image3.jpg"},
{"id":60,"category":"Mobile","price":648,"company":"Plambee","model":"Sedona","image":"image1.jpg"},
{"id":61,"category":"Mobile","price":618,"company":"Thoughtbridge","model":"Sunbird","image":"image1.jpg"},
{"id":62,"category":"Mobile","price":192,"company":"Shufflester","model":"Savana 1500","image":"image4.jpg"},
{"id":63,"category":"Mobile","price":448,"company":"Aivee","model":"B-Series Plus","image":"image1.jpg"},
{"id":64,"category":"Laptop","price":599,"company":"Abatz","model":"Express 1500","image":"image2.jpg"},
{"id":65,"category":"Mobile","price":330,"company":"Mydeo","model":"Sentra","image":"image3.jpg"},
{"id":66,"category":"Laptop","price":657,"company":"Devcast","model":"Citation","image":"image1.jpg"},
{"id":67,"category":"Mobile","price":539,"company":"Bubbletube","model":"B-Series Plus","image":"image1.jpg"},
{"id":68,"category":"Laptop","price":627,"company":"Skalith","model":"MR2","image":"image4.jpg"},
{"id":69,"category":"Laptop","price":236,"company":"Yombu","model":"New Yorker","image":"image1.jpg"},
{"id":70,"category":"Laptop","price":291,"company":"Yodo","model":"Murano","image":"image3.jpg"},
{"id":71,"category":"Mobile","price":278,"company":"Skinix","model":"Thunderbird","image":"image1.jpg"},
{"id":72,"category":"Mobile","price":322,"company":"Linkbuzz","model":"RX-7","image":"image4.jpg"},
{"id":73,"category":"Laptop","price":411,"company":"Tanoodle","model":"Sonata","image":"image2.jpg"},
{"id":74,"category":"Mobile","price":136,"company":"Livetube","model":"Esprit","image":"image1.jpg"},
{"id":75,"category":"Laptop","price":588,"company":"Latz","model":"Suburban 2500","image":"image2.jpg"},
{"id":76,"category":"Mobile","price":573,"company":"Voomm","model":"Thunderbird","image":"image3.jpg"},
{"id":77,"category":"Laptop","price":900,"company":"Zoonder","model":"GS","image":"image2.jpg"},
{"id":78,"category":"Laptop","price":575,"company":"Wordify","model":"Mazdaspeed 3","image":"image1.jpg"},
{"id":79,"category":"Mobile","price":932,"company":"Blogtag","model":"Nitro","image":"image3.jpg"},
{"id":80,"category":"Laptop","price":349,"company":"Babbleopia","model":"929","image":"image1.jpg"},
{"id":81,"category":"Mobile","price":223,"company":"Chatterpoint","model":"Tundra","image":"image1.jpg"},
{"id":82,"category":"Laptop","price":409,"company":"Skynoodle","model":"F430","image":"image2.jpg"},
{"id":83,"category":"Mobile","price":451,"company":"Livetube","model":"Bonneville","image":"image3.jpg"},
{"id":84,"category":"Mobile","price":525,"company":"Tambee","model":"F-Series Super Duty","image":"image4.jpg"},
{"id":85,"category":"Mobile","price":167,"company":"Topiczoom","model":"Explorer Sport Trac","image":"image4.jpg"},
{"id":86,"category":"Mobile","price":163,"company":"Rooxo","model":"Neon","image":"image4.jpg"},
{"id":87,"category":"Mobile","price":313,"company":"Abatz","model":"Corvette","image":"image4.jpg"},
{"id":88,"category":"Laptop","price":194,"company":"Kamba","model":"Venture","image":"image5.jpg"},
{"id":89,"category":"Laptop","price":889,"company":"Yadel","model":"Frontier","image":"image3.jpg"},
{"id":90,"category":"Laptop","price":394,"company":"Quinu","model":"F150","image":"image3.jpg"},
{"id":91,"category":"Laptop","price":424,"company":"Voolith","model":"612 Scaglietti","image":"image5.jpg"},
{"id":92,"category":"Mobile","price":745,"company":"Photobean","model":"Malibu","image":"image3.jpg"},
{"id":93,"category":"Laptop","price":261,"company":"Tagtune","model":"Dakota","image":"image1.jpg"},
{"id":94,"category":"Laptop","price":423,"company":"Blognation","model":"911","image":"image1.jpg"},
{"id":95,"category":"Mobile","price":930,"company":"BlogXS","model":"Grand Am","image":"image4.jpg"},
{"id":96,"category":"Mobile","price":188,"company":"Jaxnation","model":"Veracruz","image":"image1.jpg"},
{"id":97,"category":"Mobile","price":801,"company":"Devpulse","model":"F150","image":"image1.jpg"},
{"id":98,"category":"Mobile","price":202,"company":"InnoZ","model":"Century","image":"image5.jpg"},
{"id":99,"category":"Laptop","price":634,"company":"Quaxo","model":"Accent","image":"image5.jpg"},
{"id":100,"category":"Laptop","price":199,"company":"Thoughtworks","model":"MKT","image":"image3.jpg"}]

export default allProducts;