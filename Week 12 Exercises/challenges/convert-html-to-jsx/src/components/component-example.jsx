const image = new URL('/public/image.png', import.meta.url)

export function ComponentExample() {
  return (
    <>
      <h1>Hello, Component!</h1>
      <img src={image} alt="dude" />
    </>
  )
}
