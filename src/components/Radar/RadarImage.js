import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { MorphSVGPlugin } from 'gsap/all'

const RadarImage = () => {
  const circ1 = useRef(null)
  const circ2 = useRef(null)
  const circ3 = useRef(null)
  const circ4 = useRef(null)
  const circ5 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin)

    const circ4Path = MorphSVGPlugin.convertToPath(circ4.current)
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(circ1.current, {
      morphSVG: '#circ2',
      duration: 1,

      ease: 'back',
    })
      .to(
        circ2.current,
        {
          morphSVG: '#circ3',
          duration: 1,

          ease: 'back',
          delay: '0.04',
        },
        '-=0.95'
      )
      .to(
        circ3.current,
        {
          morphSVG: '#circ4',
          duration: 1,

          ease: 'back',
          delay: '0.08',
        },
        '-=0.9'
      )
      .to(
        circ4Path,
        {
          morphSVG: '#circ5',
          duration: 1,

          ease: 'easeInOut',
          delay: '0.12',
        },
        '-=0.85'
      )
  }, [])

  return (
    <svg
      width="1207"
      height="485"
      viewBox="0 0 1207 485"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: '100%', width: '100%' }}
    >
      <path
        d="M1034.35 182.687C1025.16 182.687 1021.82 188.535 1021.19 191.564H1020.04V186.446C1020.04 183.522 1018.26 182.687 1016.28 182.687C1015.76 182.687 1015.24 182.791 1014.71 182.896L997.69 186.238V188.222C997.69 188.222 1002.81 189.893 1002.81 195.95V235.426C1002.81 240.648 998.943 243.155 998.943 243.155V245.557H1024.84V243.05C1024.84 243.05 1020.98 240.857 1020.98 235.426V199.501C1020.98 195.95 1022.65 192.504 1026.62 192.504C1031.21 192.504 1033.41 197.099 1033.41 206.08C1033.41 214.539 1031.42 218.821 1026.93 219.97C1025.78 220.283 1024.74 220.283 1024.01 220.283C1023.49 220.283 1023.28 220.283 1023.28 220.283V222.059C1023.28 222.059 1025.78 228.116 1033.83 228.116C1045 228.116 1052.31 216.21 1052.31 203.887C1052.21 193.339 1046.67 182.687 1034.35 182.687ZM1018.47 174.645C1034.56 174.645 1039.88 162.322 1039.88 162.322L1038.42 160.756C1038.42 160.756 1032.68 164.828 1024.95 164.828C1017.12 164.828 1013.04 159.085 1013.04 148.954C1013.04 140.391 1015.03 136.527 1019.31 136.527C1022.44 136.527 1024.11 138.824 1024.11 141.957C1024.11 149.372 1015.24 149.477 1015.24 149.477V151.879C1015.24 151.879 1020.14 154.698 1027.46 154.698C1035.5 154.698 1039.99 151.879 1039.99 145.09C1039.99 136.422 1030.48 129.425 1019.1 129.425C1005.73 129.425 994.556 137.884 994.556 152.401C994.661 165.664 1003.64 174.645 1018.47 174.645ZM855.964 179.032C855.964 177.569 857.008 174.436 862.126 174.436C867.557 174.436 872.152 178.718 875.912 181.956C878.627 184.253 880.612 186.029 880.612 186.029L883.014 185.298L881.969 168.484C881.865 166.813 880.298 165.977 878.941 166.291L873.301 167.857C873.301 167.857 867.974 165.977 860.977 165.977C854.188 165.977 848.653 167.753 844.371 171.408C840.193 174.959 838 179.554 838 185.298C838 206.393 868.392 204.096 868.392 213.599C868.392 216.733 865.677 218.717 860.977 218.717C856.277 218.717 852.413 215.584 849.28 212.555C845.206 208.691 841.655 205.349 841.655 205.349L838.627 206.498L839.88 223.73C839.984 225.401 841.447 226.236 842.909 225.923L847.922 224.67C847.922 224.67 853.979 227.385 861.917 227.385C874.241 227.385 886.565 220.492 886.565 207.02C886.565 186.76 855.964 189.475 855.964 179.032ZM888.027 126.605C890.429 122.846 893.876 122.846 896.591 122.846H898.68L898.575 163.262C898.575 168.484 894.293 171.512 894.293 171.512V173.81H922.492V171.512C922.492 171.512 918.106 168.693 918.106 163.262V122.846H920.195C922.806 122.846 926.357 122.846 928.759 126.605C929.594 127.963 934.503 135.796 934.503 135.796L938.681 134.647L936.696 117.937C936.487 115.849 934.712 114.282 932.623 114.282H884.163C882.074 114.282 880.298 115.849 880.09 117.937L878.105 134.647L882.283 135.796C882.283 135.796 887.191 127.963 888.027 126.605ZM942.754 122.846V164.411C942.754 169.632 938.472 171.721 938.472 171.721V173.81H963.537V171.721C963.537 171.721 960.195 170.677 960.195 165.246V144.777C960.195 141.853 963.537 139.346 966.044 139.346C970.326 139.346 972.415 141.748 972.415 146.657V165.246C972.415 170.468 969.073 171.721 969.073 171.721V173.81H994.452V171.721C994.452 171.721 989.961 169.737 989.961 164.411V146.761C989.961 136.004 985.052 129.53 974.713 129.53C967.924 129.53 961.24 133.185 961.24 138.406H960.195V116.684V112.82C960.195 109.687 958.107 108.538 954.764 109.165L938.472 112.402L938.367 114.282C938.367 114.282 942.754 116.788 942.754 122.846ZM1058.06 176.107V217.046C1058.06 222.268 1053.77 224.356 1053.77 224.356L1053.67 227.072H1080.51V224.147C1080.51 224.147 1076.12 222.476 1076.12 217.046V169.841V165.977C1076.12 162.844 1073.93 161.695 1070.69 162.322L1053.67 165.664V167.648C1053.67 167.648 1058.06 170.155 1058.06 176.107ZM938.89 214.017V186.551C938.89 183.627 937.114 182.687 935.13 182.687C934.607 182.687 934.085 182.791 933.563 182.896L915.808 186.446V188.535C915.808 188.535 920.821 190.206 920.821 196.263V213.913C920.821 216.106 917.793 217.777 915.077 217.777C911.526 217.777 909.751 215.375 909.751 210.466V186.446C909.751 183.522 907.975 182.582 905.991 182.582C905.469 182.582 904.946 182.687 904.424 182.791L886.565 186.342V188.431C886.565 188.431 891.682 190.102 891.682 196.159V211.511C891.682 221.85 897.113 227.803 907.348 227.803C914.45 227.803 921.239 224.043 921.239 218.09H922.388V223.312C922.388 226.341 924.163 227.803 927.61 227.803C936.383 227.803 944.112 221.432 944.112 221.432V219.657C944.112 219.657 938.89 219.552 938.89 214.017ZM979.83 182.687C970.639 182.687 967.297 188.535 966.671 191.564H965.522V186.446C965.522 183.522 963.746 182.687 961.762 182.687C961.24 182.687 960.718 182.791 960.195 182.896L943.172 186.238V188.222C943.172 188.222 948.289 189.893 948.289 195.95V235.426C948.289 240.648 944.425 243.155 944.425 243.155V245.557H970.326V243.05C970.326 243.05 966.462 240.857 966.462 235.426V199.501C966.462 195.95 968.133 192.504 972.102 192.504C976.697 192.504 978.89 197.099 978.89 206.08C978.89 214.539 976.906 218.821 972.415 219.97C971.266 220.283 970.222 220.283 969.491 220.283C968.968 220.283 968.76 220.283 968.76 220.283V222.059C968.76 222.059 971.266 228.116 979.308 228.116C990.483 228.116 997.794 216.21 997.794 203.887C997.69 193.339 992.154 182.687 979.83 182.687ZM1115.08 183.418V185.298C1115.08 185.298 1117.9 187.804 1117.9 191.773C1117.9 193.13 1117.59 194.592 1116.96 196.368L1111.01 213.182L1104.53 194.592C1104.11 193.548 1104.01 192.504 1104.01 191.564C1104.01 187.595 1107.04 185.193 1107.04 185.193V183.313H1079.57V185.193C1079.57 185.193 1082.7 188.326 1085.21 193.861C1088.97 202.321 1090.95 212.973 1095.03 222.059C1096.7 225.818 1098.79 227.907 1104.64 227.907C1104.64 228.638 1097.01 246.183 1079.47 246.183C1064.53 246.183 1065.78 235.635 1055.86 235.635C1051.37 235.635 1048.13 239.604 1048.13 243.99C1048.13 252.971 1059.1 256 1070.69 256C1095.34 256 1107.14 242.632 1115.39 223.103C1119.78 212.868 1123.85 201.903 1127.72 192.19C1129.7 187.177 1132 185.193 1132 185.193V183.313H1115.08V183.418Z"
        fill="#162C29"
      />
      <rect
        x="2.5"
        y="2.5"
        width="1202"
        height="480"
        fill="#F7941D"
        stroke="black"
        strokeWidth="5"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1207"
        height="485"
      >
        <rect
          x="2.5"
          y="2.5"
          width="1202"
          height="480"
          fill="#F7941D"
          stroke="black"
          strokeWidth="5"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M611 40.5C805.128 40.5 962.5 197.872 962.5 392C962.5 586.128 805.128 743.5 611 743.5C416.872 743.5 259.5 586.128 259.5 392C259.5 197.872 416.872 40.5001 611 40.5Z"
          stroke="black"
          strokeWidth="5"
          id="circ1"
          ref={circ1}
        />
        <path
          d="M611 -38.5C848.759 -38.5 1041.5 154.241 1041.5 392C1041.5 629.759 848.759 822.5 611 822.5C373.241 822.5 180.5 629.759 180.5 392C180.5 154.242 373.241 -38.4999 611 -38.5Z"
          stroke="black"
          strokeWidth="5"
          id="circ2"
          ref={circ2}
        />
        <path
          d="M611 -114.5C890.732 -114.5 1117.5 112.268 1117.5 392C1117.5 671.732 890.732 898.5 611 898.5C331.268 898.5 104.5 671.732 104.5 392C104.5 112.268 331.268 -114.5 611 -114.5Z"
          stroke="black"
          strokeWidth="5"
          id="circ3"
          ref={circ3}
        />
        <circle
          cx="611"
          cy="392"
          r="589.5"
          transform="rotate(-90 611 392)"
          stroke="black"
          strokeWidth="5"
          id="circ4"
          ref={circ4}
        />
        <circle
          cx="611"
          cy="392"
          r="662.5"
          transform="rotate(-90 611 392)"
          stroke="black"
          strokeWidth="5"
          id="circ5"
          ref={circ5}
        />
      </g>
    </svg>
  )
}

export default RadarImage
