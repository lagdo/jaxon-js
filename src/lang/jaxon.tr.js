/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: mic <info@joomx.com>
 * @copyright jaxon project
 * @license GNU/GPL
 * @package jaxon x.x.x
 * @since v.x.x.x
 * save as UTF-8
 */

if ('undefined' != typeof jaxon.debug) {
    /*
        Array: text
    */
    jaxon.debug.text = [];
    jaxon.debug.text[100] = 'IKAZ: ';
    jaxon.debug.text[101] = 'HATA: ';
    jaxon.debug.text[102] = 'XAJAX DEBUG (HATA AYIKLAMASI) MESAJI:\n';
    jaxon.debug.text[103] = '...\n[UZUN YANIT]\n...';
    jaxon.debug.text[104] = 'ISTEK GÖNDERILIYOR';
    jaxon.debug.text[105] = 'GÖNDERILDI [';
    jaxon.debug.text[106] = ' byte]';
    jaxon.debug.text[107] = 'ÇAGIRILIYOR: ';
    jaxon.debug.text[108] = 'URI: ';
    jaxon.debug.text[109] = 'ISTEK BASLATILIYOR';
    jaxon.debug.text[110] = 'PARAMETRELER ISLENIYOR [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'ISLENECEK PARAMETRE YOK';
    jaxon.debug.text[113] = 'ISTEK HAZIRLANIYOR';
    jaxon.debug.text[114] = 'XAJAX ÇAGRISI BASLATILIYOR (kullanimi tavsiye edilmiyor: yerine jaxon.request kullanin)';
    jaxon.debug.text[115] = 'XAJAX ISTEGI BASLATILIYOR';
    jaxon.debug.text[116] = 'Sunucudan gelen cevabi isleyecek cevap islemcisi yok.\n';
    jaxon.debug.text[117] = '.\nSunucudan gelen hata mesajlarini kontrol edin.';
    jaxon.debug.text[118] = 'ALINDI [durum: ';
    jaxon.debug.text[119] = ', boyut: ';
    jaxon.debug.text[120] = ' byte, süre: ';
    jaxon.debug.text[121] = 'ms]:\n';
    jaxon.debug.text[122] = 'Sunucu asagidaki HTTP durumunu gönderdi: ';
    jaxon.debug.text[123] = '\nALINDI:\n';
    jaxon.debug.text[124] = 'Sunucu su adrese yönlendirme istegi gönderdi :<br />';
    jaxon.debug.text[125] = 'TAMAMLANDI [';
    jaxon.debug.text[126] = 'ms]';
    jaxon.debug.text[127] = 'ISTEK NESNESI BASLATILIYOR';
    
    /*
        Array: exceptions
    */
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Geçersiz XML cevabi: Cevap bilinmeyen bir etiket tasiyor: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest hazir degil, jaxon nesnesi etkisizlestirildi.';
    jaxon.debug.exceptions[10003] = 'Islem kuyrugu fazla yüklendi: Kuyruk dolu oldugu için nesne kuyruga eklenemiyor.';
    jaxon.debug.exceptions[10004] = 'Geçersiz XML cevabi: Cevap bilinmeyen bir etiket veya metin tasiyor: {data}.';
    jaxon.debug.exceptions[10005] = 'Geçersiz istek URI: Geçersiz veya kayip URI; otomatik tespit yapilamadi; lütfen açikça bir tane belirleyiniz.';
    jaxon.debug.exceptions[10006] = 'Geçersiz cevap komutu: Bozulmus cevap komutu alindi.';
    jaxon.debug.exceptions[10007] = 'Geçersiz cevap komutu: [{data}] komutu bilinmiyor.';
    jaxon.debug.exceptions[10008] = '[{data}] ID li element dosya içinde bulunamadi.';
    jaxon.debug.exceptions[10009] = 'Geçersiz istek: Fonksiyon isim parametresi eksik.';
    jaxon.debug.exceptions[10010] = 'Geçersiz istek: Fonksiyon nesne parametresi eksik.';

    jaxon.debug.lang = {};
    jaxon.debug.lang.isLoaded = true;
}

if (typeof jaxon.config != 'undefined' && typeof jaxon.config.status != 'undefined') {
    /*
        Object: update
    */
    jaxon.config.status.update = function() {
        return {
            onRequest: function() {
                window.status = 'İstek Gönderiliyor...';
            },
            onWaiting: function() {
                window.status = 'Cevap Bekleniyor...';
            },
            onProcessing: function() {
                window.status = 'İşlem Devam Ediyor...';
            },
            onComplete: function() {
                window.status = 'Tamamlandı.';
            }
        }
    }
}