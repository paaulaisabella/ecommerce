const items = [
    {
        id: 1,
        name: "Anillo Flor",
        description: "Anillo de plata con detalles de piedra preciosa en forma de flor, su brillo es ideal para complementar cualquier outfit, ya sea casual o para un evento más formal.",
        category: "anillo",
        categoryID: 1,
        price: 5000,
        stock: 10,
        picUrl: "https://lh3.googleusercontent.com/hVYDog6LwJlJmW1Qdtx03uln1QuLecdxb8qmR8t5F6OpbtGk9CoPyrrtsJi_xpkobrNIQKDsMKb6ZNVMcwMBynxJ_RyoqdqInuZepbgTGtFjEqOFksU92fLAFSSpQ0mVi4bEvEiorfduPerwh8Iik7e7S_LcxvZbKrDao8YyQZcgPrkYz-3n0Fkm2rGC2yhWjTrXNNPjb6kkzTzFzJAzgz9tuh8Qv5vbZBMOPUUU1GflwVc_UKX7nSup3g0hQgdlrgPuUvNgaYxmJN41LIUWP1fS2lxNgtgyrwkAbRgVZf08hOUWt8Yj-r7SO6Q2eGQ9iPn30sU0OmZ9-pNsKXFnNWO0Ncan0mNYIyfYwkoK3JXKoar6FX2QRpz5Sz9xmjG9p_KjPStvKMYvPC-cVNVOz3dYiRM3crugc4UpbUreAwwQwnkoTZwbkYMQa-dWPvy1a3TxPq2BMX83COnVCtNZn7uShJSSY_TS8BSNJEQiyN9JDBaj1pF7-ARm6y92dh8Wr7qN_Wr3ohGIs4r-at_ZeJ6rkQ567CsJNkGZt1FeRkXfJDSXJAqtjCGmOl3aaKNbPsg2PiRBDPgYZci8n7V_uKivg0tAmq1sueKp4694loA97anK2bVMlfjoqk6KpnRq2jSXKFiGLLdG_y6SKA5lhNDkr7F1BV2F1Q11BLLBttVi4HWgukP7qnTOP1B370sNFnN29Kjg9hyk-BQE587IxYSc=s625-no?authuser=0"
    },
    {
        id: 2,
        name: "Anillo Hoja",
        description: "Anillo de acero en forma de hoja, tiene como particularidad que se utiliza en dos dedos en vez de uno solo, siendo bastante llamativo, complementado por su color verdoso.",
        category: "anillo",
        categoryID: 1,
        price: 1000,
        stock: 10,
        picUrl: "https://lh3.googleusercontent.com/3a9_L8wvDM1IyD685fNQmJ3CvFNOAuthFhMhhUUOVxAqyvQhCQjsLoA6ngI9Ov1PUKCofwo1yhxygb2fmkU2aILsjOPtzyiuDec8cwjwQaDMQkwEB6lIzgd8xwy9ZVDNg-wTuMidP66PeWz6Ws9hBeXQ8v2pwftyTr7eABQZhtMLNVO6xGOBKTu3HrnbCJFtFBbbNqztD3KYsF6eLdR9rgN8L1Faum9q9wZ5bqsJhVmv3c2ii83jfYFVumZGNMa8-NGI3LmTEFw1L3w8AxSnoEP9PSNfZ6uZj08TCWpm3mWqfGcC5ncHPbN1Y2NE1MGsWIS7K_0fOUpqkKF_nn9WQZmv0ZiqVcnMbg6yMWENcjuuCMC01RUolUhZK4ObqaL-WU677fOCjFWB7h-HL84p9XzHVOh1pR0iC00q_zyx7CzdBunzHsCMSwIvBT7x1qmNkZvP61ERCVRCRwv7fJjt7tB4Tgyc4pv5AU50EZlo-aAwIUUrOXlQUuO4-Hrg9c9psoCLlZOxX0W-cVRLts0aH0jJ0TaoINvZR6YdKwapB3Pl0oPO0BwjlRtTWK87sa-rB0WX5LaddfGC7f_C_fKskkgnD2G_u-gc0REYxtvgdC_0EFLfGTjUNZDt2pC1u7GvU7zvFpW1HnU0xmCk-dXVWzHqCHXE1KOsLCad_XtuHE09s2QSevT-IVamHJeysxdcRiOIkSkaS_MJI1erGZuaCEY2=s625-no?authuser=0"
    },
    {
        id: 3,
        name: "Aros Bolita",
        description: "Aros de acero con bolitas de plástico en color rosa, muy delicados y muy lindos.",
        category: "aros",
        categoryID: 2,
        price: 1500,
        stock: 15,
        picUrl: "https://lh3.googleusercontent.com/B0Ktasj-ImtDwNrLcsLWctAo16f7aMCyRwWE4hGqrUYbjFkru_e5gsYxm5M84s0EzK211x7fixrH7kY-qoEXt9ZfhjZGimfOm57apGg08ka_YiR1woixWbWV8dUB9BQ2T3RwYttp5ymp2jTmXlsjX9EE21m3okuuUuYh_nBYOP8LM2q8UULbKpq0kTFBFn5D-b33K3RK2CuA5V-FecDMbCr5z__KZt6xXpeUHiB_kVhP7HhgsbuL8qenudzVaCHMifAZNyHsW_uGzs3slJHF68kGvmm8UNLHgYdwT86p8xwVCWXLmZOacqbtfGitUNPwNDiWzTcpN1qRuQtOIqI2DQ5eS8SC3nVjtRVVOCsJMOfQFozPLgg84A1-x8e8t_zEG1UzsnYEJzzLRM8To4VpfTK_gsdTrcIPg_i6Fj5xXK778XVPpaPi9Xd1AFPRax_y327CAtYJnjH_-LA0CobQeThx8j-4v2fWvd-ggmJm18el4GclgR7hDZtJNZGXH8619aqOcWQnST3MGqLnLbDfBppAn6Nsyv5jC4y24kfleTwMAKlXnez51FsYX2JSSaPKfyOAAi8O9xiOquigxhBHX3dO7r_lLpieC6qxnOP0bkm1MPdgsniy277u1sQZyOOELJdrGZAuG8XUiiWVQoy3_omzTLTtLnDp0Y0EEfzc2ZNG9cOrSn7z1IpE8X5y1CLxEtuzc6EzrAMAv7FYGWYq8W6t=s625-no?authuser=0"
    },
    {
        id: 4,
        name: "Aros Cereza",
        description: "Aros con forma de cereza en color rosa, muy lindos para llevar en situaciones casuales.",
        category: "aros",
        categoryID: 2,
        price: 1300,
        stock: 20,
        picUrl: "https://lh3.googleusercontent.com/rLh9WyoZW06d48mxWCDjCTgJdmNrRoJQfMkIEvFVcyT7UFTyaiAtogkNEbNHLwU9IgVysy3y3coE0g6WHy91yhLqiUBgnQQJ48uRksfRXRa3_mXN2o2C47WSodY95ujQfrRpvG_volGJAvR2n3JhEOO2durpgzbogPUCZxijew8JA8atE-JHawUPANMucKFODYfzfWx8bsZv33OliLLqgGgbZwHNuzqtbojhXAab-wPJPi6zPocQKEciFkCuGSUK5XK5oR395hKGtDrqMIVUFbxVXOUEX6ug2a_uPbLV9xGLqCf0wQLCJK5rfkl8hkS86B-NrEr1SdCtFEE8pxFJ4XbZ58yWrkdm4MJMiQuAix7MU3RVDYfMbI8SNM7miWpJQEjIvhGZAd1k2v596md2vrEiRSY51N6QuBmLrqoSFdO5KT3WHHufELJ069OWaWQTVD8jTvyjAtlB0T6BYKQA1_ufud8Fav-KaIirF7LAHGx49gd_ycw7Hku4Tb-1kwGgq5qODZR91B8VXfnQ0IEq6OjIiVdHIYUKwDYTnQEVQ8zcmvltqn5fKczRaPu6S83HE8xdBVOkhcemmA4MPtGKdd5ljMAWjrwp55e3EUBMRLx-ncHHhT-Qx0y286H4BrIJNUXS8BDgK07MLmQJ33bPunhnGcV0jz4mBUoUkhV6zlJ5gVnsW6aJXEGREcN1rO_HkXdN78mOy8z1D_hGID5LfWHq=s625-no?authuser=0"
    },
    {
        id: 5,
        name: "Aros Corazón",
        description: "Aros de acero quirúrgico en forma de corazón",
        category: "aros",
        categoryID: 2,
        price: 1000,
        stock: 12,
        picUrl: "https://lh3.googleusercontent.com/xHLCYxj9xtmIYBR5_rw782Ufv9pl_0_7_DAJoSK-2yD2He3e5iTKC-bPexPxvZyaCEOwTrC-bblp4o8uSOIwpABL80fs0rG7M1P9mdZLl2x7TowaoXpDRljlc_LQ55mOddfrWYpFBZyxFIkj_E2jjSv2r0K15XZnGTvWaK3odi74xAMaXpQ3Ey7yCmDHeexmVvmZR9dxbh8q1EnaGwMPIBYGpywjajrDgSxRztAYoIGjhPTW0O_sVMYC2fMhqORLbgnh9MYp8-dfJMieZ0bYq39XOWEpebokBVvs7IcWsiKefZ64OnzNyfAHuJ_6sYP7nOfFFYMeqPHorINxJQN-BTwWXJpF0pTc_UbXuEksY2kWkd8-eAD-qf_E0FsTD6HlvKX4rtz17tGqIeWka1I9a9EPfEhdrBA01YU3MzDHbruNpvML4fAhMGo4GznYKQR_sipR3NIm2KB9gulwahh7inn1e6mWXKtjrMAEgU0OAdh3IqkwyIyM0DW2KrdhBn2dwASdSKAtS3DxGcAvG7k1PUSYntlxZ7po-nKGCprHC7s1QfEDn8_Nwhis_GO7B_BaZN1nfer-VJVk8gkJoEGn8vJ5iJJHSrOUfKxaS_QSg8Ad5SpTlg_EuTmjYjNwMTXN9Po9k7t2Ji4aMyuFmwnGGRQMLmo0xFWQIQzIXN0kjjDR-wGuMrEp-YiM6Ry4d_Pg7lKGbIQ1gwNelclXXytMMjLd=s625-no?authuser=0"
    },
    {
        id: 6,
        name: "Collar Corazón Acero",
        description: "Collar de acero con dije en forma de corazón. Tanto el collar como el dije combinan acero de color plata y oro para darle un toque muy elegante.",
        category: "collar",
        categoryID: 3,
        price: 1800,
        stock: 18,
        picUrl: "https://lh3.googleusercontent.com/K7H_vTfgw30MAdumj57REHLzGr9syhwNm9T53H3Yat2J3EKdeOmx5pXcYmJLmw-xfhcF0c7VlTZBGG_-9n904Lyk43Y8Vzzt_Vr8Rr5Ad0JvJv9T2WEPZcGXURC1vfigQyjOBWihpuFa3fZEA6ai8bL4y4fZSx-P4zD5qyYnfh0aRIh8ugKgu-W8g5-LXIaTpKPbY2Qb3dsUmQKiUTa07uycbhF_ulKkfWDE-9hT9rHD894yRft65jr9dvQeSMlyJfQ9pHBTJGUB9LTnHAIlIaq75YDUrbGR6KWgBxzXdgUm2AHyFHiBiA9hLTA2mBF04ablb_1UtR9DrXUzMGOVIHh9L2h8B1L6z8I66AYO2VQK527IPQK4vkkprpni9MNfDRpVaxtn_v2ujs69oK_w1KkV9Lmw5yJCnsscsVrWuU9OVYiNWTYJOlJEJiGn8c2192Vj9vB2mYwpb8ewmrMeqbOMt-dICbfVgCsHDHp1WbZC7iMmV5BwaEvhEp0pnEj5sk6xnSEiWsZcp7pEpJHGQ4ACkM5cpBNwDQT3FGfOLLa25Eh6PsTHjUceHleKE12QlKgDdlQR7Ss2vi835jdld9Ofp8fBaFdUVe4IzMVSsIuHX4Ybj_4_jWTyBeMjBpSoL8AcRgVTcXvJwaBUHnXl4zOpmCHIg1RBaPEtCZwOwz573QfaFj_RfQMuYhfYSg9lv3XHlS1fT7sakRZDcCOLams8=s625-no?authuser=0"
    },
    {
        id: 7,
        name: "Collar Corazón Transparente",
        description: "Collar de cristal con forma de corazón. Al ser completamente transparente transmite una sensación de pureza y tranquilidad.",
        category: "collar",
        categoryID: 3,
        price: 2300,
        stock: 15,
        picUrl: "https://lh3.googleusercontent.com/czGUoywtdFbs2Y3FCPmYl5YdgU0jBRcO5x1JS2LHGLxRVzDSM0UajuUN9tNfsx8Lk06TBcAwMVLE1TNPF77qE39Q2aNjJ0hco8jOTtLlAfG97xPGr4mQ0J_q6yKthJqpvNse5XyZrztrB8HcO-g2TMcLQdMeFccvMEEEVk9tb5Ce2vlrJWzlEBjy-5ChZ4JvV4KbW_3KajCgcqn_B6EJdpxS2qP-M84hVXtGjzqaFNfdAP2ZaxdvhVzLg2jJsEosu5jsdlNnU4bsliqvIBbadAdY7KHen9Rm7li-JwsJ_azBhuHhirXiM89HoSdV8YNCx9oWiEd2j94VOAHTkOyt4CMO1zJby71UOFoRgFzZuOKg0LEgwenNTYoJ0dBl-IMdUBq9xtDFjw0VAjAaqHzILanqE6r4nHL-JWy9n5cuSuRnbDzCkUNugDPN3sC4a8K8m0LISt7qGAA6k569wylcNgmpFZfuP9sYuPCWhgZzmTm6qhCyAPlhsHEUKbMl98TacGkaIFJ4G3ASIgq0B_Ku_uE3INqB3LP5CZA6A3g3-ccpNIwJnRK759r9zJMfRUXmTfHANge8yTNi2uN9z6cruveREuWg0GuPb2h4L68b8e-sS54C7jRMVI1uIJ5jOqTC-scPYp0_gMxMFyVoPg6oSBBf5OHFFAJaBjreQchOVSocuhdneS3Ac_P2dk2XwrB3YtLXqKSg3v_BRc7rMU1NG7x2=s625-no?authuser=0"
    },
    {
        id: 8,
        name: "Collar Flor",
        description: "Collar de acero con dije en forma de flor. El dije combina dorado con una franja azul para volverlo una pieza delicada, perfecta para combinar con otros collares o llevarlo por su cuenta.",
        category: "collar",
        categoryID: 3,
        price: 2000,
        stock: 20,
        picUrl: "https://lh3.googleusercontent.com/VIppyrn2VaR1yJ0Syy7Ayy2DKBmf0rEwAt3W76gnfrBbgnts3lH_Y3QEZ1XkYI-x7Eq4LzPK0bXe-MnoQmYq81PXM5JvlfGj7CW9Rm0Ss_BchCRuuY69sN9XbKD18PJERRqZRx94SbJYmToCqrdfp8ncQiAk22zKnbuC8EuPdUPY6Ci9VRhuHcjXfxhpbjjto7qIMSXRVzjEMO121KqZZAP_rL-gJ8y3e2ulCG-a2fUTUQ-Ky216N9W47wH-cDxwP5dP6SbujANmKQFLRJWhS9ZkINwIv3WP9uK2CR6LKJBdaGFTSBYXJNGUvTNNIwLncFlb4bErkREU0NRNJXzMy9uih2PsAWMlAKU2UdDXho581nxhKR3_xAr2naxcUx0v5mMM6jLrOFyc3S0sLjXBd_0njfDHqx6e9SsfkrNclRcF4oJlxm-SaIDNs6O-Mw6TNNPppn4t7YYdZu2qreFP2uhsQK9QRJBLGe_vTeIs1O_BNY0FZRXKGQsXKCVN6zNl4cSf3F36DS82yrX_yPmj53RmkH9zlM7qUfGdSRlsYpORGQc9RXl9DH3NRnWTcB4pySejZRuyUaEQLz2nGMwMRBV_bVqerqajUkwLZAk_m2Pxh4LUZcR9oTvaAeQg3_zQLtoy2K8uXR2hjm758l3Toe6opO9FcEI99caqJQBGp-4qDvFc7ATKOf1G_6zFitpFHJPFpQLhivCJVO7IajDhqvz3=s625-no?authuser=0"
    },
    {
        id: 9,
        name: "Collar Tres Dijes",
        description: "Collar de acero con tres dijes únicos pero complementarios entre si tanto en color como en estilo: un dije de acero dorado para acompañar la cadena, una perla para volverlo llamativo y una cruz turquesa para darle un toque de color.",
        category: "collar",
        categoryID: 3,
        price: 1500,
        stock: 8,
        picUrl: "https://lh3.googleusercontent.com/-KkydC_EzWHgQ5FIIb9-Bv1BccA9ZcMPm49F3CKIiT6wr1F93x3GyvD-Y8-OHQcyMNIGi127b0jeUghGxdM_ZYGdUHi483ECh58sTeCMdjYtcTAqt00Tg26fvfauy0Fhj0tczflkTrdOsTSOD8FepfC7qXRDi4oRawSleflT8EEwsZx6yh8IxXRamDGHAM0auvFrav0F20gntr2bhOw0G1B4fLw_goDjUhS8RXfiiz8NrBmZxi7p6iVVKE17daZM6AVwxbl1fvZUDCCDLpFeoLYsaVNvfNnf-Fm2sKJZ5UFqdKw6nquRF3ltOU1i2WhXCczi_po5TM-n7iZbqvjZF504qQHNWm5r0rnvzqcAt2d9jtjsDxrjgblqACiEYLWkiul-SNfKMtoAL3nbz560zcKTVQlroxc3uKdUvN2LtOzY2qLB0MSXUWyAALzp9JSXtTL9eQ4dvbGzMyvhYbKsihUwr2Heb-BIHR15x6YRRDaqHkybxrwDBQlZ2MLOf0c3daQNUZxa1AEMw3K7k3bl2NgWNT8ZcKvyQ2ZTY-QhZNFAk791Ye7cqoLJbdA1ailxXgohR-9oje_5PRoBKBYwqgtMctQGNyg2t7OIiuRqlFfVgJoxPIJA5yoDQQmE7bpzIdNf3ZR-FcleMk_5rCTUy5VcfE1TVMksGBjhjoOXGMOkzLkNeV6QPFDOBlaCvdEgsmu3sLNEkB29h4sLyIFR99EN=s625-no?authuser=0"
    },
    {
        id: 10,
        name: "Conjunto Mapamundi",
        description: "Collar de acero quirúrgico con dije en forma de mapamundi, con su pulsera complementaria. Perfectos para llevar juntos o para llevar por separado.",
        category: "collar",
        categoryID: 3,
        price: 3000,
        stock: 10,
        picUrl: "https://lh3.googleusercontent.com/2sJCnSHA0PpK8Rws9m9n3jWhO39krd6Tyvc-CzM-VJEf_p75UYhiYEMohB6SwXQMNVZ-aALusR7tk4E5h3JRS1aDWmhiMHgMNKmB07B7aG2_YzPgT1LW6qCUE7m6Pie7hj38Jq3envgSx8aNO-wwP7blMQ0p-8UG3AVkPke-pMDwnDJTB-ecg1zCUsjj8t4xpNfhMdNkRBoQADTxVRaQ-YvdjFpPa04jeBc3cgva7umlcPhauUwRbUjXGjYl20p17tuwgiM_MlkzGY9vXYdNd-jEnpjgHXC7haxIEfl5Ne5PqqNUbOfETenqcJ0Y_y20-B97q4fKsZl-7-dUj-NNbcnN_P1psWurNmL9FKDBtnOzNisoVgOZqL--KMEwmGl2vp5GQ8fCyutL5RPedvYwVIXXqnpmgEF7u4ORQu12k4B4YaH8CoAQfIFa0QqtQ1XpMB7ye5OwrCf2QdsGs6YodDZjCj0Yrt9npZ7GIZ_Aq__fuWzo0WG0FLwu4HIbHBJdLfgPl60cWPoR3jlrcwPAxMTg3ADhc6QGGhV13WiX1kd4oY1YnyJv1Q30kc6VHRlNyFQeK5kpPgc87-vnHbFFtYPYjK5UkVer4hNxbOA1JK8v0x5HutYcwBagUVjF0v0r2_Rxrh5by9n8nkBGIax8bJ6BeTFbPWt2hLEIS4aWT4erps1m67xV8q8qpAbiM7Dga3A4HFWLoq5MadG0PgE_I33v=s625-no?authuser=0"
    },
    {
        id: 11,
        name: "Dije Botellita",
        description: "Dije en forma de botellita con corcho. El corcho es removible para que puedas customizar el interior como prefieras.",
        category: "dije",
        categoryID: 4,
        price: 500,
        stock: 12,
        picUrl: "https://lh3.googleusercontent.com/XFJ0vKErb75WydZbuxlwG2qgMe_t8n7-nNoPzmS-NYZfm_FU-GbaafebnJgbGmWwvWU6TGjnhQ16vTJhTYPmKtmLoVJODg--XQQYEUTfoAQueVHoX4o_6fC8tz3LfWNPq__wc0T425F4TvsRhI6QMrEHBdM1D2o-sQA4JBzz9jnquiwy0TIxzBWSb1qw5vFe_FgON0lpdnCfJ5vlJoCVYycgCB2DW4cMlTFKYqf0LqslhCuBNfxSxFR4bYGvd2MHi0M4zhH1s_aVuA75ENqgUX7BsGnQNjKXA5ce--_K0IDq1pijCd3eb_eKETQuRRhG3R17SNmkdBIfNTias2Qm6kuKcYUbdslqH586O6Fg5SeyCaN_lvWpsavFXj9famrBX3MJWgoUmNsKycu6KLmTcB5ATFGy4gzxZg2ohxmAifqZ8Y0-Brkdx6rkDFihFqzUJF9zvu_rk_xNNJYNre_nR4tBNzosro78W0ODmaQ-c1S7QHzFiK6DVM3jQHvVsma17gwBFDtkvdwVj89bQeiEqEr_XouJIFBSCehjfnfUf8y6gsEyW-b1oHMqZBG2gGfBH1b6yyc2fdVsgmnwWLtH24tQ29C-8okVzdCN3VlF9NafNAXPkO9ybr4e03G2pIsEjncGMyVBZfgiicEn7FRssD9Q78ikNekhpgrSDoh7D5cTyuyibkKZibJulhsR5RsTubXqAEfgfVb04BIfQQvlHuZV=s625-no?authuser=0"
    },
    {
        id: 12,
        name: "Dije Pizza",
        description: "Dije de acero quirúrgico con forma de pizza de pepperoni, ideal para todas las personas que aman la pizza.",
        category: "dije",
        categoryID: 4,
        price: 700,
        stock: 24,
        picUrl: "https://lh3.googleusercontent.com/rD0WyVMTSYHwet5AWjwPs1dx3zfGGOZxru1PmVR7Lh63iPHg_QTimXTX7NJo4tpoA2ALPHqjjOVKTpe9OpRyuSjvBpoHavju2mBl3wdpmTKvy36V7FVFuls91cVim9w_I2i7z67EbpCMAbrtHA3aQeEuWNMiKNe1npijeeRCbU7JUvLZgCkoXcWWZ8J6EhisrUs_HxZRAE_wTrWJJEIuzyvuWZJCQ7zuYQzwy5HQQ95VUhTEZ-VesemQNA8kPyoi6NcACkprcjiuTVNyDmJ09UZErfLOT0oNct9KI_T7cZ3TdJX5AxIi6_GAyZH7s7729G0fXUT6Ipo4IUAfES1hOx0YWr5hf2QtrHmGlU0R80dqLYMr2pel1CCRee0TFa7LIfug6ujnB37hhpbXT3MwidB3F7uGiGYNcmfO9mOKi5mXH6xKP-cO-ZTk3iCDfSS-XU3wJCSHOWhtIxZcIvKvOK0yVZVuCNRzKHdK3WL1FnzaDu2fEJjqVBShDHEq1Q-BoCS3zu5TxrxJnkgHD3kjtb8UztI8teVpHER7mcxKUY1keG3F7eYBBUJbGa5FZZ3ncr4pw19bM4bm2h1P28mXbPh0Jdw9C7z7Ze8zSIqerhdBWH-aX5-1KL6FOIf0dZTdW-VkQfCqu3GR1fCpUk5PxGpEHW1fopIYf_61Fc25_okYTSKfJaoC3C568_PKUHz8g-mOtI_aPxcvK7CUNUiACGMM=s625-no?authuser=0"
    },
];

