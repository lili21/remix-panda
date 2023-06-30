import { css } from "styled-system/css"

function Image({ src, className, alt }: { src: string, className?: string, alt: string}) {
  return <img src={src} className={className} alt={alt} />
}

export default function Test() {
  return (
    <>
      <div
        className={css({
          color: 'pink',
          fontSize: '20px',
          fontWeight: 600,
          padding: '20px'
        })}>
          Hello, Test
      </div>
      <Image alt="wala" className={css({ width: '100%', height: 'auto'})} src="https://akmweb.viztatech.com/web/svnres/file/50_e4bb32c9ea75c5de397f2dc17a3cf186.jpg" />
    </>
  )
}
