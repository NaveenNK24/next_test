import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (

    <>
    <Script id="id_without_strategy">
      {
        `console.log("id without strategy")`
      }
    </Script>

    <Script id="id_with_strategy" strategy="afterInteractive">
      {
        `console.log("id with strategy")`
      }
    </Script>

      <Script id="adroll-pixel" strategy="afterInteractive">
        {
          `
    adroll_adv_id = "VYRS2RCQKJDCJM6PMZS3KB";
    adroll_pix_id = "4MKESY7NCNAN7I37LSKIC7";
    adroll_version = "2.0";

    (function(w, d, e, o, a) {
        w.__adroll_loaded = true;
        w.adroll = w.adroll || [];
        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                + "/roundtrip.js";
        for (a = 0; a < w.adroll.f.length; a++) {
            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                    w.adroll.push([ n, arguments ])
                }
            })(w.adroll.f[a])
        }

        e = d.createElement('script');
        o = d.getElementsByTagName('script')[0];
        e.async = 1;
        e.src = roundtripUrl;
        o.parentNode.insertBefore(e, o);
    })(window, document);
    adroll.track("pageView");

          `
        }
      </Script>

      <Component {...pageProps} />
    </>

  )

}

export default MyApp
