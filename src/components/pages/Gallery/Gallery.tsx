import Container from "../../common/Container"
import { galleryImages } from "../../constant"


const Gallery = () => {
  return (
    <div>
      <Container className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-zinc-700 mb-10">
            Nos Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative w-full overflow-hidden rounded-lg shadow-lg group"
              >
                <div className="pt-[100%]"></div>{" "}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover p-4
                           transform group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-zinc-300 bg-opacity-40 flex items-center justify-center 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-white text-lg font-semibold">
                    <h1 className="text-black text-center font-bold">
                      Motos Pot GeaForce RTX
                    </h1>
                    <p className="text-black text-center p-8">
                      Saepe nihil, corporis in maiores, dignissimos temporibus
                      distinctio reprehenderit unde ipsa ex possimus, nesciunt
                      minus odit tempore sequi facilis amet laudantium
                      laboriosam.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallery
