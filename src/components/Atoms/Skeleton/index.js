
const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="rounded-lg h-10"></div>
    </div>
  ))
}

export default Skeleton