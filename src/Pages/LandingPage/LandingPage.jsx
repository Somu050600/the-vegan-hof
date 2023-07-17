import "./LandingPage.css";
import ImageSlider from "./ImageSlider";

function LandingPage() {
  const slides = [
    {
      url: "https://uca321e16fb6b1f687a1bc093f5f.previews.dropboxusercontent.com/p/thumb/AB_CqqFsomoZk2aAZc5OlUUFORdGQ0tP52RK5yzJkYuFtI0EXInoAVj2Nzhemk1ujiyv_df-X8LCV2Qc0jKv0mM8cT2JIzj99LTQcjLfKl22qmaVCe0CT1NeTTrpyE1y7D1_5TjHXVRPpNJUQvQ_TDZ4atm5u06h0LyKDsBu5E1M0dZNcgj4JOGnONVTYCEMG-Rwn6_a-YNv8iDsC-pH2SnbgSDTAjbiQQDHZsRW4nre-Q2oWU1t4ZH1xtQvOTWeMhDEGg8KiQxQ0fFcjJQafim2GApJQ61NzyYcW2bOp4SFBYlIZT73dYXrnEasnWR2ikQLmZEmqpxJm3BmBfJkC0R4z2yHdowrWr_xWN_k5Ds1s_z7xgty6WeJ1IWHRhd-yMX3_A8FV00rYiXXeecY7Gs7zlbpgHVODRBK6UUuJrJIFw_beQ6caDINHyv7HGEEF0I9veocIJEJ1zKi3dQFPJxs/p.png",
      title: "slide1",
    },
    {
      url: "https://uc521648ad07fded4a5f69314198.previews.dropboxusercontent.com/p/thumb/AB8xsyvy4BcCiXbhW6_Qop1rONrYURtO9Bb2y79S-DcLONVLbSqjyJbctTaDpka7xADXxu-UqctSK34Hqui-RzJXvPU8cbEE22n8ev3RdssRCGA_sGUHKu0Q8yaR6iJCtcIeraZM2_LFVsi1S4unNBceX351sZPJiW5kEgJPUKiDQB4SQUW5nu9yp9mYIG8R0eEVsqCqUkmSKMCM0V2VX4OOhzmW2fc91vF6qZtp4tUjR9OKK85yX5ThtfdUOZl1Xl07O953Y4-XwGCCsooOrzbCIK1JG5euDUciwSAFnRB3JG5jBrPiTj6M3n0dkdZs8hnZdIpo9oRblv-0T-0py_vBwMjNZw07w7z4kffNx8lTM4QkCBPcUW8yg01YfDBRwoxMXVEh8qD0tcC_IxRre0TPIxLvO3d5movCkEikX3e-dAFDDjqtzsUJAn_oGhVBt_RwN-1HG0Gx3IPakcsGYDtE/p.png",
      title: "slide2",
    },
    {
      url: "https://uc1bc44d2be37b2946c4a7d49829.previews.dropboxusercontent.com/p/thumb/AB936KlUvNl0gJiX1XzTnrN9Lcc_p70K4wKKbEKpav9Lh6SaJCFFY7uqYocmmYpH2X7_3vSsZW9dDiS2svZ4oP4NIvXmPenPFxofpO4i5jjdcRV_aiFkKOaJ3B5HoAsJWODJZCSHhjyqA0dTqahZXYQzgKXcx36EkCESjKMOVGEtgL6r_EJ3koH2ExIiUhTtEXL1v1TqGUE5UeKmOL6C9MRytTxjlMrWxFE9HH40ESiH-5GFesZuuiAWKqRdbZ_3spXRICEtKr033XYO8S2GjPKcEO8R2xd_CW8Ji1XlQeEFLJSwSIIldYEbfDKVjk5Qi5hgKUJgWqmdkx3OAFLFXqNlsxsuRg1uOwcQwbEHAmPlsobKorANiwJggaCRuNPAojjtwuZNtpMonrNWiflE6jfXlmkg_xROp3kHBqHdiNeZ4NIgDBHhLKpS3ELVYJt1rqRRJw0lYjY-pqWKYK15foZf/p.png",
      title: "slide3",
    },
    {
      url: "https://uc8ec2143b6734c5630f51412c7d.previews.dropboxusercontent.com/p/thumb/AB_53RGd11_CjRGSUHJJEMPuO-Hq_WW_sNcRF3vx3vGmocUh6n1ktM0Lq27P2HN5k_of9GcLCfJLrMCWzV3J188KrfIDNOClmIMD4rIqBM810lxOKZwyFdrf1-LCuFDWtQxNcGynflxcs78cFx30MoRevGqaVeTpjisSJcaSRo0RYrwpEzgs6Fm2B-d-ZHYBLxHV_E3FvG7UNZBOrvMrm1qfEZE7rfhoDHixCHd2z9obWTrI6HL5FjyqsBze7Y0O01x6qaJzhOgVwodlBhtrHWJveOel-GtwDG2xb7zWeukr-qt1uMrtjodO37ManVyFxpZjTP5A_SQMNJNTBOVSbHslPWRAfS8oCYAC5JuzMuyQWqFHBGVGXWGmY-CbvEOoO-CmFbCQuZkU5vuDq8fqxMkwsonoYJdNbmlz0oGwH73LJ4JCubhin_9tvS3OuvzYn3SPBPwUV351SiLF-5-psMee/p.png",
      title: "slide4",
    },
    {
      url: "https://uc40233326301063d49de9ed56b7.previews.dropboxusercontent.com/p/thumb/AB80jKal_pZY2_AS8jQrGSJzV2BvIflR2GN6r4VyD86reUVfdrXOgcXTH7oLr1dn9IzSlPguapRyaaqeizXyd6Wapp3GqRsb62c6v3raGvfpgLtheYPjjRfpgclr2FHJhu__hR6h0XwSPai6Az7MBFHe3_817J0ElCzeeLLT50PMj5IZVoP6kSMsvhMpsWchvkbZrgn5snD9_umTb3xnh_zqaLRRO0kIMbTM17Bv3Ze7eJqWDZfNdmrLfhwIAEIngTrO_oUnpxoPTETkkx1b4Nnv_wiW8aappzVlJRheImyNzM9Na5LZdss5v4qdYsNrykFuK9MF76vg2IDSw7wN_oEz/p.png",
      title: "slide5",
    },
    {
      url: "https://ucbae6901ba88fea50ceda712e41.previews.dropboxusercontent.com/p/thumb/AB9W1G0wVsOTQZzBovq99IxJ5T5SNr4MQcmGML4wOdAYzjpvAPLqzToOiX-9lMJwR0z0jC1hGbnIY0P5YaULD_vrGGZENQwK3q05AF9BcOqtlMmMDqI-VGIwhMykBpB8TUoGOYpJDwJXoZx8TuxoXmrQKDdc4Ki_zH_W6nKyus7u06zJomIEfXgx2aiXoIKscYfGCsvm1lh3qxI32ctSZebi8kU8kM17IyTw5mmJJHBjnP97fn7AAb8iBaJXcnLgYOzUYAgJd93pkcQfBkxBlqfr_lqd-oPwCefd2uyIUnR5uhcG8cmPPTDxKBdvlsg49rhRyNfaAMMWT0-JmmLWDBy7vNp_OiF6caywZ3v31lLyje3PELzUw4VQHaLqmgGomL8hMbyZoqnsrSQzWbWoy8owR_fCLuQ60h94oagmirJqoIE2Z_ryNVvx1m153TUbcsVaUNjXsslL12nM7D86FE7h/p.png",
      title: "slide6",
    },
    {
      url: "https://uc86d3f1033df1299b65be4b1375.previews.dropboxusercontent.com/p/thumb/AB_V71xUu01qbCIoJZR4UohbanISLNAmsiuwOcBM3SXRX7HGNrBGUVULz-jXwy9EoIXLgC3PpOG1l_PG5GEOE0wSuCVNwAIeAYZjtOqSxOyrB_Pts7B7obPsWWSQ1OHx5ULkhIWdSVGt8a3M8YR30UNW38NlsgWVaQbd63lASyRiisjpFTauphjsqVGea0qiBKqidVkVBuXdaXxJ1ide0asVhVt0uWPmTKVJURbvdZnArlzcSFJHNPLAko2BjIHC6lMvqDW0rI0Po493B9A8q9jKGwolPPflid3ekGZhcEgl9FLpjZpITsL-d32s8XO7Qtlnu8JHc0yUxbYqhjke3ebl/p.png",
      title: "slide6",
    },
  ];

  return (
    <div className="landing-page-container" id="Home">
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default LandingPage;
