//Benzin İstasyonu 


/*
1-Dizel:24.53
2-Benzin:22.25
3-LPG :09.00

Gelen Müşterilerden Alacağımız Bilgiler :
1-Yakıt Türünüz:
2-Yüklenecek Yakıt Litresi:


*/

let Dızel = 24.53;
let Benzin = 22.25;
let LPG = 09.00;
const yeniSatır = "\r\n";

const YakıtMetnı = "1-Dizel" + yeniSatır
    + "2-Benzin" + yeniSatır
    + "3-LPG" + yeniSatır
    + "Yakıt Türünüzü Seçiniz"

let yakitTipi = prompt(YakıtMetnı);
let yakıtLitresi = Number(prompt("Yakıt Litresini Giriniz:"));
let bakiye = Number(prompt("Bakiyenizi Giriiniz"))
if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    if (yakitTipi == "1") {
        //Dizel
        let odenecekTutar = Dızel * yakıtLitresi;

        if (odenecekTutar < bakiye) {

            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi başarılı" + yeniSatır

                + "Kalan Bakiye:" + bakiye)
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatır
                + "Ödenecek tutar" + odenecekTutar + yeniSatır
                + "bakiye:" + bakiye + yeniSatır
                + "Eksik Tutar:" + (odenecekTutar - bakiye));
        }
    } else if (yakitTipi == "2") {
        //benzin
        let odenecekTutar = Benzin * yakıtLitresi;

        if (odenecekTutar < bakiye) {

            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi başarılı" + yeniSatır

                + "Kalan Bakiye:" + bakiye)
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatır
                + "Ödenecek tutar" + odenecekTutar + yeniSatır
                + "bakiye:" + bakiye + yeniSatır
                + "Eksik Tutar:" + (odenecekTutar - bakiye));
        }
    } else if (yakitTipi == "3") {
        //lpg
        let odenecekTutar = LPG * yakıtLitresi;

        if (odenecekTutar < bakiye) {

            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi başarılı" + yeniSatır

                + "Kalan Bakiye:" + bakiye)
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatır
                + "Ödenecek tutar" + odenecekTutar + yeniSatır
                + "bakiye:" + bakiye + yeniSatır
                + "Eksik Tutar:" + (odenecekTutar - bakiye));
        }
    } else {
        alert("Geçerli bir yakıt Türü seçiniz..")
    }
}