export default function InfoImage({ imageURL }){
  return(
    <div
      style={{
        borderRadius: '0 6% 6% 0/4%',
        backgroundImage: `url(${imageURL})`,
        width: '250px',
        height: '400px',
        backgroundSize: 'cover',
      }}
    />
  )
}
