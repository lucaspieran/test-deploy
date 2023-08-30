import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path, name, locale } = req.body?.entry || {}
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }
  const lang = locale === 'en' ? '/en' : '/es'
  try {
    path
      ? await res.revalidate(lang + '/' + path)
      : await res.revalidate(lang + '/case-studies/' + name)

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
