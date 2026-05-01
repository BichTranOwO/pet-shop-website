let productDetails = [
    // ===================== CAT PRODUCTS =====================
    {
        id: "cat-1",
        name: "Pate Cho Mèo Dạng Thạch Nekko Jelly",
        image: "../assets/images/products/pate-meo-nekko-jelly-70g.png",
        category: "Thức ăn cho mèo",
        brand: "Nekko",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "17.000 VNĐ",
        origin: "Thái Lan",
        shortDescription: "Pate cho mèo dạng thạch Nekko Jelly, mềm thơm và dễ ăn.",
        longDescription: "Pate Cho Mèo Dạng Thạch Nekko Jelly phù hợp cho mèo, có kết cấu dạng thạch mềm, giúp bữa ăn của mèo thêm ngon miệng. Sản phẩm có thể dùng làm bữa ăn phụ hoặc trộn cùng hạt khô để tăng độ hấp dẫn cho bữa ăn. Sau khi mở gói, nên dùng hết trong ngày hoặc bảo quản trong ngăn mát tủ lạnh.",
        targetUsers: "Mọi giống mèo ở nhiều độ tuổi\nMèo cần bổ sung thức ăn ướt\nMèo biếng ăn hoặc cần đổi vị",
        backPage: "cat-product.html"
    },
    {
        id: "cat-2",
        name: "Pate Cho Mèo Snappy Tom Gourmers",
        image: "../assets/images/products/Thuc-an-dinh-duong-pate-cho-meo-snappy-tom-gourmers-series-70g-shop-vat-nuoi-c0.jpg",
        category: "Thức ăn cho mèo",
        brand: "Snappy Tom",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "16.000 VNĐ",
        shortDescription: "Pate Snappy Tom Gourmers dành cho mèo, tiện lợi và dễ dùng.",
        longDescription: "Pate Cho Mèo Snappy Tom Gourmers giúp bữa ăn của mèo thêm hấp dẫn, phù hợp dùng làm bữa phụ hoặc trộn cùng hạt. Sản phẩm có dạng gói nhỏ tiện lợi, dễ sử dụng và dễ bảo quản. Nên cho mèo ăn với lượng phù hợp theo nhu cầu hằng ngày.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-3",
        name: "Thức Ăn Cho Mèo Trưởng Thành Royal Canin Indoor 27",
        image: "../assets/images/products/thuc-an-cho-meo-truong-thanh-royal-canin-indoor-27-400x400.jpg",
        category: "Thức ăn cho mèo",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "400gm",
        price: "132.000 VNĐ",
        shortDescription: "Hạt Royal Canin Indoor 27 dành cho mèo trưởng thành nuôi trong nhà.",
        longDescription: "Thức ăn hạt Royal Canin Indoor 27 phù hợp cho mèo trưởng thành sống trong nhà. Sản phẩm giúp bổ sung dinh dưỡng cần thiết trong khẩu phần ăn hằng ngày. Có thể dùng trực tiếp và nên chuẩn bị thêm nước sạch cho mèo khi ăn hạt.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-4",
        name: "Pate Mèo Wanpy Happy 100",
        image: "../assets/images/products/pate-cho-meo-wanpy-happy-100-1.jpg",
        category: "Thức ăn cho mèo",
        brand: "Wanpy",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "8.000 VNĐ",
        shortDescription: "Pate Wanpy Happy 100 dành cho mèo, nhỏ gọn và dễ sử dụng.",
        longDescription: "Pate Mèo Wanpy Happy 100 là thức ăn ướt tiện lợi, phù hợp cho mèo trong các bữa ăn hằng ngày. Sản phẩm có thể dùng trực tiếp hoặc trộn cùng thức ăn hạt để tăng hương vị. Sau khi mở gói nên sử dụng sớm để đảm bảo chất lượng.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-5",
        name: "Pate Mèo Monchou Balanced",
        image: "../assets/images/products/Pate-Meo-Monchou-Balanced.png",
        category: "Thức ăn cho mèo",
        brand: "Monchou",
        type: "Pate/Đồ ướt",
        size: "80gm",
        price: "14.000 VNĐ",
        shortDescription: "Pate Monchou Balanced dành cho mèo, thơm ngon và dễ ăn.",
        longDescription: "Pate Mèo Monchou Balanced là sản phẩm thức ăn ướt hỗ trợ bổ sung dinh dưỡng cho mèo. Với dạng gói tiện lợi, sản phẩm phù hợp dùng làm bữa phụ hoặc kết hợp với hạt khô. Bảo quản nơi khô ráo, thoáng mát và dùng hết sau khi mở.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-6",
        name: "Pate Mèo Pawsome",
        image: "../assets/images/products/Pawsome.png",
        category: "Thức ăn cho mèo",
        brand: "Pawsome",
        type: "Pate/Đồ ướt",
        size: "160gm",
        price: "25.000 VNĐ",
        shortDescription: "Pate Pawsome cho mèo, phù hợp dùng trong bữa ăn hằng ngày.",
        longDescription: "Pate Mèo Pawsome có dạng lon tiện lợi, giúp bữa ăn của mèo thêm đa dạng và hấp dẫn. Sản phẩm phù hợp dùng cho mèo cần bổ sung thức ăn ướt. Có thể chia thành nhiều bữa nhỏ tùy theo khẩu phần của mèo.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-7",
        name: "Pate Mèo 5Plus",
        image: "../assets/images/products/5Plus.png",
        category: "Thức ăn cho mèo",
        brand: "5Plus",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "17.000 VNĐ",
        shortDescription: "Pate Mèo 5Plus dạng gói nhỏ tiện lợi.",
        longDescription: "Pate Mèo 5Plus phù hợp cho mèo cần bổ sung thức ăn ướt, có thể dùng riêng hoặc trộn cùng thức ăn khô. Sản phẩm giúp bữa ăn của mèo thêm hấp dẫn và dễ ăn hơn. Nên bảo quản sản phẩm ở nơi khô ráo và tránh ánh nắng trực tiếp.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-8",
        name: "Súp Thưởng Kit Cat Purr Puree Túi Lớn 40 Tuýp",
        image: "../assets/images/products/kit-cat-purr-puree.png",
        category: "Thức ăn cho mèo",
        brand: "Kit Cat",
        type: "Pate/Đồ ướt",
        size: "15gm x 40",
        price: "345.000 VNĐ",
        shortDescription: "Súp thưởng Kit Cat Purr Puree dạng túi lớn 40 tuýp.",
        longDescription: "Súp Thưởng Kit Cat Purr Puree giúp mèo ăn ngon miệng hơn, có thể dùng làm phần thưởng hoặc bữa phụ. Sản phẩm dạng tuýp nhỏ tiện lợi, dễ cho ăn và dễ mang theo. Có thể dùng trực tiếp hoặc trộn với thức ăn chính.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-9",
        name: "Sốt Kem Thưởng Moochie Creamy Cho Mèo",
        image: "../assets/images/products/moochie.png",
        category: "Thức ăn cho mèo",
        brand: "Moochie",
        type: "Pate/Đồ ướt",
        size: "40gm",
        price: "14.000 VNĐ",
        shortDescription: "Sốt kem thưởng Moochie Creamy dành cho mèo.",
        longDescription: "Sốt Kem Thưởng Moochie Creamy Cho Mèo có kết cấu mềm mịn, phù hợp làm món thưởng cho mèo. Sản phẩm giúp kích thích vị giác và làm bữa ăn thêm hấp dẫn. Có thể cho ăn trực tiếp hoặc trộn cùng thức ăn khác.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-10",
        name: "Pate Mèo Ciao 6 Vị Thơm Ngon Cho Mèo",
        image: "../assets/images/products/pate-meo-ciao.png",
        category: "Thức ăn cho mèo",
        brand: "Ciao",
        type: "Pate/Đồ ướt",
        size: "60gm",
        price: "12.000 VNĐ",
        shortDescription: "Pate Ciao cho mèo với nhiều vị thơm ngon.",
        longDescription: "Pate Mèo Ciao 6 Vị Thơm Ngon giúp mèo có thêm lựa chọn trong bữa ăn hằng ngày. Sản phẩm có dạng gói nhỏ, tiện sử dụng cho từng bữa. Phù hợp dùng làm thức ăn phụ hoặc đổi vị cho mèo.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-11",
        name: "Pate Mèo Con Snappy Tom Premium Kitten",
        image: "../assets/images/products/snappy-tom.png",
        category: "Thức ăn cho mèo",
        brand: "Snappy Tom",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "18.000 VNĐ",
        shortDescription: "Pate Snappy Tom Premium Kitten dành cho mèo con.",
        longDescription: "Pate Mèo Con Snappy Tom Premium Kitten phù hợp cho mèo con, giúp bổ sung thức ăn ướt trong khẩu phần ăn. Sản phẩm có dạng mềm, dễ ăn và tiện lợi. Nên cho mèo ăn theo lượng phù hợp với độ tuổi và cân nặng.",
        targetUsers: "Mèo con\nMèo cần bổ sung thức ăn ướt\nMèo cần đổi vị trong bữa ăn",
        backPage: "cat-product.html"
    },
    {
        id: "cat-12",
        name: "Pate Mèo Moochie CAT Thơm Ngon (Thái Lan)",
        image: "../assets/images/products/Moochie-TL.png",
        category: "Thức ăn cho mèo",
        brand: "Moochie",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "17.000 VNĐ",
        origin: "Thái Lan",
        shortDescription: "Pate Moochie CAT thơm ngon dành cho mèo.",
        longDescription: "Pate Mèo Moochie CAT là thức ăn ướt tiện lợi, giúp bữa ăn của mèo thêm hấp dẫn. Sản phẩm có thể dùng trực tiếp hoặc trộn với hạt khô. Sau khi mở gói nên sử dụng hết để đảm bảo chất lượng.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-13",
        name: "Pate Cho Mèo Con Dạng Kem Nekko Kitten Mousse",
        image: "../assets/images/products/Nekko-Kitten-Mousse.png",
        category: "Thức ăn cho mèo",
        brand: "Nekko",
        type: "Pate/Đồ ướt",
        size: "70gm",
        price: "17.000 VNĐ",
        shortDescription: "Pate dạng kem Nekko Kitten Mousse dành cho mèo con.",
        longDescription: "Pate Cho Mèo Con Dạng Kem Nekko Kitten Mousse có kết cấu mềm mịn, phù hợp cho mèo con. Sản phẩm giúp mèo dễ ăn hơn, đặc biệt trong giai đoạn còn nhỏ. Có thể dùng làm bữa phụ hoặc kết hợp với thức ăn chính.",
        targetUsers: "Mèo con\nMèo cần thức ăn mềm dễ ăn\nMèo cần bổ sung thức ăn ướt",
        backPage: "cat-product.html"
    },
    {
        id: "cat-14",
        name: "Hạt Cho Mèo Con Triệt Sản Royal Canin Kitten Sterilised",
        image: "../assets/images/products/Royal-Canin-Kitten-Sterilised.png",
        category: "Thức ăn cho mèo",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "400gm",
        price: "112.000 VNĐ",
        shortDescription: "Hạt Royal Canin Kitten Sterilised cho mèo con triệt sản.",
        longDescription: "Hạt Cho Mèo Con Triệt Sản Royal Canin Kitten Sterilised hỗ trợ bổ sung dinh dưỡng cho mèo con sau triệt sản. Sản phẩm phù hợp dùng làm bữa ăn hằng ngày. Khi cho mèo ăn hạt, nên chuẩn bị thêm nước sạch bên cạnh.",
        targetUsers: "Mèo con sau triệt sản\nMèo cần khẩu phần ăn hạt hằng ngày\nMèo cần kiểm soát khẩu phần phù hợp",
        backPage: "cat-product.html"
    },
    {
        id: "cat-15",
        name: "Thức Ăn Hạt Cho Mèo Bị Tiểu Đường Royal Canin Diabetic Feline",
        image: "../assets/images/products/Royal-Canin-Diabetic-Feline.png",
        category: "Thức ăn cho mèo",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "400gm",
        price: "159.000 VNĐ",
        shortDescription: "Hạt Royal Canin Diabetic Feline dành cho mèo cần chế độ ăn đặc biệt.",
        longDescription: "Thức Ăn Hạt Royal Canin Diabetic Feline phù hợp cho mèo cần khẩu phần ăn hỗ trợ theo nhu cầu sức khỏe. Sản phẩm nên được sử dụng theo hướng dẫn phù hợp với tình trạng của mèo. Luôn chuẩn bị nước sạch khi cho mèo ăn hạt.",
        targetUsers: "Mèo cần chế độ ăn đặc biệt\nMèo trưởng thành\nMèo cần khẩu phần ăn hạt phù hợp",
        backPage: "cat-product.html"
    },
    {
        id: "cat-16",
        name: "Thức Ăn Hạt Royal Canin Gastrointestinal",
        image: "../assets/images/products/Royal-Canin-Gastrointestinal.png",
        category: "Thức ăn cho mèo",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "400gm",
        price: "195.000 VNĐ",
        shortDescription: "Hạt Royal Canin Gastrointestinal dành cho mèo.",
        longDescription: "Thức Ăn Hạt Royal Canin Gastrointestinal là dòng thức ăn hạt hỗ trợ nhu cầu dinh dưỡng đặc biệt cho mèo. Sản phẩm phù hợp dùng theo khẩu phần ăn hằng ngày. Nên bảo quản nơi khô ráo và đóng kín bao bì sau khi dùng.",
        targetUsers: "Mèo cần chế độ ăn đặc biệt\nMèo trưởng thành\nMèo cần khẩu phần ăn hạt dễ sử dụng",
        backPage: "cat-product.html"
    },
    {
        id: "cat-17",
        name: "Pate Cho Mèo Ciao Nhập Khẩu Thái Lan",
        image: "../assets/images/products/pate-ciao-thai.png",
        category: "Thức ăn cho mèo",
        brand: "Ciao",
        type: "Pate/Đồ ướt",
        size: "40gm",
        price: "15.000 VNĐ",
        origin: "Thái Lan",
        shortDescription: "Pate Ciao nhập khẩu Thái Lan dành cho mèo.",
        longDescription: "Pate Cho Mèo Ciao Nhập Khẩu Thái Lan có dạng gói nhỏ tiện lợi, phù hợp làm bữa phụ cho mèo. Sản phẩm giúp bữa ăn thêm đa dạng và kích thích mèo ăn ngon miệng hơn. Sau khi mở nên dùng hết trong thời gian ngắn.",
        backPage: "cat-product.html"
    },
    {
        id: "cat-18",
        name: "Pate Mèo Happy Choice Cá Ngừ Thạch (Lon 400g)",
        image: "../assets/images/products/happy-choice-tuna-jelly.png",
        category: "Thức ăn cho mèo",
        brand: "Happy Choice",
        type: "Pate/Đồ ướt",
        size: "400gm",
        price: "26.000 VNĐ",
        shortDescription: "Pate mèo Happy Choice cá ngừ thạch dạng lon.",
        longDescription: "Pate Mèo Happy Choice Cá Ngừ Thạch dạng lon 400g, phù hợp cho mèo cần thức ăn ướt trong bữa ăn hằng ngày. Sản phẩm có thể chia thành nhiều bữa nhỏ tùy khẩu phần. Nên bảo quản phần còn lại trong ngăn mát sau khi mở lon.",
        backPage: "cat-product.html"
    },

    // ===================== DOG PRODUCTS =====================
    {
        id: "dog-1",
        name: "Hạt Ganador Adult Cho Chó Trưởng Thành",
        image: "../assets/images/products/ganador-dog.png",
        category: "Thức ăn cho chó",
        brand: "Ganador",
        type: "Hạt/Đồ khô",
        size: "3kg",
        price: "127.000 VNĐ",
        shortDescription: "Hạt Ganador Adult dành cho chó trưởng thành.",
        longDescription: "Hạt Ganador Adult Cho Chó Trưởng Thành giúp bổ sung năng lượng và dưỡng chất cho chó trong hoạt động hằng ngày. Sản phẩm phù hợp dùng làm bữa ăn chính cho chó trưởng thành. Nên cho ăn theo khẩu phần phù hợp với cân nặng và mức vận động của chó.",
        targetUsers: "Chó trưởng thành\nPhù hợp với nhiều giống chó\nChó cần khẩu phần ăn hạt hằng ngày",
        backPage: "dog-product.html"
    },
    {
        id: "dog-2",
        name: "Hạt Ganador Puppy Cho Chó Con Vị Sữa & DHA",
        image: "../assets/images/products/dog-Dha.png",
        category: "Thức ăn cho chó",
        brand: "Ganador",
        type: "Hạt/Đồ khô",
        size: "3kg",
        price: "169.000 VNĐ",
        shortDescription: "Hạt Ganador Puppy dành cho chó con, vị sữa và DHA.",
        longDescription: "Hạt Ganador Puppy Cho Chó Con Vị Sữa & DHA phù hợp cho chó con trong giai đoạn phát triển. Sản phẩm giúp bổ sung dinh dưỡng cần thiết cho bữa ăn hằng ngày. Có thể cho ăn trực tiếp hoặc làm mềm hạt với nước ấm tùy nhu cầu.",
        targetUsers: "Chó con\nChó trong giai đoạn phát triển\nChó cần khẩu phần ăn hạt dễ sử dụng",
        backPage: "dog-product.html"
    },
    {
        id: "dog-3",
        name: "Bánh Thưởng Cho Chó Dexinbone Hỗ Trợ Sạch Răng",
        image: "../assets/images/products/dexinbone.png",
        category: "Thức ăn cho chó",
        brand: "Dexinbone",
        type: "Hạt/Đồ khô",
        size: "150gm",
        price: "32.000 VNĐ",
        shortDescription: "Bánh thưởng Dexinbone hỗ trợ sạch răng cho chó.",
        longDescription: "Bánh Thưởng Cho Chó Dexinbone Hỗ Trợ Sạch Răng phù hợp làm món thưởng và hỗ trợ thói quen gặm nhai. Sản phẩm có thể dùng xen kẽ trong ngày, không thay thế hoàn toàn bữa ăn chính. Nên cho chó dùng với lượng phù hợp.",
        targetUsers: "Chó cần món thưởng gặm nhai\nChó cần hỗ trợ thói quen nhai\nPhù hợp dùng làm phần thưởng",
        backPage: "dog-product.html"
    },
    {
        id: "dog-4",
        name: "Hạt Điều Trị Bệnh Cho Chó Hỗ Trợ Chức Năng Gan Royal Canin",
        image: "../assets/images/products/royal-canin-dog-dha.png",
        category: "Thức ăn cho chó",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "70gm",
        price: "449.000 VNĐ",
        shortDescription: "Hạt Royal Canin hỗ trợ chức năng gan cho chó.",
        longDescription: "Hạt Điều Trị Bệnh Cho Chó Hỗ Trợ Chức Năng Gan Royal Canin là sản phẩm dành cho chó cần chế độ ăn đặc biệt. Sản phẩm nên được sử dụng theo nhu cầu phù hợp của thú cưng. Khi dùng thức ăn hạt, nên luôn chuẩn bị nước sạch cho chó.",
        targetUsers: "Chó cần chế độ ăn đặc biệt\nChó trưởng thành\nChó cần khẩu phần ăn hạt phù hợp",
        backPage: "dog-product.html"
    },
    {
        id: "dog-5",
        name: "Pate MONGE FRESH cho chó loại LON",
        image: "../assets/images/products/monge-fresh-dog.jpg",
        category: "Thức ăn cho chó",
        brand: "Monge",
        type: "Pate/Đồ ướt",
        size: "400gm",
        price: "55.000 VNĐ",
        shortDescription: "Pate Monge Fresh dạng lon dành cho chó.",
        longDescription: "Pate MONGE FRESH cho chó loại lon là thức ăn ướt tiện lợi, giúp bữa ăn của chó thêm ngon miệng. Sản phẩm có thể dùng trực tiếp hoặc trộn cùng hạt khô. Sau khi mở lon, nên bảo quản phần còn lại trong ngăn mát.",
        backPage: "dog-product.html"
    },
    {
        id: "dog-6",
        name: "Bánh Thưởng Cho Chó INU Fonti Xương Gặm Bàn Chải",
        image: "../assets/images/products/inu-fonti-xuong-gam-ban-chai.png",
        category: "Thức ăn cho chó",
        brand: "INU Fonti",
        type: "Hạt/Đồ khô",
        size: "90gm",
        price: "20.000 VNĐ",
        shortDescription: "Bánh thưởng INU Fonti dạng xương gặm bàn chải.",
        longDescription: "Bánh Thưởng Cho Chó INU Fonti Xương Gặm Bàn Chải phù hợp làm món thưởng và hỗ trợ thói quen gặm nhai cho chó. Sản phẩm có hình dạng dễ cầm nắm và tiện sử dụng. Không nên dùng thay thế hoàn toàn bữa ăn chính.",
        targetUsers: "Chó cần món thưởng gặm nhai\nChó cần giải trí và nhai nhẹ\nPhù hợp dùng làm phần thưởng",
        backPage: "dog-product.html"
    },
    {
        id: "dog-7",
        name: "Bánh Thưởng Cho Chó Xương Gặm Fonti Inu - Người Tuyết",
        image: "../assets/images/products/inu-fonti-xuong-gam-nguoi-tuyet.png",
        category: "Thức ăn cho chó",
        brand: "INU Fonti",
        type: "Hạt/Đồ khô",
        size: "90gm",
        price: "40.000 VNĐ",
        shortDescription: "Xương gặm Fonti Inu hình người tuyết dành cho chó.",
        longDescription: "Bánh Thưởng Cho Chó Xương Gặm Fonti Inu - Người Tuyết là món thưởng giúp chó gặm nhai vui vẻ. Sản phẩm phù hợp dùng trong lúc huấn luyện hoặc làm phần thưởng. Nên cho dùng với lượng hợp lý.",
        targetUsers: "Chó cần món thưởng\nChó thích gặm nhai\nPhù hợp dùng khi huấn luyện hoặc thưởng",
        backPage: "dog-product.html"
    },
    {
        id: "dog-8",
        name: "Hạt Cho Chó Trưởng Thành Smartheart Adult Vị Bò Nướng",
        image: "../assets/images/products/smartheart-beef.png",
        category: "Thức ăn cho chó",
        brand: "Smartheart",
        type: "Hạt/Đồ khô",
        size: "3kg",
        price: "155.000 VNĐ",
        shortDescription: "Hạt Smartheart Adult vị bò nướng dành cho chó trưởng thành.",
        longDescription: "Hạt Cho Chó Trưởng Thành Smartheart Adult Vị Bò Nướng giúp bổ sung dinh dưỡng cho chó trưởng thành. Sản phẩm có thể dùng làm bữa ăn hằng ngày. Nên bảo quản nơi khô ráo và đóng kín bao bì sau khi sử dụng.",
        targetUsers: "Chó trưởng thành\nChó cần khẩu phần ăn hạt hằng ngày\nPhù hợp với nhiều giống chó",
        backPage: "dog-product.html"
    },
    {
        id: "dog-9",
        name: "Hạt Smartheart Puppy Beef & Milk cho chó con",
        image: "../assets/images/products/smartheart-puppy-beef-milk.png",
        category: "Thức ăn cho chó",
        brand: "Smartheart",
        type: "Hạt/Đồ khô",
        size: "1.5kg",
        price: "114.000 VNĐ",
        shortDescription: "Hạt Smartheart Puppy Beef & Milk dành cho chó con.",
        longDescription: "Hạt Smartheart Puppy Beef & Milk cho chó con phù hợp cho giai đoạn phát triển, giúp bổ sung dưỡng chất cần thiết. Sản phẩm có thể dùng làm bữa ăn chính hằng ngày. Nên cho ăn theo khẩu phần phù hợp với độ tuổi và cân nặng.",
        targetUsers: "Chó con\nChó trong giai đoạn phát triển\nChó cần khẩu phần ăn hạt hằng ngày",
        backPage: "dog-product.html"
    },
    {
        id: "dog-10",
        name: "Pate cho chó SmartHeart lon 400gr dành cho chó trưởng thành",
        image: "../assets/images/products/smartheart-pate.png",
        category: "Thức ăn cho chó",
        brand: "Smartheart",
        type: "Pate/Đồ ướt",
        size: "400gm",
        price: "40.000 VNĐ",
        shortDescription: "Pate SmartHeart lon 400g dành cho chó trưởng thành.",
        longDescription: "Pate cho chó SmartHeart lon 400gr là thức ăn ướt tiện lợi, phù hợp cho chó trưởng thành. Sản phẩm có thể dùng trực tiếp hoặc trộn cùng thức ăn hạt. Sau khi mở lon, nên bảo quản phần còn lại trong ngăn mát tủ lạnh.",
        backPage: "dog-product.html"
    },
    {
        id: "dog-11",
        name: "Hạt Cho Chó Trưởng Thành Giống Vừa Royal Canin Medium Adult",
        image: "../assets/images/products/royal-canin-medium-adult.png",
        category: "Thức ăn cho chó",
        brand: "Royal Canin",
        type: "Hạt/Đồ khô",
        size: "4kg",
        price: "679.000 VNĐ",
        shortDescription: "Hạt Royal Canin Medium Adult cho chó trưởng thành giống vừa.",
        longDescription: "Hạt Cho Chó Trưởng Thành Giống Vừa Royal Canin Medium Adult phù hợp cho chó trưởng thành thuộc giống vừa. Sản phẩm cung cấp khẩu phần ăn khô tiện lợi cho bữa ăn hằng ngày. Nên bảo quản nơi khô ráo và chuẩn bị nước sạch khi cho chó ăn.",
        targetUsers: "Chó trưởng thành giống vừa\nChó cần khẩu phần ăn hạt hằng ngày\nChó có mức vận động bình thường",
        backPage: "dog-product.html"
    },
    {
        id: "dog-12",
        name: "Pate MONGE BWILD cho chó Grain Free Adult",
        image: "../assets/images/products/monge-bwild-dog.png",
        category: "Thức ăn cho chó",
        brand: "Monge",
        type: "Pate/Đồ ướt",
        size: "400gm",
        price: "45.000 VNĐ",
        shortDescription: "Pate Monge BWILD Grain Free Adult dành cho chó.",
        longDescription: "Pate MONGE BWILD cho chó Grain Free Adult là thức ăn ướt dành cho chó trưởng thành. Sản phẩm giúp bữa ăn của chó thêm đa dạng và dễ ăn hơn. Có thể dùng trực tiếp hoặc kết hợp với hạt khô.",
        backPage: "dog-product.html"
    },
    {
        id: "dog-13",
        name: "Bánh Thưởng / Xương Gặm Cho Chó Pedigree Dentastix",
        image: "../assets/images/products/pedigree-dentastix.png",
        category: "Thức ăn cho chó",
        brand: "Pedigree",
        type: "Hạt/Đồ khô",
        size: "75gm",
        price: "35.000 VNĐ",
        shortDescription: "Bánh thưởng Pedigree Dentastix dạng xương gặm cho chó.",
        longDescription: "Bánh Thưởng / Xương Gặm Cho Chó Pedigree Dentastix phù hợp làm món thưởng và hỗ trợ thói quen nhai của chó. Sản phẩm nên được dùng như món ăn bổ sung, không thay thế bữa chính. Cho chó sử dụng với lượng phù hợp.",
        targetUsers: "Chó cần món thưởng gặm nhai\nChó cần hỗ trợ thói quen nhai\nPhù hợp dùng làm phần thưởng",
        backPage: "dog-product.html"
    },
    {
        id: "dog-14",
        name: "Pate chó Royal Canin Mini Starter Mother & BabyDog",
        image: "../assets/images/products/royal-canin-mini-starter.png",
        category: "Thức ăn cho chó",
        brand: "Royal Canin",
        type: "Pate/Đồ ướt",
        size: "195gm",
        price: "81.000 VNĐ",
        shortDescription: "Pate Royal Canin Mini Starter Mother & BabyDog.",
        longDescription: "Pate chó Royal Canin Mini Starter Mother & BabyDog phù hợp cho chó mẹ và chó con trong giai đoạn đầu. Sản phẩm có dạng mềm, dễ ăn và tiện sử dụng. Nên dùng theo khẩu phần phù hợp với độ tuổi và nhu cầu của thú cưng.",
        targetUsers: "Chó mẹ\nChó con giai đoạn đầu\nChó cần thức ăn mềm dễ ăn",
        backPage: "dog-product.html"
    },
    {
        id: "dog-15",
        name: "Pate Cho Chó Mọi Lứa Tuổi Ganador Thịt Gà",
        image: "../assets/images/products/Ganador-ga.png",
        category: "Thức ăn cho chó",
        brand: "Ganador",
        type: "Pate/Đồ ướt",
        size: "120gm",
        price: "15.000 VNĐ",
        shortDescription: "Pate Ganador thịt gà dành cho chó mọi lứa tuổi.",
        longDescription: "Pate Cho Chó Mọi Lứa Tuổi Ganador Thịt Gà có dạng gói tiện lợi, phù hợp dùng làm bữa ăn ướt cho chó. Sản phẩm có thể dùng trực tiếp hoặc trộn cùng hạt để tăng độ ngon miệng. Nên dùng hết sau khi mở gói.",
        targetUsers: "Chó ở nhiều độ tuổi\nChó cần bổ sung thức ăn ướt\nChó cần đổi vị trong bữa ăn",
        backPage: "dog-product.html"
    }
];

// Lấy id trên đường dẫn, ví dụ: product-detail.html?id=cat-1
let params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Tìm sản phẩm có id trùng với id trên đường dẫn
let product = productDetails.find(function(item) {
    return item.id === productId;
});

// Hàm đổi nội dung chữ
function setText(id, text) {
    let element = document.getElementById(id);

    if (element) {
        element.innerText = text;
    }
}

// Hàm đổi ảnh
function setImage(id, src, alt) {
    let image = document.getElementById(id);

    if (image) {
        image.src = src;
        image.alt = alt;
    }
}

// Nếu sản phẩm chưa có xuất xứ thì hiện mặc định
function getOrigin(product) {
    if (product.origin) {
        return product.origin;
    }

    return "Đang cập nhật";
}

// Nếu sản phẩm chưa có đối tượng sử dụng riêng thì tự tạo mặc định
function getTargetUsers(product) {
    if (product.targetUsers) {
        return product.targetUsers;
    }

    if (product.category === "Thức ăn cho mèo") {
        if (product.type === "Hạt/Đồ khô") {
            return "Mèo trưởng thành hoặc mèo cần sử dụng thức ăn hạt\nPhù hợp dùng làm bữa ăn hằng ngày\nNên chọn khẩu phần phù hợp theo độ tuổi và cân nặng của mèo";
        }

        return "Mọi giống mèo ở nhiều độ tuổi\nMèo cần bổ sung thức ăn ướt\nMèo biếng ăn hoặc cần đổi vị trong bữa ăn";
    }

    if (product.category === "Thức ăn cho chó") {
        if (product.type === "Hạt/Đồ khô") {
            return "Chó trưởng thành hoặc chó cần sử dụng thức ăn khô\nPhù hợp dùng làm bữa ăn hằng ngày\nCó thể dùng trực tiếp hoặc kết hợp với pate";
        }

        return "Mọi giống chó ở nhiều độ tuổi\nChó cần bổ sung thức ăn ướt\nPhù hợp dùng làm bữa phụ hoặc trộn cùng hạt";
    }

    return "Phù hợp cho thú cưng theo nhu cầu sử dụng";
}

// Hiển thị thông tin sản phẩm
if (product) {
    setImage("detail-image", product.image, product.name);

    setText("detail-name", product.name);
    setText("breadcrumb-name", product.name);

    setText("detail-category", product.category);
    setText("detail-product-category", product.category);

    setText("detail-brand", product.brand);
    setText("detail-brand-bottom", product.brand);

    setText("detail-type", product.type);
    setText("detail-size", product.size);
    setText("detail-price", product.price);

    setText("detail-short-description", product.shortDescription);
    setText("detail-description-title", product.name);
    setText("detail-long-description", product.longDescription);

    setText("detail-origin", getOrigin(product));
    setText("detail-target-users", getTargetUsers(product));

    let backLink = document.getElementById("back-link");

    if (backLink) {
        backLink.href = product.backPage;
    }
    let categoryLink = document.getElementById("breadcrumb-category-link");

    if (categoryLink) {
        categoryLink.href = product.backPage;
    }
} else {
    setText("detail-name", "Không tìm thấy sản phẩm");
    setText("detail-short-description", "Sản phẩm này không tồn tại hoặc đường dẫn bị sai.");

    let detailImage = document.getElementById("detail-image");

    if (detailImage) {
        detailImage.style.display = "none";
    }
}

// Tăng giảm số lượng
let quantity = 1;

let quantityText = document.getElementById("quantity");
let increaseButton = document.getElementById("increase-quantity");
let decreaseButton = document.getElementById("decrease-quantity");

if (increaseButton && decreaseButton && quantityText) {
    increaseButton.addEventListener("click", function() {
        quantity++;
        quantityText.innerText = quantity;
    });

    decreaseButton.addEventListener("click", function() {
        if (quantity > 1) {
            quantity--;
            quantityText.innerText = quantity;
        }
    });
}