import Button from "../common/Button"
import Container from "../common/Container"

const Categories = ["All", "Graphic Cards", "Monitors", "Power Supply"]

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <Container>
        <div>
          {Categories.map((cat) => (
            <Button label={cat} key={cat} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
