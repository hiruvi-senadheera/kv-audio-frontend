export default function ProductCard(props) {

    const item = props.item

    return (

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                        transition-all duration-300 overflow-hidden 
                        border border-gray-100 w-full mx-5 max-w-sm">

            {/* Product Image */}
            <div className="relative h-56 bg-gray-100">

                <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />

                {/* Availability Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 
                    rounded-full text-xs font-semibold
                    ${item.availability
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>

                    {item.availability ? "Available" : "Unavailable"}

                </span>

            </div>


            {/* Product Details */}
            <div className="p-5">

                {/* Category and Product ID */}
                <div className="flex justify-between items-center mb-2">

                    <span className="text-xs font-semibold text-blue-600 
                                     bg-blue-50 px-3 py-1 rounded-full">
                        {item.category}
                    </span>

                    <span className="text-xs text-gray-400">
                        {item.key}
                    </span>

                </div>


                {/* Product Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                </h2>


                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed 
                              line-clamp-3 mb-4">
                    {item.description}
                </p>


                {/* Dimensions */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">

                    <span className="font-medium">Dimensions:</span>

                    <span>{item.dimensions}</span>

                </div>


                {/* Price */}
                <div className="border-t border-gray-100 pt-4 
                                flex justify-between items-center">

                    <div>
                        <p className="text-xs text-gray-400">
                            Rental Price
                        </p>

                        <h3 className="text-2xl font-bold text-blue-600">
                            LKR {item.price.toLocaleString()}
                        </h3>
                    </div>


                    {/* Rent Button */}
                    <button
                        disabled={!item.availability}
                        className={`px-5 py-2.5 rounded-xl font-semibold 
                            text-sm transition-all duration-300
                            ${item.availability
                                ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        {item.availability ? "Rent Now" : "Unavailable"}
                    </button>

                </div>

            </div>

        </div>

    )
}