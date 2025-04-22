import Markdown from 'react-markdown'
import Image from "next/image";


export default function Home() {
  const title =
  `# Skibidi Toilet
  [Discord](https://discord.gg)
  ![image](https://media.discordapp.net/attachments/1324902261411020872/1363539931242434641/image.png?ex=68090a04&is=6807b884&hm=631542077c67e40990b4fdc9a9a03f4a1fe8d786cfb63ae96576a78affcb5f69&=&format=webp&quality=lossless)

  `
  
  return (
    <Markdown>
      {title}
    </Markdown>
  )
}
