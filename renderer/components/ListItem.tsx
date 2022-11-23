import { User } from 'interfaces'
import Link from 'next/link'

type Props = {
  data: User
}

// noinspection HtmlUnknownTarget
const ListItem = ({ data }: Props) => (
  <Link href="/detail/[id]" as={`/detail/${data.id}`}>
    {data.id}: {data.name}
  </Link>
)

export default ListItem
