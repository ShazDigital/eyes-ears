import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

const TheSupplyLogo = () => {
  const pathRef = useRef(null)
  const [active, setActive] = useState(false)
  const [tween, setTween] = useState(null)

  useEffect(() => {
    let tl = gsap.timeline()
    const anim = tl
      .to(pathRef.current, {
        scale: 1.1,
        duration: 0.25,
      })
      .to(pathRef.current, {
        scale: 1,
      })

    setTween(anim)
  }, [pathRef, pathRef.current])

  useEffect(() => {
    if (!tween) return
    if (active && !tween.isActive()) {
      tween.play(0)
    } else if (!active) {
      // tween.pause()
    }
  }, [active, tween])
  return (
    <svg
      width="154"
      height="77"
      viewBox="0 0 154 77"
      xmlns="http://www.w3.org/2000/svg"
      className="footer-logo"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      ref={pathRef}
    >
      <path
        d="M102.715 38.4949C97.9071 38.4949 96.1587 41.5502 95.8309 43.1324H95.2299V40.459C95.2299 38.9314 94.3011 38.4949 93.263 38.4949C92.9899 38.4949 92.7167 38.5495 92.4435 38.6041L83.5379 40.3499V41.3865C83.5379 41.3865 86.215 42.2595 86.215 45.4238V66.0468C86.215 68.7747 84.1935 70.0841 84.1935 70.0841V71.3389H97.7432V70.0295C97.7432 70.0295 95.7216 68.8838 95.7216 66.0468V47.2788C95.7216 45.4238 96.5958 43.6234 98.672 43.6234C101.076 43.6234 102.223 46.024 102.223 50.716C102.223 55.1352 101.185 57.372 98.8359 57.9722C98.2349 58.1359 97.6885 58.1359 97.3061 58.1359C97.0329 58.1359 96.9236 58.1359 96.9236 58.1359V59.0633C96.9236 59.0633 98.2349 62.2277 102.442 62.2277C108.288 62.2277 112.112 56.0081 112.112 49.5702C112.058 44.0599 109.162 38.4949 102.715 38.4949ZM94.4104 34.294C102.824 34.294 105.611 27.8561 105.611 27.8561L104.846 27.0378C104.846 27.0378 101.841 29.1655 97.7978 29.1655C93.7001 29.1655 91.5693 26.1648 91.5693 20.8727C91.5693 16.3989 92.6074 14.3803 94.8475 14.3803C96.4865 14.3803 97.3607 15.5806 97.3607 17.2173C97.3607 21.0909 92.7167 21.1455 92.7167 21.1455V22.4003C92.7167 22.4003 95.2846 23.8734 99.1091 23.8734C103.316 23.8734 105.665 22.4003 105.665 18.854C105.665 14.3257 100.693 10.6703 94.7382 10.6703C87.7448 10.6703 81.8988 15.0895 81.8988 22.6731C81.9535 29.602 86.6521 34.294 94.4104 34.294ZM9.39733 36.5854C9.39733 35.8216 9.94369 34.1849 12.6208 34.1849C15.4619 34.1849 17.8659 36.4217 19.8327 38.113C21.2533 39.3133 22.2913 40.2408 22.2913 40.2408L23.548 39.8589L23.0016 31.0751C22.947 30.2021 22.1274 29.7657 21.4172 29.9293L18.4668 30.7477C18.4668 30.7477 15.6804 29.7657 12.0198 29.7657C8.46852 29.7657 5.57284 30.6931 3.33277 32.6027C1.14735 34.4576 0 36.8582 0 39.8589C0 50.8796 15.899 49.6794 15.899 54.6441C15.899 56.2809 14.4784 57.3175 12.0198 57.3175C9.56124 57.3175 7.53972 55.6807 5.90065 54.0986C3.76986 52.0799 1.91225 50.3341 1.91225 50.3341L0.327814 50.9342L0.983442 59.9363C1.03808 60.8092 1.80298 61.2457 2.56788 61.082L5.19039 60.4273C5.19039 60.4273 8.35925 61.8458 12.5116 61.8458C18.9586 61.8458 25.4056 58.245 25.4056 51.207C25.4056 40.6227 9.39733 42.0412 9.39733 36.5854ZM26.1705 9.19726C27.4271 7.23317 29.2301 7.23317 30.6506 7.23317H31.7433L31.6887 28.3471C31.6887 31.075 29.4486 32.6572 29.4486 32.6572V33.8575H44.2002V32.6572C44.2002 32.6572 41.9055 31.1842 41.9055 28.3471V7.23317H42.9982C44.3641 7.23317 46.2218 7.23317 47.4784 9.19726C47.9155 9.90652 50.4833 13.9984 50.4833 13.9984L52.6688 13.3982L51.6307 4.66894C51.5214 3.57778 50.5926 2.75941 49.4999 2.75941H24.149C23.0562 2.75941 22.1274 3.57778 22.0182 4.66894L20.9801 13.3982L23.1655 13.9984C23.1655 13.9984 25.7334 9.90652 26.1705 9.19726ZM54.7996 7.23317V28.9473C54.7996 31.6752 52.5595 32.7663 52.5595 32.7663V33.8575H65.672V32.7663C65.672 32.7663 63.9237 32.2208 63.9237 29.3838V18.6904C63.9237 17.1627 65.672 15.8533 66.9833 15.8533C69.2234 15.8533 70.3161 17.1082 70.3161 19.6724V29.3838C70.3161 32.1117 68.5677 32.7663 68.5677 32.7663V33.8575H81.8442V32.7663C81.8442 32.7663 79.4949 31.7297 79.4949 28.9473V19.727C79.4949 14.1075 76.927 10.7249 71.5181 10.7249C67.9667 10.7249 64.4701 12.6344 64.4701 15.3623H63.9237V4.01424V1.99559C63.9237 0.358851 62.831 -0.241288 61.0827 0.0860606L52.5595 1.77736L52.5049 2.75941C52.5049 2.75941 54.7996 4.0688 54.7996 7.23317ZM115.117 35.0578V56.4446C115.117 59.1725 112.877 60.2636 112.877 60.2636L112.823 61.6821H126.864V60.1545C126.864 60.1545 124.569 59.2816 124.569 56.4446V31.7843V29.7657C124.569 28.1289 123.422 27.5288 121.728 27.8561L112.823 29.602V30.6386C112.823 30.6386 115.117 31.948 115.117 35.0578ZM52.778 54.8624V40.5136C52.778 38.986 51.8492 38.4949 50.8111 38.4949C50.538 38.4949 50.2648 38.5495 49.9916 38.6041L40.7036 40.459V41.5502C40.7036 41.5502 43.3261 42.4231 43.3261 45.5875V54.8078C43.3261 55.9535 41.7416 56.8265 40.3211 56.8265C38.4635 56.8265 37.5347 55.5716 37.5347 53.0074V40.459C37.5347 38.9314 36.6059 38.4404 35.5678 38.4404C35.2946 38.4404 35.0214 38.4949 34.7483 38.5495L25.4056 40.4045V41.4956C25.4056 41.4956 28.0827 42.3686 28.0827 45.5329V53.553C28.0827 58.9542 30.9238 62.064 36.2781 62.064C39.9933 62.064 43.5446 60.0999 43.5446 56.9901H44.1456V59.718C44.1456 61.3002 45.0744 62.064 46.8774 62.064C51.4668 62.064 55.5098 58.736 55.5098 58.736V57.8085C55.5098 57.8085 52.778 57.754 52.778 54.8624ZM74.1952 38.4949C69.3873 38.4949 67.6389 41.5502 67.3111 43.1324H66.7101V40.459C66.7101 38.9314 65.7813 38.4949 64.7432 38.4949C64.4701 38.4949 64.1969 38.5495 63.9237 38.6041L55.0181 40.3499V41.3865C55.0181 41.3865 57.6952 42.2595 57.6952 45.4238V66.0468C57.6952 68.7747 55.6737 70.0841 55.6737 70.0841V71.3389H69.2234V70.0295C69.2234 70.0295 67.2018 68.8838 67.2018 66.0468V47.2788C67.2018 45.4238 68.076 43.6234 70.1522 43.6234C72.5561 43.6234 73.7035 46.024 73.7035 50.716C73.7035 55.1352 72.6654 57.372 70.3161 57.9722C69.7151 58.1359 69.1687 58.1359 68.7863 58.1359C68.5131 58.1359 68.4038 58.1359 68.4038 58.1359V59.0633C68.4038 59.0633 69.7151 62.2277 73.922 62.2277C79.768 62.2277 83.5925 56.0081 83.5925 49.5702C83.5379 44.0599 80.6422 38.4949 74.1952 38.4949ZM144.948 38.8769V39.8589C144.948 39.8589 146.424 41.1683 146.424 43.2415C146.424 43.9508 146.26 44.7146 145.932 45.6421L142.818 54.4259L139.43 44.7146C139.212 44.169 139.157 43.6234 139.157 43.1324C139.157 41.0592 140.741 39.8043 140.741 39.8043V38.8223H126.372V39.8043C126.372 39.8043 128.011 41.4411 129.323 44.3327C131.289 48.7519 132.328 54.3168 134.458 59.0633C135.333 61.0274 136.425 62.1186 139.485 62.1186C139.485 62.5005 135.496 71.6663 126.318 71.6663C118.505 71.6663 119.16 66.1559 113.97 66.1559C111.621 66.1559 109.927 68.2291 109.927 70.5205C109.927 75.2125 115.664 76.7947 121.728 76.7947C134.622 76.7947 140.796 69.8113 145.112 59.6089C147.407 54.2622 149.538 48.5336 151.559 43.4597C152.597 40.8409 153.799 39.8043 153.799 39.8043V38.8223H144.948V38.8769Z"
        fill="#162C29"
        id="supply"
      />
    </svg>
  )
}

export default TheSupplyLogo