import Container from "../../common/Container"
import { galleryPicsData } from "../../constant"
import Masonry from "react-masonry-css"

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    480: 1,
  }
  return (
    <div>
      <Container className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-zinc-700 mb-10">
            Découvrez nos gadgetsv
          </h2>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-2 mt-10"
            columnClassName="flex flex-col gap-2"
          >
            {galleryPicsData.map((item, i) => (
              <img
                key={i}
                src={item.image}
                alt={`Gallery pics ${i + 1}`}
                className={`w-full h-full  object-cover p-2 overflow-hidden cursor-pointer  border-4 border-[#50B4B4] ${item.height} `}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            ))}
          </Masonry>
        </div>
      </Container>
    </div>
  )
}

export default Gallery
