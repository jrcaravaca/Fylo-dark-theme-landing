import { features } from "./CONST"
import type { Feature } from "../models/feature.model"

export const Features = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-35 max-w-230 mx-auto">
            {
                features.map(({title, description, iconUrl}: Feature) => (
                    <div key={title} className="flex flex-col items-center text-center">
                        <img src={iconUrl} alt={title} />
                        <div>
                            <h3 className="font-bold mb-2">
                                {title}
                            </h3>
                            <p>
                                {description}
                            </p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}