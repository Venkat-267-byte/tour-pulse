const destinations = [
    {
        name: "Charminar",
        category: "Heritage",
        image: "https://images.unsplash.com/photo-1560388414-b83c4852e642?q=80&w=1974",
        desc: "The global icon of Hyderabad, built in 1591. Known for its stucco ornamentation and bustling bazaars.",
        map: "https://www.google.com/maps/search/?api=1&query=Charminar+Hyderabad"
    },
    {
        name: "Golconda Fort",
        category: "Heritage",
        image: "https://images.unsplash.com/photo-1590425881474-783dfdf354eb?q=80&w=1974",
        desc: "A massive medieval fortress known for its acoustic architecture and diamond mines.",
        map: "https://www.google.com/maps/search/?api=1&query=Golconda+Fort+Hyderabad"
    },
    {
        name: "Hussain Sagar",
        category: "Nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Hussain_Sagar_Lake_Hyderabad.jpg",
        desc: "Asia's largest heart-shaped artificial lake, featuring a massive monolithic Buddha statue.",
        map: "https://www.google.com/maps/search/?api=1&query=Hussain+Sagar+Lake"
    },
    {
        name: "Ramoji Film City",
        category: "Entertainment",
        image: "https://images.unsplash.com/photo-1626014903264-6df594411d2c?q=80&w=2070",
        desc: "The world's largest integrated film city complex. A magical land of movies and gardens.",
        map: "https://www.google.com/maps/search/?api=1&query=Ramoji+Film+City"
    },
    {
        name: "Birla Mandir",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Birla_mandir.jpg/800px-Birla_mandir.jpg",
        desc: "A magnificent white marble temple built on a 280-foot high hillock, offering panoramic views.",
        map: "https://www.google.com/maps/search/?api=1&query=Birla+Mandir+Hyderabad"
    },
    {
        name: "Salar Jung Museum",
        category: "Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Salar_jung_museum_hyderabad.jpg/800px-Salar_jung_museum_hyderabad.jpg",
        desc: "One of the largest one-man collections of antiques in the world, famous for the Veiled Rebecca.",
        map: "https://www.google.com/maps/search/?api=1&query=Salar+Jung+Museum"
    },
    {
        name: "Chowmahalla Palace",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chowmahalla_Palace_Durbar_Hall.jpg/800px-Chowmahalla_Palace_Durbar_Hall.jpg",
        desc: "The seat of the Asaf Jahi dynasty, known for its elegance and vintage car collection.",
        map: "https://www.google.com/maps/search/?api=1&query=Chowmahalla+Palace"
    },
    {
        name: "Qutub Shahi Tombs",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qutb_Shahi_Tombs_01.jpg/800px-Qutb_Shahi_Tombs_01.jpg",
        desc: "Majestic granite tombs of the seven Qutub Shahi rulers, blending Persian and Indian styles.",
        map: "https://www.google.com/maps/search/?api=1&query=Qutub+Shahi+Tombs"
    },
    {
        name: "Nehru Zoological Park",
        category: "Nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/White_Tiger_at_Nehru_Zoological_Park%2C_Hyderabad.jpg/800px-White_Tiger_at_Nehru_Zoological_Park%2C_Hyderabad.jpg",
        desc: "One of India's largest zoos, home to the white tiger, safari rides, and diverse wildlife.",
        map: "https://www.google.com/maps/search/?api=1&query=Nehru+Zoological+Park"
    },
    {
        name: "Lumbini Park",
        category: "Nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lumbini_Park.jpg/800px-Lumbini_Park.jpg",
        desc: "A beautiful urban park near Hussain Sagar, famous for its laser shows and musical fountains.",
        map: "https://www.google.com/maps/search/?api=1&query=Lumbini+Park+Hyderabad"
    },
    {
        name: "NTR Gardens",
        category: "Nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NTR_Gardens.jpg/800px-NTR_Gardens.jpg",
        desc: "A sprawling recreational garden with unique flora, fountains, and a toy train.",
        map: "https://www.google.com/maps/search/?api=1&query=NTR+Gardens"
    },
    {
        name: "Chilkur Balaji",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chilkur_Balaji_Temple_Gopuram.jpg/800px-Chilkur_Balaji_Temple_Gopuram.jpg",
        desc: "Known as the 'Visa Balaji' temple. Famous for not accepting monetary donations.",
        map: "https://www.google.com/maps/search/?api=1&query=Chilkur+Balaji+Temple"
    },
    {
        name: "Mecca Masjid",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mecca_Masjid_Hyderabad.jpg/800px-Mecca_Masjid_Hyderabad.jpg",
        desc: "One of the oldest and largest mosques in India, built with bricks brought from Mecca.",
        map: "https://www.google.com/maps/search/?api=1&query=Mecca+Masjid+Hyderabad"
    },
    {
        name: "Taramati Baradari",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Taramati-Baradari.jpg/800px-Taramati-Baradari.jpg",
        desc: "A historic Sarai built for the legendary courtesan Taramati, known for its acoustics.",
        map: "https://www.google.com/maps/search/?api=1&query=Taramati+Baradari"
    },
    {
        name: "Sudha Cars Museum",
        category: "Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sudha_Cars_Museum_entrance.jpg/800px-Sudha_Cars_Museum_entrance.jpg",
        desc: "The only handmade car museum in the world featuring cars shaped like burgers, shoes, and bags.",
        map: "https://www.google.com/maps/search/?api=1&query=Sudha+Cars+Museum"
    },
    {
        name: "KBR National Park",
        category: "Nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kbr_park.jpg/800px-Kbr_park.jpg",
        desc: "A vast national park in the heart of Jubilee Hills, home to peacocks and diverse flora.",
        map: "https://www.google.com/maps/search/?api=1&query=KBR+National+Park"
    },
    {
        name: "Shilparamam",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Shilparamam_Diorama%2C_Hyderabad.jpg/800px-Shilparamam_Diorama%2C_Hyderabad.jpg",
        desc: "An arts and crafts village showcasing ethnic rural life, handicrafts, and cultural festivals.",
        map: "https://www.google.com/maps/search/?api=1&query=Shilparamam+Hyderabad"
    },
    {
        name: "Jagannath Temple",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jagannath_Temple_Hyderabad_India.jpg/800px-Jagannath_Temple_Hyderabad_India.jpg",
        desc: "A modern replica of the Puri Jagannath temple, known for its intricate stone carvings.",
        map: "https://www.google.com/maps/search/?api=1&query=Jagannath+Temple+Hyderabad"
    },
    {
        name: "Paigah Tombs",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Paigah_Tombs_03.jpg/800px-Paigah_Tombs_03.jpg",
        desc: "The tombs of the Paigah noble family, known for their unique geometrical patterned architecture.",
        map: "https://www.google.com/maps/search/?api=1&query=Paigah+Tombs"
    },
    {
        name: "Statue of Equality",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Statue_of_Equality%2C_Hyderabad.jpg/600px-Statue_of_Equality%2C_Hyderabad.jpg",
        desc: "A massive statue of Saint Ramanujacharya, symbolizing equality and devotion.",
        map: "https://www.google.com/maps/search/?api=1&query=Statue+of+Equality+Hyderabad"
    }
];