// export default function Gallery(){

//     return(

//         <div>
//             <h1>Gallery</h1>
//         </div>

//     )

// }



import { useState } from "react"
import { MdOutlinePhotoLibrary } from "react-icons/md"

export default function Gallery() {

    const [activeCategory, setActiveCategory] = useState("All")

    const galleryItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
            title: "Live Events",
            category: "Events"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
            title: "Music Concert",
            category: "Events"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
            title: "DJ Equipment",
            category: "Equipment"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
            title: "Professional Audio",
            category: "Equipment"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
            title: "Outdoor Events",
            category: "Events"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
            title: "Sound Production",
            category: "Equipment"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
            title: "Stage Setup",
            category: "Events"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
            title: "Special Occasions",
            category: "Events"
        }
    ]

    const categories = ["All", "Events", "Equipment"]

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    return (

        <div className="min-h-screen w-full bg-[#E8F9FF] px-5 py-12 sm:px-10 lg:px-16">

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">

                <span className="inline-block bg-white text-[#367485] px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-4">
                    KV COLLECTION
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#367485]">
                    Our Gallery
                </h1>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Explore our collection of events, professional audio
                    equipment and memorable moments.
                </p>

                <div className="w-20 h-1 bg-[#367485] rounded-full mx-auto mt-6"></div>

            </div>


            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">

                {categories.map(category => (

                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300
                            ${activeCategory === category
                                ? "bg-[#367485] text-white shadow-lg"
                                : "bg-white text-[#367485] hover:bg-[#367485] hover:text-white"
                            }`}
                    >
                        {category}
                    </button>

                ))}

            </div>


            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {filteredItems.map(item => (

                    <div
                        key={item.id}
                        className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                    >

                        {/* Image */}
                        <img
                            src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-300"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-5">

                            <span className="text-xs font-semibold text-white bg-[#367485] px-3 py-1.5 rounded-full">
                                {item.category}
                            </span>

                            <h2 className="text-white text-xl font-bold mt-3">
                                {item.title}
                            </h2>

                        </div>

                    </div>

                ))}

            </div>


            {/* Empty State */}
            {filteredItems.length === 0 && (

                <div className="text-center py-20">

                    <MdOutlinePhotoLibrary className="text-7xl text-[#367485] mx-auto mb-4" />

                    <h2 className="text-2xl font-bold text-[#367485]">
                        No Images Found
                    </h2>

                </div>

            )}

            {/* Footer Message */}
            <div className="text-center mt-16">

                <h2 className="text-2xl font-bold text-[#367485]">
                    Creating Unforgettable Experiences
                </h2>

                <p className="text-gray-500 mt-2">
                    Quality equipment for every special occasion.
                </p>

            </div>

        </div>

    )
}
