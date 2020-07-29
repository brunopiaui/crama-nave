<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div v-if="progressing" class="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width:15%;"
        width="295.285"
        height="83.624"
        viewBox="0 0 295.285 83.624"
      >
        <g fill="#f3f3f3">
          <path
            d="M146.951,21.7l1,1.3a1.293,1.293,0,0,0,.835.442,3.045,3.045,0,0,0,.305.021,1.567,1.567,0,0,0,1.09-.36,1.774,1.774,0,0,0,.468-1.41,8.5,8.5,0,0,0-1.161-3.91c-.255-.473-.519-.947-.784-1.42-.367-.648-.723-1.307-1.059-1.965a6.231,6.231,0,0,1-.8-3.385c.071-.864.387-1.194,1.2-1.276a9.868,9.868,0,0,1,1.66-.01,6.968,6.968,0,0,0,4.073-.957,1.293,1.293,0,0,0,.591-1.049,1.259,1.259,0,0,0-.7-.977c-.407-.175-.825-.309-1.242-.453l-.468-.154-3.33-.2-.255.041c-.132.021-.265.041-.407.062l-1.161.123c-.835.082-1.66.165-2.485.288a2.936,2.936,0,0,0-2.617,2.13,9.915,9.915,0,0,0-.377,2.984,10.206,10.206,0,0,0,2.169,5.556C144.609,18.668,145.8,20.211,146.951,21.7Z"
            transform="translate(2.588 0.177)"
          />
          <path
            d="M149.961,36.2a10.846,10.846,0,0,0-1.68,5.422,5.493,5.493,0,0,0-.041.679,6.112,6.112,0,0,0,1.324,4.352,7.722,7.722,0,0,0,3.737,1.8l.173.021c.214.031.5.062.876.082,1.629.072,4.786-.237,9.439-3.406a22.029,22.029,0,0,0,5.448-5.68c.214-.3.418-.576.6-.813.448-.6.916-1.2,1.364-1.729.468,2.953,1.578,6.307,4.155,7.357,1.151,1.214,2.627,1.657,5.519,1.708.244.021,5.967.329,21.679-4.455a.774.774,0,0,0,.519-.669,1.942,1.942,0,0,0-.53-1.615A1.712,1.712,0,0,0,201.16,39c-15.4,3.653-19.968,3.292-20.06,3.282-3.645.01-5.234-6.451-5.59-9.826-.051-1.1-.265-3.035-1.14-3.55l-.132-.082a5.032,5.032,0,0,0-2.973-.844c-.631-.01-2.709.257-2.953,4.1-1.975,3.961-6.67,11.483-10.682,12.192a3.254,3.254,0,0,1-2.556-.628,4.523,4.523,0,0,1-.234-1.862c.031-2.315,1.67-5.762,4.358-9.209.509-.576.947-1.1,1.252-1.512,2.149-2.428,3.574-3.313,4.022-3.406.1.082.275.257.346.329a3.555,3.555,0,0,0,2.546,1.3,2.564,2.564,0,0,0,1.833-1.049,3.367,3.367,0,0,0,.886-2.058,2.867,2.867,0,0,0-1.212-2.017,6.1,6.1,0,0,0-3.676-1.41c-3.645-.062-7.861,2.675-11.568,7.511A32.465,32.465,0,0,0,149.961,36.2Z"
            transform="translate(2.714 0.662)"
          />
          <path
            d="M84.931,38.571a6.946,6.946,0,0,0-2.8-.412.889.889,0,0,0-.652.237,1.038,1.038,0,0,0-.2,1.008,4.432,4.432,0,0,1-.794,3.344c-4.124,6.863-6.385,8.458-9.368,10.114a6.033,6.033,0,0,1-3.91.967,5.814,5.814,0,0,1-.244-1.718c-.1-3.529,3.218-9.034,6.385-12.419a7.238,7.238,0,0,1,2.637-2.109q.107.077.367.309a3.551,3.551,0,0,0,2.525,1.183h.071a2.663,2.663,0,0,0,1.792-1.152,3.4,3.4,0,0,0,.794-2.078,3.148,3.148,0,0,0-1.66-2.212,6.049,6.049,0,0,0-3.37-1c-3.645.093-7.739,3.015-11.242,7.995-3,4.27-4.959,9.2-4.867,12.275A6.111,6.111,0,0,0,61.9,57.194a4.8,4.8,0,0,0,3.33,1.327c.092,0,.173.01.275.01h.224c2.79-.072,7.647-1.2,9.653-3.992a47.189,47.189,0,0,0,5.743-5.69c.428-.607.855-1.224,1.273-1.77.764,2.9,3.065,6.832,5.784,7.8,1.4,1.348,3.808,1.492,5.814,1.523a6.234,6.234,0,0,0,3.941-1.646c1.415-1.173,3.228-4.568,5.163-8.159,2.311-4.311,5.489-10.227,7.087-9.847.937.216,1.018,4.7,1.069,7.665.081,4.589.163,8.6,1.863,9.353a2.022,2.022,0,0,0,1.13-.041c1.354-.391,3.676-1.471,4.267-3.653,1.548-5.762,6.8-13.684,8.38-15.68.306-.4.57-.751.8-1.06,1.354-1.811.835-1.8,3.309-2.274l.224-.041c.3-.051.479-.082.642-.113.428-.072.591-.1,2.1-.484-.153,1.821-.489,3.93-.815,6-.652,4.1-1.222,7.634-.428,10.2a3.419,3.419,0,0,0,2.22,3.046,6.38,6.38,0,0,0,4.542-.237c5.957-1.955,15.956-13.468,16.384-16.308a1.08,1.08,0,0,0-.265-1.1.618.618,0,0,0-.692-.021c-1.191.638-2.556,2.408-4.124,4.465-2,2.613-9.887,7.83-12.026,8.622-.55.206-.713.113-.723.113-.193-.1-.417-.751-.275-2.078a44.065,44.065,0,0,1,1.629-7.058c.937-3.272,1.741-6.1,1.3-7.624a3.731,3.731,0,0,0-2.535-2.922c-.642-.278-1.69-.226-3.6.34l-2.22.772c-2.515.9-3.941,1.08-5.142.875-1.823-.3-6.476-.731-7.362.926-.346.638-.092,1.379.733,2.171a5.62,5.62,0,0,0,2.118,1.049c-2.179,3.292-7.291,15.043-7.362,15.629s-.733,1.327-.825.617a29.262,29.262,0,0,1,.519-5.926c.183-1.451.377-2.963.458-4.383-.041-1.924-.1-4.548-1.242-6.266a5.744,5.744,0,0,0-4.2-2.3,2.944,2.944,0,0,0-2.413.7c-1.405,1.482-2.719,5.052-2.77,5.186-3.36,8.663-8.1,17.5-11.079,17.738a1.709,1.709,0,0,1-.224.01c-3.391,0-5.214-6.287-5.7-9.661-.041-.185-.061-.525-.092-.813a4.367,4.367,0,0,0-.153-1.07,1.867,1.867,0,0,0-.418-.638A5.289,5.289,0,0,0,84.931,38.571ZM82.65,46.021Z"
            transform="translate(1.109 0.738)"
          />
          <path
            d="M26.2,38.635c1.558,14.25,2.81,20.022,9.847,24.117a9.3,9.3,0,0,0,4.368.9c2.352-.051,5.967-.926,9.847-4.826,8.7-9.373,18.461-35.322,23.156-47.792l.071-.185c.642-1.708,1.2-3.179,1.639-4.311l.183-.494c.051-.206.193-.586.356-1.039C76.585,2.47,77.084.9,76.279.288c-1.293-.977-3.085.751-3.727,1.368l-.193.329c-.122.35-14.7,37.637-25.213,51.939-2.424,3.951-5.112,4.311-5.967,4.342a4.649,4.649,0,0,1-3.635-1.41c-3.228-2.829-6.924-10.68-6.161-32.04V24.8a56.428,56.428,0,0,1,1.538-9.6l.031-.123-.031-.123c-.193-.741-.631-2.469-2.067-2.7-2.108-.34-4.623,1.482-5.489,6.3a63.092,63.092,0,0,1-3.544,12.439c-.112.257-.8,1.657-1.782,3.6l-.153.309C17.28,40.158,12.423,49.912,9.674,56.024c-.071.134-8.2,17.419-9.613,23.438a3.038,3.038,0,0,0,1.191,3.313,2.583,2.583,0,0,0,1.354.35h.071c.071,0,.153-.01.224-.01A7.846,7.846,0,0,0,6.782,81.2l.224-.185.081-.278C11.6,66.189,23.919,41.115,25.742,37.586A5.479,5.479,0,0,1,26.2,38.635Z"
            transform="translate(0.005 0.005)"
          />
          <path
            d="M194.7,54.01l-1.252.01c-4.623.021-9.4.041-14.1.144-5.8.123-10.509.278-14.806.494-4.379.216-9.154.535-14.6.988-3.014.247-6.069.566-9.012.885l-2.963.309q-3.116.324-6.211.659c-1.466.154-2.922.319-4.389.473l-5.326.556-7.087.741c-2.688.278-5.387.566-8.075.864l-2.576.278c-2.7.288-5.489.586-8.207.988-1.9.278-3.8.576-5.7.875-4,.628-8.136,1.276-12.24,1.729-2.586.288-5.173.6-7.759.905-1.4.165-2.78.34-4.175.494l-4.256.494c-2.546.3-5.091.586-7.637.9-2.3.278-4.6.576-6.894.875-1.894.247-3.778.484-5.672.72a59.944,59.944,0,0,0-9.918,2.006A79.666,79.666,0,0,0,15.1,77.839a6.641,6.641,0,0,0-2.617,2.387l-.031.062v.9l.061.072a2.515,2.515,0,0,0,2.037.8h.132a8.436,8.436,0,0,0,3.574-.782c1.639-.772,3.228-1.595,4.755-2.4a57.3,57.3,0,0,1,9.114-4.054,81.327,81.327,0,0,1,14.113-2.788q3.727-.494,7.454-1,3.559-.478,7.118-.947c4.063-.535,8.289-1.07,12.566-1.595,2.77-.34,5.55-.658,8.319-.977l1.975-.226c1.731-.2,3.452-.4,5.183-.6l5.346-.617c.774-.093,1.558-.175,2.332-.268,2.077-.237,4.236-.473,6.344-.772,2.515-.35,5.02-.72,7.525-1.08,3.747-.556,7.627-1.122,11.456-1.605,5.865-.751,12.291-1.471,20.233-2.294,3.625-.37,7.332-.689,10.906-1q2.948-.247,5.906-.514l4.613-.432c2.037-.2,4.073-.391,6.11-.566,3.544-.3,7.352-.617,11.12-.854,3.686-.237,7.423-.422,11.1-.545,2.138-.072,4.317-.1,6.425-.123L201.147,56C201.116,55.955,214.445,54.669,194.7,54.01Z"
            transform="translate(0.233 1.566)"
          />
        </g>
        <g transform="translate(233.882 14.587)" fill="#f3f3f3">
          <path
            d="M3,0A6.021,6.021,0,0,1,6.754.971,3.3,3.3,0,0,1,7.988,3.728a3.862,3.862,0,0,1-.36,1.743A2.953,2.953,0,0,1,6.6,6.633a4.636,4.636,0,0,1-1.637.642,10.887,10.887,0,0,1-2.186.2H1.166v4.647H0V.329A8.254,8.254,0,0,1,1.449.078Q2.28,0,3,0Zm.051,1.023q-.651,0-1.106.043t-.78.078V6.451H2.64a11.736,11.736,0,0,0,1.706-.113,3.768,3.768,0,0,0,1.3-.416,2.091,2.091,0,0,0,.831-.841,2.857,2.857,0,0,0,.291-1.37,2.5,2.5,0,0,0-.317-1.318,2.353,2.353,0,0,0-.84-.824,3.653,3.653,0,0,0-1.191-.425A7.662,7.662,0,0,0,3.051,1.023ZM9.188,7.63a5.751,5.751,0,0,1,.334-2.055A4.536,4.536,0,0,1,10.4,4.11a3.441,3.441,0,0,1,1.234-.876,3.723,3.723,0,0,1,1.431-.286,3.323,3.323,0,0,1,2.6,1.075,4.832,4.832,0,0,1,.969,3.312q0,.139-.009.277t-.026.26H10.371a4,4,0,0,0,.806,2.532,2.988,2.988,0,0,0,2.4.884,4.8,4.8,0,0,0,1.44-.173,5.968,5.968,0,0,0,.771-.295l.206.971a4.6,4.6,0,0,1-.9.329,5.618,5.618,0,0,1-1.551.191,5.112,5.112,0,0,1-1.989-.347,3.56,3.56,0,0,1-1.354-.971,3.854,3.854,0,0,1-.771-1.483A6.972,6.972,0,0,1,9.188,7.63Zm6.291-.711a3.589,3.589,0,0,0-.651-2.185,2.1,2.1,0,0,0-1.749-.78,2.306,2.306,0,0,0-1.071.243,2.726,2.726,0,0,0-.823.65,3.029,3.029,0,0,0-.549.945,3.916,3.916,0,0,0-.231,1.127Zm3.634-3.451q.5-.139,1.337-.312a10.367,10.367,0,0,1,2.057-.173,4.239,4.239,0,0,1,1.689.295,2.6,2.6,0,0,1,1.08.841,3.451,3.451,0,0,1,.574,1.309,7.681,7.681,0,0,1,.171,1.682v5.012H24.908V7.474a8.586,8.586,0,0,0-.129-1.613,2.707,2.707,0,0,0-.429-1.075,1.668,1.668,0,0,0-.789-.6,3.544,3.544,0,0,0-1.226-.182,9.27,9.27,0,0,0-1.363.087,4.135,4.135,0,0,0-.746.156v7.873H19.114Zm11.571,7.855A3.463,3.463,0,0,0,32.27,11,1.121,1.121,0,0,0,32.9,9.919a1.581,1.581,0,0,0-.111-.624,1.227,1.227,0,0,0-.369-.468,3.154,3.154,0,0,0-.677-.4q-.42-.191-1.037-.451-.5-.208-.943-.425a3.855,3.855,0,0,1-.789-.5,2.191,2.191,0,0,1-.549-.685,2.1,2.1,0,0,1-.206-.971,2.189,2.189,0,0,1,.814-1.769,3.4,3.4,0,0,1,2.237-.676,6.011,6.011,0,0,1,1.5.156,4.724,4.724,0,0,1,.831.277l-.257,1.006a6.64,6.64,0,0,0-.694-.277,4.511,4.511,0,0,0-1.431-.173,3.122,3.122,0,0,0-.711.078,1.878,1.878,0,0,0-.591.243,1.294,1.294,0,0,0-.411.416,1.156,1.156,0,0,0-.154.616,1.323,1.323,0,0,0,.137.624,1.382,1.382,0,0,0,.4.46,3.425,3.425,0,0,0,.651.373q.386.173.883.382.514.208.986.425a3.641,3.641,0,0,1,.831.52,2.4,2.4,0,0,1,.583.728,2.281,2.281,0,0,1,.223,1.066,2.093,2.093,0,0,1-.9,1.838,4.256,4.256,0,0,1-2.46.624,6.11,6.11,0,0,1-1.783-.2,6.865,6.865,0,0,1-.823-.3L28.37,10.8a1.888,1.888,0,0,0,.223.113,4.659,4.659,0,0,0,.463.173,4.969,4.969,0,0,0,.694.165A5.562,5.562,0,0,0,30.685,11.324ZM35.673,7.63a5.751,5.751,0,0,1,.334-2.055,4.536,4.536,0,0,1,.874-1.465,3.441,3.441,0,0,1,1.234-.876,3.723,3.723,0,0,1,1.431-.286,3.323,3.323,0,0,1,2.6,1.075,4.832,4.832,0,0,1,.969,3.312q0,.139-.009.277t-.026.26H36.856a4,4,0,0,0,.806,2.532,2.988,2.988,0,0,0,2.4.884,4.8,4.8,0,0,0,1.44-.173,5.968,5.968,0,0,0,.771-.295l.206.971a4.6,4.6,0,0,1-.9.329,5.618,5.618,0,0,1-1.551.191,5.112,5.112,0,0,1-1.989-.347,3.56,3.56,0,0,1-1.354-.971,3.854,3.854,0,0,1-.771-1.483A6.972,6.972,0,0,1,35.673,7.63Zm6.291-.711a3.589,3.589,0,0,0-.651-2.185,2.1,2.1,0,0,0-1.749-.78,2.306,2.306,0,0,0-1.071.243,2.726,2.726,0,0,0-.823.65,3.028,3.028,0,0,0-.549.945,3.916,3.916,0,0,0-.231,1.127Z"
            transform="translate(0.48 0)"
          />
          <path
            d="M5.417,12.538a5.43,5.43,0,0,1-2.134-.416,4.854,4.854,0,0,1-1.714-1.214A5.763,5.763,0,0,1,.42,8.939,7.909,7.909,0,0,1,0,6.26,7.367,7.367,0,0,1,.454,3.581,5.967,5.967,0,0,1,1.663,1.613,4.986,4.986,0,0,1,3.411.408,5.418,5.418,0,0,1,5.486,0,7.83,7.83,0,0,1,6.7.087,6.552,6.552,0,0,1,8.365.564,3.061,3.061,0,0,1,8.811.8L8.434,1.821a6.77,6.77,0,0,0-1.089-.512,4.629,4.629,0,0,0-1.637-.251,4.626,4.626,0,0,0-1.946.382,3.846,3.846,0,0,0-1.4,1.075,4.676,4.676,0,0,0-.849,1.647,7.425,7.425,0,0,0-.283,2.116,7.649,7.649,0,0,0,.283,2.159,4.647,4.647,0,0,0,.831,1.639,3.676,3.676,0,0,0,1.346,1.04,4.349,4.349,0,0,0,1.826.364,7.041,7.041,0,0,0,1.894-.217,5.407,5.407,0,0,0,1.157-.442L8.9,11.827a1.975,1.975,0,0,1-.411.2,7.713,7.713,0,0,1-.737.234,7.972,7.972,0,0,1-1.029.2A9.878,9.878,0,0,1,5.417,12.538ZM18.411,7.8a5.858,5.858,0,0,1-.3,1.925,4.3,4.3,0,0,1-.84,1.474,3.893,3.893,0,0,1-5.811,0,4.3,4.3,0,0,1-.84-1.474,5.858,5.858,0,0,1-.3-1.925,5.858,5.858,0,0,1,.3-1.925A4.4,4.4,0,0,1,11.46,4.4a3.776,3.776,0,0,1,1.277-.954,4.091,4.091,0,0,1,3.257,0,3.776,3.776,0,0,1,1.277.954,4.4,4.4,0,0,1,.84,1.483A5.858,5.858,0,0,1,18.411,7.8Zm-1.183,0a4.267,4.267,0,0,0-.771-2.679,2.5,2.5,0,0,0-2.091-1,2.5,2.5,0,0,0-2.091,1A4.267,4.267,0,0,0,11.5,7.8a4.229,4.229,0,0,0,.771,2.671,2.512,2.512,0,0,0,2.091.988,2.512,2.512,0,0,0,2.091-.988A4.229,4.229,0,0,0,17.228,7.8Zm3.6-4.179q.5-.139,1.337-.312a10.367,10.367,0,0,1,2.057-.173,4.239,4.239,0,0,1,1.689.295,2.6,2.6,0,0,1,1.08.841,3.451,3.451,0,0,1,.574,1.309,7.681,7.681,0,0,1,.171,1.682v5.012H26.622V7.63a8.586,8.586,0,0,0-.129-1.613,2.707,2.707,0,0,0-.429-1.075,1.668,1.668,0,0,0-.789-.6,3.544,3.544,0,0,0-1.226-.182,9.27,9.27,0,0,0-1.363.087,4.135,4.135,0,0,0-.746.156v7.873H20.828ZM30.05,7.786a5.751,5.751,0,0,1,.334-2.055,4.536,4.536,0,0,1,.874-1.465,3.441,3.441,0,0,1,1.234-.876A3.723,3.723,0,0,1,33.925,3.1a3.323,3.323,0,0,1,2.6,1.075,4.832,4.832,0,0,1,.969,3.312q0,.139-.009.277t-.026.26H31.233a4,4,0,0,0,.806,2.532,2.988,2.988,0,0,0,2.4.884,4.8,4.8,0,0,0,1.44-.173,5.968,5.968,0,0,0,.771-.295l.206.971a4.6,4.6,0,0,1-.9.329,5.618,5.618,0,0,1-1.551.191,5.112,5.112,0,0,1-1.989-.347,3.56,3.56,0,0,1-1.354-.971,3.854,3.854,0,0,1-.771-1.483A6.972,6.972,0,0,1,30.05,7.786Zm6.291-.711A3.589,3.589,0,0,0,35.69,4.89a2.1,2.1,0,0,0-1.749-.78,2.306,2.306,0,0,0-1.071.243,2.726,2.726,0,0,0-.823.65,3.028,3.028,0,0,0-.549.945,3.916,3.916,0,0,0-.231,1.127Zm7.3,5.393a4.681,4.681,0,0,1-1.817-.329,3.419,3.419,0,0,1-1.311-.945,4.24,4.24,0,0,1-.8-1.474,6.215,6.215,0,0,1-.274-1.9A6.183,6.183,0,0,1,39.727,5.9,4.354,4.354,0,0,1,40.542,4.4a3.6,3.6,0,0,1,1.286-.962,4.1,4.1,0,0,1,1.7-.338,7.065,7.065,0,0,1,1.346.121,3.358,3.358,0,0,1,.969.312l-.291.971a3.572,3.572,0,0,0-.771-.277,5.059,5.059,0,0,0-1.149-.1,2.683,2.683,0,0,0-2.237.962,4.3,4.3,0,0,0-.763,2.731A5.886,5.886,0,0,0,40.8,9.286a2.965,2.965,0,0,0,.557,1.145,2.609,2.609,0,0,0,.994.746,3.662,3.662,0,0,0,1.483.269,3.822,3.822,0,0,0,1.209-.165,4.85,4.85,0,0,0,.711-.286l.24.971a4.15,4.15,0,0,1-.969.338A5.678,5.678,0,0,1,43.644,12.468Zm5.263-9.156h3.531v.954H48.907V9.035a4.9,4.9,0,0,0,.129,1.24,1.739,1.739,0,0,0,.369.737,1.166,1.166,0,0,0,.583.347,3.074,3.074,0,0,0,.754.087,3.215,3.215,0,0,0,1.131-.165,4.9,4.9,0,0,0,.669-.3l.274.936a4.006,4.006,0,0,1-.84.355,4.107,4.107,0,0,1-1.3.2,3.827,3.827,0,0,1-1.38-.217,2,2,0,0,1-.891-.659,2.718,2.718,0,0,1-.471-1.1,7.753,7.753,0,0,1-.137-1.561V.676L48.907.468Zm5.057,4.474A5.751,5.751,0,0,1,54.3,5.731a4.536,4.536,0,0,1,.874-1.465,3.442,3.442,0,0,1,1.234-.876A3.723,3.723,0,0,1,57.838,3.1a3.323,3.323,0,0,1,2.6,1.075A4.832,4.832,0,0,1,61.4,7.491q0,.139-.009.277t-.026.26H55.147a4,4,0,0,0,.806,2.532,2.988,2.988,0,0,0,2.4.884,4.8,4.8,0,0,0,1.44-.173,5.968,5.968,0,0,0,.771-.295l.206.971a4.6,4.6,0,0,1-.9.329,5.618,5.618,0,0,1-1.551.191,5.112,5.112,0,0,1-1.989-.347,3.56,3.56,0,0,1-1.354-.971A3.854,3.854,0,0,1,54.2,9.668,6.972,6.972,0,0,1,53.964,7.786Zm6.291-.711A3.589,3.589,0,0,0,59.6,4.89a2.1,2.1,0,0,0-1.749-.78,2.306,2.306,0,0,0-1.071.243,2.726,2.726,0,0,0-.823.65,3.028,3.028,0,0,0-.549.945,3.916,3.916,0,0,0-.231,1.127Z"
            transform="translate(0 18.098)"
          />
          <path
            d="M5.417,13.717A5.43,5.43,0,0,1,3.283,13.3a4.854,4.854,0,0,1-1.714-1.214A5.763,5.763,0,0,1,.42,10.118,7.909,7.909,0,0,1,0,7.439,7.367,7.367,0,0,1,.454,4.76,5.967,5.967,0,0,1,1.663,2.792,4.986,4.986,0,0,1,3.411,1.587a5.418,5.418,0,0,1,2.074-.408A7.83,7.83,0,0,1,6.7,1.266a6.552,6.552,0,0,1,1.663.477,3.061,3.061,0,0,1,.446.234L8.434,3a6.769,6.769,0,0,0-1.089-.512,4.629,4.629,0,0,0-1.637-.251,4.626,4.626,0,0,0-1.946.382,3.846,3.846,0,0,0-1.4,1.075,4.676,4.676,0,0,0-.849,1.647,7.425,7.425,0,0,0-.283,2.116,7.649,7.649,0,0,0,.283,2.159,4.647,4.647,0,0,0,.831,1.639,3.676,3.676,0,0,0,1.346,1.04,4.349,4.349,0,0,0,1.826.364,7.041,7.041,0,0,0,1.894-.217A5.407,5.407,0,0,0,8.571,12L8.9,13.006a1.975,1.975,0,0,1-.411.2,7.714,7.714,0,0,1-.737.234,7.974,7.974,0,0,1-1.029.2A9.879,9.879,0,0,1,5.417,13.717ZM17.5,13.145q-.5.139-1.337.312a10.367,10.367,0,0,1-2.057.173,4.126,4.126,0,0,1-1.663-.295,2.7,2.7,0,0,1-1.08-.832,3.391,3.391,0,0,1-.591-1.3,7.329,7.329,0,0,1-.18-1.682V4.491h1.114V9.156a8.063,8.063,0,0,0,.137,1.613,2.637,2.637,0,0,0,.446,1.066,1.741,1.741,0,0,0,.8.59,3.427,3.427,0,0,0,1.191.182,9.45,9.45,0,0,0,1.371-.087,3.653,3.653,0,0,0,.737-.156V4.491H17.5Zm5.194.468a3.735,3.735,0,0,1-.986-.147,1.756,1.756,0,0,1-.7-.4,1.7,1.7,0,0,1-.429-.694,3.329,3.329,0,0,1-.146-1.066V.208L21.548,0V11.272a2.345,2.345,0,0,0,.077.668.906.906,0,0,0,.231.4.935.935,0,0,0,.4.217,5.048,5.048,0,0,0,.591.121Zm3.171-9.121H29.4v.954H25.868v4.769A4.9,4.9,0,0,0,26,11.454a1.739,1.739,0,0,0,.369.737,1.166,1.166,0,0,0,.583.347,3.074,3.074,0,0,0,.754.087,3.215,3.215,0,0,0,1.131-.165,4.9,4.9,0,0,0,.669-.3l.274.936a4.006,4.006,0,0,1-.84.355,4.107,4.107,0,0,1-1.3.2,3.827,3.827,0,0,1-1.38-.217,2,2,0,0,1-.891-.659,2.718,2.718,0,0,1-.471-1.1,7.753,7.753,0,0,1-.137-1.561V1.855l1.114-.208Zm6.7,8.965H31.456V4.491H32.57Zm.257-11.671a.844.844,0,0,1-.24.633.843.843,0,0,1-1.166,0,.844.844,0,0,1-.24-.633.844.844,0,0,1,.24-.633.843.843,0,0,1,1.166,0A.844.844,0,0,1,32.827,1.786Zm5.366,10.457q.36-.746.737-1.708t.729-1.994q.351-1.032.651-2.081t.506-1.968H41.93q-.309,1.231-.686,2.428t-.8,2.341q-.42,1.145-.874,2.2t-.883,1.994H37.627q-.446-.936-.891-1.994t-.866-2.2q-.42-1.145-.8-2.341t-.686-2.428H35.57q.206.919.506,1.968t.651,2.081q.351,1.032.729,1.994T38.193,12.243Zm5.023-3.277A5.751,5.751,0,0,1,43.55,6.91a4.536,4.536,0,0,1,.874-1.465,3.442,3.442,0,0,1,1.234-.876,3.723,3.723,0,0,1,1.431-.286,3.323,3.323,0,0,1,2.6,1.075,4.832,4.832,0,0,1,.969,3.312q0,.139-.009.277t-.026.26H44.4A4,4,0,0,0,45.2,11.74a2.988,2.988,0,0,0,2.4.884,4.8,4.8,0,0,0,1.44-.173,5.968,5.968,0,0,0,.771-.295l.206.971a4.6,4.6,0,0,1-.9.329,5.618,5.618,0,0,1-1.551.191,5.112,5.112,0,0,1-1.989-.347,3.56,3.56,0,0,1-1.354-.971,3.854,3.854,0,0,1-.771-1.483A6.972,6.972,0,0,1,43.216,8.965Zm6.291-.711a3.589,3.589,0,0,0-.651-2.185,2.1,2.1,0,0,0-1.749-.78,2.306,2.306,0,0,0-1.071.243,2.726,2.726,0,0,0-.823.65,3.028,3.028,0,0,0-.549.945,3.916,3.916,0,0,0-.231,1.127Z"
            transform="translate(0 35.172)"
          />
        </g>
      </svg>
      <div class="loader1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="menuMobile" :class="{ menuMobOpen: menuMobisActive }">
      <div class="folhaMenuMob">
        <img src="./assets/images/elementointerna4_2.png" />
      </div>
      <div class="boxMenuMobile">
        <div class="topMenuMobile">
          <img class="logoMenu" src="./assets/images/logomenu.svg" />
          <img
            class="svgButton"
            src="./assets/images/buttonclosemenumob.svg"
            @click="cliqueCloseMenuMob"
          />
          <div class="listMenuMob">
            <nav>
              <ul>
                <li class="liDrop">
                  <span @click=";[(toggle = !toggle)], moveSetaMob()"
                    >O que fazemos</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    :class="{ setaUp: setaMouseUp }"
                    @click=";[(toggle = !toggle)], moveSetaMob()"
                  >
                    <path
                      d="M4,0,8,7H0Z"
                      transform="translate(8 7) rotate(180)"
                      fill="#586769"
                    />
                  </svg>
                </li>
                <li>
                  <transition name="slide-fade">
                    <div v-show="toggle" class="menuDropMob">
                      <ul>
                        <li>
                          <router-link to="/consultoria"
                            ><span @click="cliqueCloseMenuMob"
                              >Consultoria</span
                            ></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/novosnegocios"
                            ><span @click="cliqueCloseMenuMob"
                              >Novos negócios</span
                            ></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/biopaisagismo"
                            ><span @click="cliqueCloseMenuMob"
                              >Biopaisagismo</span
                            ></router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <li>
                  <router-link to="/bioviva"
                    ><span @click="cliqueCloseMenuMob"
                      >Bioviva</span
                    ></router-link
                  >
                </li>
                <li @click="cliqueCloseMenuMob">
                  <router-link to="/midia">Midia</router-link>
                </li>
                <li @click="cliqueCloseMenuMob">
                  <router-link to="/contato">Contato</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="bottomMenuMobile">
          <img src="./assets/images/fb_3.svg" />
          <img src="./assets/images/insta_3.svg" />
        </div>
      </div>
      <!-- boxMenuMobile -->
    </div>
    <!-- menuMobile -->

    <header class="top">
      <div class="logo">
        <div style="position:relative;">
          <router-link to="/">
            <img class="imgLogo" src="./assets/images/logo_home.svg" />
            <!-- <img
              style="position:absolute; display:block; top:0;"
              src="./assets/images/logo_int.svg"
            /> -->
          </router-link>
        </div>
        <div class="pccLogo">
          <span class="pccLogoPense" :class="{ pensecheck: penseisActive }"
            >Pense</span
          >
          <span
            class="pccLogoConecte"
            :class="{ conectecheck: conecteisActive }"
            >Conecte</span
          >
          <span
            class="pccLogoCultive"
            :class="{ cultivecheck: cultiveisActive }"
            >Cultive</span
          >
        </div> </div
      ><!-- logo -->
      <nav class="blockMenu">
        <a
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          @mouseover="mouseoverMenuDrop"
          @mouseleave="mouseleaveMenuDrop"
          >O que fazemos
          <!-- <img class="setaDrop" src="./assets/images/seta_dropdown.svg" /> -->
          <svg
            class="setaDrop"
            :class="{ setaBio: menuBioisActive }"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="7"
          >
            <path
              d="M4,0,8,7H0Z"
              transform="translate(8 7) rotate(180)"
              fill="#fff"
            />
          </svg>
          <div class="menuDropDown" :class="{ menuDropBio: menuBioisActive }">
            <router-link to="/consultoria">Consultoria</router-link>
            <router-link to="/novosnegocios">Novos negócios</router-link>
            <router-link to="/biopaisagismo">Biopaisagismo</router-link>
          </div>
        </a>
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/bioviva"
          >Bioviva</router-link
        >
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/midia"
          >Mídia</router-link
        >
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/contato"
          >Contato</router-link
        >
      </nav>

      <div class="som">
        <div
          class="areaHoverBt"
          @mouseover="hoverBt = true"
          @mouseleave="hoverBt = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            :class="{ svgSom: menuBioisActive }"
            @click="cliqueSom"
          >
            <g
              transform="translate(2 2.6)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            >
              <path
                d="M18.763,0S11.984,0,7.012,4.067-1.574,14.914.685,23.048s9.942,11.3,12.654,12.2,8.135,2.26,16.721-3.615S38.2,14.462,32.321,6.779C28.506,1.79,24.638,0,18.763,0Z"
                transform="translate(0.003)"
                class="pathBt"
                :class="{ hoverPathBtActive: hoverBt }"
              />
              <g transform="translate(8.401 9.412)" class="so">
                <g transform="translate(0 0)">
                  <g>
                    <path
                      d="M11.687,4.9h-.015c.006-1.352.015-2.693-.015-4.031A.883.883,0,0,0,10.234.183C9.4.8,8.623,1.5,7.854,2.136L5.075,4.443a1.343,1.343,0,0,1-.764.267c-1.082.03-2.165,0-3.247.018-.692.01-1.053.349-1.058,1Q0,7.131,0,8.538t.009,2.813c0,.646.366.984,1.058,1,1.082.017,2.165-.011,3.247.018a1.337,1.337,0,0,1,.764.267l2.779,2.307c.768.636,1.546,1.331,2.38,1.953a.883.883,0,0,0,1.423-.686c.03-1.338.019-2.679.015-4.031h.015V4.9Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(21.718 11.336)" opacity="1" class="so2">
                <path
                  class="cls-2"
                  d="M0,.837A4.669,4.669,0,0,1,.7,1.312,4.785,4.785,0,0,1,2.4,6.4C2.014,7.783,0,9.238,0,9.238"
                  transform="translate(0.003 1.439)"
                />
                <path
                  class="cls-2"
                  d="M0,.837a7.2,7.2,0,0,1,1.09.733A7.378,7.378,0,0,1,3.7,9.41C3.107,11.547,0,13.791,0,13.791"
                  transform="translate(2.302 -0.837)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!-- som -->
      <div class="buttonMenuMobile">
        <img
          src="./assets/images/buttonmenumob.svg"
          @click="cliqueOpenMenuMob"
        />
      </div>
    </header>

    <router-view class="router" />

    <footer class="bottom" :class="{ bottomMob: bottomMobIsActive }">
      <div class="share">
        <div><span>Contato.</span></div>
        <div class="fb">
          <img src="./assets/images/fb_2.svg" />
        </div>
        <div class="inst">
          <img src="./assets/images/insta_2.svg" />
        </div>
        <div class="mail">
          <img src="./assets/images/mail_2.svg" />
        </div>
      </div>
    </footer>
    <audio id="pageSound" controls autoplay loop>
      <source src="./assets/sounds/experience.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> </div
  ><!-- app -->
</template>



<script>
import { mapGetters, mapActions } from 'vuex'
import Preload from 'preload-it-extended-5'

const preload = Preload()

export default {
  name: 'App',
  data() {
    return {
      tl: null,
      cliqueSomAtivo: true,
      menuBioisActive: false,
      hoverBt: false,
      penseisActive: false,
      conecteisActive: false,
      cultiveisActive: false,
      menuMobisActive: false,
      toggle: false,
      setaMouseUp: false,
      bottomMobIsActive: false,
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'backgrounds',
      'nextBackground',
      'progressing',
      'progress',
    ]),
  },
  watch: {
    '$route.path': 'checkPath',
  },
  created() {
    this.checkPath()
    this.tl = this.$gsap.timeline()
    this.tlDropMenu = this.$gsap.timeline({ paused: true })
    this.startProgressingAction()
  },
  mounted() {
    if (!this.progressing) {
      this.$gsap.to('.loading', {
        duration: 1,
        opacity: 0,
        // delay: 10,
      })
    }
    setTimeout(() => this.checkSound(), 1000)

    this.tlsomOn = this.$gsap.timeline({ repeat: -1 })
    this.tlsomOn.to('.so2 path', {
      opacity: 0.3,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })
    this.tlsomOn.to('.so2 path', {
      opacity: 1,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })

    this.tlDropMenu
      .to('.setaDrop', {
        rotation: 180,
        duration: 0.5,
        scale: 1.2,
        ease: 'power1.out',
      })
      .to(
        '.menuDropDown',
        {
          visibility: 'visible',
          ease: 'power1.out',
        },
        '<'
      )
      .to(
        '.menuDropDown a',
        {
          opacity: 1,
          y: 10,
          ease: 'power1.out',
          stagger: 0.1,
          duration: 0.3,
        },
        '<'
      )
  },
  beforeMount() {
    preload.fetch([
      {
        url: require('@/assets/images/image00.jpg'),
        meta: { type: 'image', name: 'image00' },
      },
      {
        url: require('@/assets/images/image01.jpg'),
        meta: { type: 'image', name: 'image01' },
      },
      {
        url: require('@/assets/images/image02.jpg'),
        meta: { type: 'image', name: 'image02' },
      },
      {
        url: require('@/assets/images/imagebio.jpg'),
        meta: { type: 'image', name: 'imagebio' },
      },
      {
        url: require('@/assets/images/image03.jpg'),
        meta: { type: 'image', name: 'image03' },
      },
      {
        url: require('@/assets/videos/video01.mp4'),
        meta: { type: 'video', name: 'video01' },
      },
      {
        url: require('@/assets/images/image04.jpg'),
        meta: { type: 'video', name: 'image04' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_01.jpg'),
        meta: { type: 'image', name: 'j101' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_02.jpg'),
        meta: { type: 'image', name: 'j102' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_03.jpg'),
        meta: { type: 'image', name: 'j103' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_04_NAO.jpg'),
        meta: { type: 'image', name: 'j104' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_05.jpg'),
        meta: { type: 'image', name: 'j105' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_07.jpg'),
        meta: { type: 'image', name: 'j106' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_10_NAO.jpg'),
        meta: { type: 'image', name: 'j107' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_12_NAO.jpg'),
        meta: { type: 'image', name: 'j108' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_13.jpg'),
        meta: { type: 'image', name: 'j109' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_01.jpg'),
        meta: { type: 'image', name: 'j201' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_02.jpg'),
        meta: { type: 'image', name: 'j202' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_04.jpg'),
        meta: { type: 'image', name: 'j203' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_05.jpg'),
        meta: { type: 'image', name: 'j204' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_06.jpg'),
        meta: { type: 'image', name: 'j205' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_07.jpg'),
        meta: { type: 'image', name: 'j206' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_09.jpg'),
        meta: { type: 'image', name: 'j207' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_14.jpg'),
        meta: { type: 'image', name: 'j208' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_01.jpg'),
        meta: { type: 'image', name: 'j301' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_02.jpg'),
        meta: { type: 'image', name: 'j302' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_03.jpg'),
        meta: { type: 'image', name: 'j303' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_09.jpg'),
        meta: { type: 'image', name: 'j304' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_10.jpg'),
        meta: { type: 'image', name: 'j305' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_17.jpg'),
        meta: { type: 'image', name: 'j306' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0203.jpg'),
        meta: { type: 'image', name: 'j307' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0206.jpg'),
        meta: { type: 'image', name: 'j308' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0226.jpg'),
        meta: { type: 'image', name: 'j309' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0232.jpg'),
        meta: { type: 'image', name: 'j310' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0233.jpg'),
        meta: { type: 'image', name: 'j311' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0239.jpg'),
        meta: { type: 'image', name: 'j312' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_01.jpg'),
        meta: { type: 'image', name: 'j401' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_06.jpg'),
        meta: { type: 'image', name: 'j402' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_10.jpg'),
        meta: { type: 'image', name: 'j403' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_13.jpg'),
        meta: { type: 'image', name: 'j404' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0293.jpg'),
        meta: { type: 'image', name: 'j405' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0309.jpg'),
        meta: { type: 'image', name: 'j406' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0331.jpg'),
        meta: { type: 'image', name: 'j407' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0366.jpg'),
        meta: { type: 'image', name: 'j408' },
      },
    ])
    preload.onfetched = (item) => {
      this.addToBackgroundsAction({
        name: item.meta.name,
        type: item.meta.type,
        url: item.blobUrl,
      })
    }
    preload.onprogress = (event) => {
      this.setProgressAction(event.progress)
    }
    preload.oncomplete = (items) => {
      let nextBackground = this.backgrounds(this.$route.meta.image)
      this.setNextBackgroundAction(nextBackground)
      if (this.$route.name !== 'home') {
        if (this.progressing) {
          const loading = this.$gsap.timeline({ paused: true })
          loading.to('.loading', {
            duration: 1,
            opacity: 0,
            onComplete: () => {
              if (this.$route.name !== 'home') {
                this.stopProgressingAction()
              }
            },
          })
          loading.play()
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundsAction',
      'startProgressingAction',
      'stopProgressingAction',
      'setProgressAction',
      'setNextBackgroundAction',
    ]),

    checkSound() {
      let somcheck = document.getElementById('pageSound')
      if (!somcheck.paused) {
        this.$gsap.to('.so', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
      } else {
        this.cliqueSomAtivo = false
        this.$gsap.to('.so', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
      }
    },

    moveSetaMob() {
      this.setaMouseUp = !this.setaMouseUp
    },

    mouseoverMenuDrop() {
      this.tlDropMenu.play()
    },
    mouseleaveMenuDrop() {
      this.tlDropMenu.reverse()
    },

    cliqueSom: function() {
      let som = document.getElementById('pageSound')
      if (this.cliqueSomAtivo === true && som.play) {
        this.$gsap.to('.so', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
        som.pause()
        this.cliqueSomAtivo = false
      } else if (this.cliqueSomAtivo === false && som.paused) {
        this.$gsap.to('.so', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
        som.play()
        this.cliqueSomAtivo = true
      }
    },

    cliqueOpenMenuMob: function() {
      this.menuMobisActive = true
      this.$gsap.from('.folhaMenuMob', {
        x: 300,
        y: 800,
        ease: 'expo.out',
        duration: 1.5,
      })
    },
    cliqueCloseMenuMob: function() {
      this.menuMobisActive = false
      if (this.toggle === true) {
        this.toggle = false
        this.setaMouseUp = false
      } else {
        this.toggle = false
        this.setaMouseUp = false
      }
    },

    checkPath: function() {
      let route = this.$route.path
      if (route === '/consultoria') {
        this.penseisActive = true
      } else {
        this.penseisActive = false
      }
      if (route === '/modelodenegocios') {
        this.conecteisActive = true
      } else {
        this.conecteisActive = false
      }
      if (route === '/biopaisagismo') {
        this.cultiveisActive = true
      } else {
        this.cultiveisActive = false
      }

      if (route === '/bioviva') {
        this.menuBioisActive = true
      } else {
        this.menuBioisActive = false
      }

      if (route !== '/') {
        this.bottomMobIsActive = true
        this.tlMenuIn = this.$gsap.timeline()
        this.tlMenuIn
          .to(['header.top'], {
            y: -20,
            duration: 0.5,
            ease: 'power1.0ut',
          })
          .to(
            ['img.imgLogo'],
            {
              width: 123.56,
              duration: 0.5,
              ease: 'power1.out',
            },
            0
          )
          .to(['.pccLogo'], {
            width: 54,
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out',
          })
      } else {
        this.bottomMobIsActive = false
        this.tlMenuHome = this.$gsap.timeline()
        this.tlMenuHome
          .to(['.pccLogo'], {
            width: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.out',
          })
          .to(['header.top'], {
            y: 0,
            duration: 0.5,
            ease: 'power1.out',
          })
          .to(
            ['img.imgLogo'],
            {
              width: 147.11,
              duration: 0.5,
              ease: 'power1.out',
            },
            '<'
          )
      }
    },
  },
}
</script>

<style lang="scss">
$base-color: #fff;
$base-colorV1: #f3f3f3;
$base-colorV2: #e9e9e9;
$base-colorV3: #cbcbcb;

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

div.logo img.imgLogo {
  width: 147.11px;
}
div.pccLogo {
  display: flex;
  flex-direction: column;
  width: 0;
  padding: 7px 0 0 16px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  span {
    display: block;
    font-size: 10px;
  }
}

#app {
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: $base-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  div.backTop {
    position: fixed;
    top: 0;
    z-index: 998;
    width: 100%;
    height: 430px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0))
    );
  }

  header.top {
    position: fixed;
    z-index: 10;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    padding: 60px 3% 0 3%;

    nav.blockMenu {
      display: flex;
      flex-direction: row;
    }

    a.menu {
      padding: 0 52.5px;
      font-size: 16px;
      font-weight: 300;
      color: $base-color;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.5s;
    }
    a.menuBio {
      color: #586769;
    }
    a.menu:hover {
      color: $base-colorV2;
    }
    a.menuBio:hover {
      color: #a3a3a3;
    }
    .setaDrop {
      margin: 0 0 0 10px;
    }
    .menuDropDown {
      position: absolute;
      padding: 0 0 0 17px;
      visibility: hidden;
    }
    .menuDropDown a {
      display: block;
      margin: 0 0 6px 0;
      font-size: 14px;
      opacity: 0;
      transition: color 0.5s;
      transform: translate(0, -10px);
    }
    .menuDropDown a:hover {
      color: $base-colorV3;
    }
    .menuDropBio a {
      color: #586769 !important;
    }
    .menuDropBio a:hover {
      color: #a3a3a3 !important;
    }
    div.logo {
      display: flex;
      flex-direction: row;
      width: 194px;
    }
  }

  footer.bottom {
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    padding: 0 3% 35px 3%;

    div.share {
      display: flex;
      flex-direction: row;
      align-items: center;
      div span {
        font-size: 16px;
      }
      div.fb,
      div.inst,
      div.mail {
        padding: 0 13px 0 13px;
      }
    }
    div.ind {
      flex-grow: 1;
      background-color: aqua;
    }
    div.sound {
      display: flex;
      flex-direction: column;
      align-items: center;
      div.ative {
        padding-bottom: 60px;
        div.rotate {
          filter: progid:dximagetransform.microsoft.basicimage(rotation=3); // For IE support
          -webkit-transform: rotate(-90deg);
          -moz-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
      }
    }
  }
}
.svgSom path {
  stroke: #586769 !important;
}
.setaBio path {
  fill: #586769 !important;
}
.som svg {
  transition: all 0.2s ease-out;
}

div.som {
  width: 42px;
  height: 42px;
  position: relative;
  div.areaHoverBt {
    position: absolute;
    top: -28px;
    left: -26px;
  }
}

#pageSound {
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: none;
}

.loader1 {
  display: inline-block;
  padding: 20px 0 0 0;
  font-size: 0;
}
.loader1 span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 3px 2px;
  vertical-align: middle;
  border-radius: 100%;
  -webkit-animation: loader1 0.8s linear infinite alternate;
  animation: loader1 0.8s linear infinite alternate;
}
.loader1 span:nth-child(1) {
  background: rgba(255, 255, 255, 0.6);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.loader1 span:nth-child(2) {
  background: rgba(255, 255, 255, 0.8);
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.loader1 span:nth-child(3) {
  background: rgba(255, 255, 255, 1);
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
}
.loader1 span:nth-child(4) {
  background: rgba(255, 255, 255, 0.8);
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.loader1 span:nth-child(5) {
  background: rgba(255, 255, 255, 0.4);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@-webkit-keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }
  to {
    -webkit-transform: scale(1, 1);
  }
}

.pensecheck {
  color: #73b98f !important;
}
.conectecheck {
  color: #f2b67d !important;
}
.cultivecheck {
  color: #dc8371 !important;
}
</style>
